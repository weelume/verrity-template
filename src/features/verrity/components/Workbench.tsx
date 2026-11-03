'use client'
import {useRef,useState} from 'react'
import {AnimatePresence,motion,useScroll,useTransform} from 'framer-motion'
import {Copy,Mark,usePage} from './Primitives'
import {t} from '../types'
import {debug} from '../utils'
import {workbenchClaims,workbenchSummary,workbenchSources,renewalRows} from '../content/workbench'
import {MotionLog,useCycle,useTypedText} from './Animation'
import {WorkspaceIcon} from './WorkspaceIcon'

const files=['Northwind MSA','Halcyon order form','Policy RM-12','Brightline MSA','Q2 approvals','Renewal calendar','Vendor list','+ 41 more']
const navigation=[['grid',['概览','Overview']],['inbox',['收件箱','Inbox']],['records',['记录','Records']],['chart',['销售管道','Pipeline']],['workflow',['工作流','Workflows']],['sparkle',['AI 助手','Assistant']]] as const

function CitedAnswer({cycle,onSelect}:{cycle:number;onSelect:(index:number)=>void}){
 const {locale}=usePage(),claims=workbenchClaims.map(item=>t(item,locale)),text=claims.join(' '),{ref,length}=useTypedText(text,cycle)
 return <span ref={ref} className="v-typewriter v-cited-answer" aria-label={text}>
  <span className="v-typewriter-measure" aria-hidden="true">{claims.map((claim,i)=><span key={i}>{claim}<span className="v-citation-number">{i+1}</span>{' '}</span>)}</span>
  <span className="v-typewriter-visible">{claims.map((claim,i)=>{const start=claims.slice(0,i).join(' ').length+(i?1:0),complete=length>=start+claim.length;return <span key={i}><span aria-hidden="true">{claim.slice(0,Math.max(0,length-start))}</span>{complete&&<button className="v-citation-number" onClick={()=>onSelect(i)} aria-label={t(['查看来源','View source'],locale)+' '+(i+1)}>{i+1}</button>}{' '}</span>})}</span>
 </span>
}

export function Workbench({compact=false,tilt=false}:{compact?:boolean;tilt?:boolean}){
 const {locale,brandName}=usePage(),ref=useRef<HTMLDivElement>(null),[paused,setPaused]=useState(false)
 const {step,cycle,reduced}=useCycle(ref,7,2100,paused)
 const [selected,setSelected]=useState<number|null>(null),[copyStatus,setCopyStatus]=useState('')
 const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']})
 const rotate=useTransform(scrollYProgress,[0,.65],[tilt?9:0,0]),reading=step<2
 const selectSource=(index:number)=>{setSelected(index);debug('workbench.source',{index})}
 const copyAnswer=async()=>{try{await navigator.clipboard.writeText(t(workbenchSummary,locale)+'\n\n'+workbenchSources.map((source,i)=>`[${i+1}] ${t(source.title,locale)} · ${t(source.meta,locale)}`).join('\n'));setCopyStatus(t(['已复制含来源的答案','Answer and sources copied'],locale));debug('workbench.copy',{copied:true})}catch{setCopyStatus(t(['无法访问剪贴板 请手动选择答案','Clipboard unavailable. Select the answer to copy it.'],locale));debug('workbench.copy',{copied:false})}}
 return <motion.div ref={ref} className={`v-workbench ${compact?'v-workbench-compact':''}`} style={{rotateX:reduced?0:rotate}} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setPaused(false)}} data-stage={step} aria-label={t(['AI 助手工作台演示','AI assistant workspace demonstration'],locale)}>
  <MotionLog name={compact?'cta-workbench':'hero-workbench'} step={step}/>
  {!compact&&<aside className="v-workbench-sidebar">
   <b><Mark/>{brandName}<WorkspaceIcon name="chevron"/></b>
   <span className="v-mini-input"><WorkspaceIcon name="search"/><Copy text={['搜索任何内容…','Ask anything…']}/><small>⌘K</small></span>
   {navigation.map(([icon,label],i)=><span className={i===5?'is-active':''} key={icon}><WorkspaceIcon name={icon}/><Copy text={label}/></span>)}
   <p><Copy text={['你的智能体','Your agents']}/></p>
   {([['研究','Research'],['支持','Support'],['财务','Finance'],['运营','Operations']] as const).map((label,i)=><span key={label[1]}><i className={'v-status-dot '+(i===3?'v-dot-paused':'')}/><Copy text={label}/><em><Copy text={i===3?['已暂停','Paused']:['运行中','Live']}/></em></span>)}
   <span className="v-workbench-user"><span className="v-avatar-initial">MK</span>Maya Kerr</span>
  </aside>}
  <div className="v-workbench-body">
   {!compact&&<header><span><Copy text={['AI 助手','Assistant']}/></span><div className="v-workbench-header-meta"><small><WorkspaceIcon name="clock"/><Copy text={['最近 7 天','Last 7 days']}/></small><span className="v-live"><i className="v-status-dot"/><Copy text={['运行中','Live']}/></span></div></header>}
   <div className="v-workbench-content">
    <div className="v-answer">
     <div className="v-question"><Copy text={['本季度哪些续约需要我签字？','Which renewals need my sign-off this quarter?']}/></div>
     <div className="v-answer-response">
      <span className="v-ai-icon"><Mark/></span>
      <div className="v-answer-detail">
       <div className="v-reading">{!reading&&<WorkspaceIcon name="check"/>}<span className={reading?'v-reading-pulse':''}><Copy text={reading?['正在阅读 48 份合同与 6 项政策','Reading 48 contracts and 6 policies']:['已阅读 48 份合同与 6 项政策 · 4.2 秒','Read 48 contracts and 6 policies · 4.2s']}/></span></div>
       <motion.div className="v-reading-documents" initial={false} animate={{gridTemplateRows:reading?'1fr':'0fr',opacity:reading?1:0}} transition={{duration:reduced?0:.55}} aria-hidden={!reading}>
        <div><div className="v-document-chips">{files.map((file,i)=><span key={file} className={step===1&&i===1?'is-reading':''}><WorkspaceIcon name={step===1&&i===0?'check':'file'}/>{file==='Q2 approvals'?t(['Q2 审批','Q2 approvals'],locale):file==='Renewal calendar'?t(['续约日历','Renewal calendar'],locale):file==='Vendor list'?t(['供应商名录','Vendor list'],locale):file==='+ 41 more'?t(['另有 41 份','+ 41 more'],locale):file}</span>)}</div><div className="v-skeleton"><i/><i/><i/></div></div>
       </motion.div>
       <div className="v-answer-result">
        <AnimatePresence mode="wait">{!reading&&<motion.div key={'answer-'+cycle} initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.4}}>
         <p className="v-answer-summary"><CitedAnswer cycle={cycle} onSelect={selectSource}/></p>
         <div className="v-renewals" aria-label={t(['续约审核清单','Renewal review list'],locale)}>{renewalRows.map((row,i)=><motion.div key={row.company} className="v-renewal" aria-hidden={i>step-3} initial={{opacity:0,y:8}} animate={{opacity:i<=step-3?1:0,y:i<=step-3?0:8}} transition={{duration:reduced?0:.45}}>
          <b>{row.company}</b><span>{row.price}</span><span><Copy text={row.status}/></span><button tabIndex={i>step-3?-1:0} className={i===0?'v-renewal-decide':''} onClick={()=>selectSource(i)}><Copy text={row.action}/></button>
         </motion.div>)}</div>
         <motion.div className="v-answer-actions" animate={{opacity:step>=5?1:0}}><button disabled={step<5} className="v-mini-button" onClick={()=>selectSource(0)}><Copy text={['审核 3 份续约','Review 3 renewals']}/></button><button disabled={step<5} className="v-copy-answer" onClick={copyAnswer}><WorkspaceIcon name="copy"/><Copy text={['复制并附上来源','Copy with sources']}/></button></motion.div>
         <span className="v-sr" role="status">{copyStatus}</span>
        </motion.div>}</AnimatePresence>
       </div>
      </div>
     </div>
     {selected!==null&&<div className="v-inline-source"><b>{selected+1} · <Copy text={workbenchSources[selected].title}/></b><p><Copy text={workbenchSources[selected].quote}/></p><button onClick={()=>setSelected(null)}><Copy text={['收起来源','Close source']}/></button></div>}
     <div className="v-follow-up"><span><Copy text={['继续追问','Ask a follow-up']}/></span><WorkspaceIcon name="plus"/></div>
    </div>
    <aside className="v-sources"><header><b><Mark/><Copy text={['来源','Sources']}/></b><span><Copy text={reading?['正在读取 8 份','8 reading']:[Math.min(3,step-1)+' 份已引用',Math.min(3,step-1)+' cited']}/></span></header>
     {workbenchSources.map((source,i)=><button className={`v-source ${selected===i?'is-selected':''}`} key={i} aria-pressed={selected===i} onClick={()=>selectSource(i)}><span><b><span className="v-source-number">{i+1}</span><Copy text={source.title}/></b><em><WorkspaceIcon name="check"/><Copy text={['已验证','Verified']}/></em></span><small><Copy text={source.meta}/></small><motion.p animate={{opacity:reading||i>step-2?.25:1}}><Copy text={source.quote}/></motion.p></button>)}
    </aside>
   </div>
  </div>
 </motion.div>
}
