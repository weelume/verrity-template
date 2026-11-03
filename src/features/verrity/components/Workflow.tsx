'use client'
import {useCallback,useRef,useState} from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import {workflow} from '../content/site'
import {t,type Text} from '../types'
import {debug} from '../utils'
import {Copy,ButtonLink,Picture,Title,usePage} from './Primitives'
import {MotionLog,Typewriter,useCycle} from './Animation'
import {WorkspaceIcon,type WorkspaceIconName} from './WorkspaceIcon'

const icons:WorkspaceIconName[]=['sparkle','records','shield']
function RequestCard(){return <div className="v-flow-card v-flow-request"><dl>{([
 [['请求','Request'],['访问分析平台','Access to analytics']],
 [['来源','Source'],['Slack','Slack']],
 [['申请人','Requested by'],['Jonas Weber','Jonas Weber']],
 [['已找到负责人','Owner found'],['Maya Chen','Maya Chen']],
] satisfies [Text,Text][]).map(([label,value],i)=><div key={i}><dt><Copy text={label}/></dt><dd>{i>1&&<img className="v-flow-avatar" src={'/templates/verrity/images/'+(i===2?'RxM5yzHp72ILbElHpb8TYt69TVc.jpg':'HUP06xXCSM7krETbm5xSD6mPH0g.jpg')} alt=""/>}<Copy text={value}/></dd></div>)}</dl><p className="v-flow-policy"><WorkspaceIcon name="sparkle"/><Copy text={['符合你的访问政策','Matches your access policy']}/></p></div>}
function DraftCard({reduced}:{reduced:boolean|null}){
 const [message,setMessage]=useState<Text|null>(null)
 const [ready,setReady]=useState(false),complete=useCallback(()=>setReady(true),[setReady])
 const {locale}=usePage()
 return <div className="v-flow-card v-flow-draft">
  <header><span><Copy text={['回复 Jonas Weber','Reply to Jonas Weber']}/></span><span className="v-live"><Copy text={ready?['可供审核','Ready for review']:['正在起草','Drafting']}/></span></header>
  <div className="v-flow-context"><b><Copy text={['上下文已就绪','Context gathered']}/></b>{([
   ['访问政策 第 3 节','Access policy, section 3'],['Jonas 属于分析团队','Jonas is on the analytics team'],['已有 2 次相似请求获批','2 similar requests approved'],
  ] satisfies Text[]).map((line,i)=><motion.p key={i} initial={reduced?false:{opacity:0,y:5}} animate={{opacity:1,y:0}} transition={{delay:i*.2}}><WorkspaceIcon name="check"/><Copy text={line}/></motion.p>)}</div>
  <div className="v-flow-draft-body"><small><Copy text={['草稿','Draft']}/></small><p><Typewriter onComplete={complete} text={t(['Jonas 你好，你现在拥有分析平台的只读权限，有效期为 90 天。如需更多权限，请告诉我们。','Hi Jonas, you now have read-only access to Analytics for 90 days. Shout if you need more.'],locale)}/></p></div>
  <footer><button onClick={()=>{setMessage(['本地演示 回复未发送','Local demonstration. No reply was sent.']);debug('workflow.draft.preview',{action:'send',local:true})}}><Copy text={['发送回复','Send reply']}/></button><button onClick={()=>setMessage(['草稿编辑示意 未连接真实消息','Draft preview. No message service is connected.'])}><Copy text={['编辑','Edit']}/></button><span><Copy text={['置信度 96%','96% confident']}/></span></footer>
  {message&&<p className="v-flow-demo-status" role="status"><Copy text={message}/></p>}
 </div>
}
function ApprovalCard({progress,reduced}:{progress:number;reduced:boolean|null}){const [decision,setDecision]=useState<'approved'|'declined'|null>(null),approved=decision==='approved'||(!decision&&progress>.65);return <div className="v-flow-card v-flow-approval"><header><Picture className="v-flow-avatar" file="RxM5yzHp72ILbElHpb8TYt69TVc.jpg"/><span>Jonas Weber<small><Copy text={['分析团队 · 刚刚','Analytics · just now']}/></small></span><span className="v-live"><Copy text={approved?['已批准','Approved']:['需要你审批','Needs your approval']}/></span></header><h3><Copy text={['访问分析平台','Access to analytics']}/></h3><dl>{([['角色','Role','只读查看者','Viewer, read only'],['时限','Duration','90 天','90 days'],['政策','Policy','符合第 3 节','Matches section 3']] as const).map(([zh,en,valueZh,valueEn])=><div key={en}><dt><Copy text={[zh,en]}/></dt><dd><Copy text={[valueZh,valueEn]}/></dd></div>)}</dl><AnimatePresence mode="wait">{approved?<motion.div className="v-flow-receipt" key="approved" initial={reduced?false:{opacity:0,y:7}} animate={{opacity:1,y:0}}><b><WorkspaceIcon name="check"/><Copy text={['已由你批准','Approved by you']}/></b><p><Copy text={['已在 Slack 告知 Jonas','Jonas was told in Slack']}/></p><small><Copy text={['用时 42 秒','Decided in 42 seconds']}/></small></motion.div>:decision==='declined'?<div className="v-flow-receipt"><Copy text={['已拒绝 · 仅为本地演示','Declined · local demonstration']}/></div>:<motion.div key="actions" className="v-flow-actions"><button onClick={()=>{setDecision('approved');debug('workflow.approval',{decision:'approved',local:true})}}><Copy text={['批准','Approve']}/></button><button onClick={()=>{setDecision('declined');debug('workflow.approval',{decision:'declined',local:true})}}><Copy text={['拒绝','Decline']}/></button></motion.div>}</AnimatePresence></div>}

export function WorkflowSection(){
 const {locale}=usePage(),ref=useRef<HTMLDivElement>(null),[paused,setPaused]=useState(false)
 const {step,setStep,reduced,progress}=useCycle(ref,workflow.length,6500,paused)
 return <section ref={ref} className="v-section v-container v-workflow" id="tour" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setPaused(false)}}>
  <MotionLog name="workflow" step={step}/>
  <div><Title text={['让工作/自行向前','Work that moves/on its own']}/><p className="v-muted"><Copy text={['来自不同工具的请求，都能被读懂、准备好，只把需要你决定的部分交给你。','Requests arrive from every tool you use. Verity understands them, prepares the work and brings you only the decisions.']}/></p><ButtonLink slug="sign-up"><Copy text={['开始使用','Get started']}/></ButtonLink>
   <div className="v-workflow-tabs" role="tablist" aria-label={t(['工作流程','Workflow'],locale)}>{workflow.map((item,i)=><div key={i}><button role="tab" id={'workflow-tab-'+i} aria-controls="workflow-panel" aria-selected={step===i} onClick={()=>{setStep(i);debug('workflow.select',{step:i})}}><span><WorkspaceIcon name={icons[i]}/></span><Copy text={item.title}/></button><AnimatePresence initial={false}>{step===i&&<motion.div initial={reduced?false:{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.35}}><p><Copy text={item.description}/></p></motion.div>}</AnimatePresence><span className="v-tab-progress"><i style={{transform:`scaleX(${step===i?progress:0})`}}/></span></div>)}</div>
  </div>
  <div className="v-workflow-scene" role="tabpanel" id="workflow-panel" aria-labelledby={'workflow-tab-'+step}>
   <AnimatePresence><motion.div className="v-flow-background" key={step} initial={reduced?false:{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.7}}><Picture file={['QCWQz2sR3KocP1QexxggqGab0.jpg','BUgE4kKtQWiQbx5S9UPtbH0AE.jpg','qRNP7tuDbBNXq4mVb0yPQ9odFo.jpg'][step]}/></motion.div></AnimatePresence>
   {step===0&&<div className="v-flow-graph" aria-hidden="true"><svg viewBox="0 0 500 235" fill="none" preserveAspectRatio="none"><path d="M82 25V130Q82 155 107 155H393Q418 155 418 130V25M194 83V155M306 83V155M250 155V235" stroke="currentColor"/><motion.circle r="3" cx="250" animate={reduced?{cy:190}:{cy:[155,235],opacity:[0,1,0]}} transition={{duration:2.5,repeat:Infinity}} fill="currentColor"/></svg><span className="v-flow-tool v-flow-tool-slack"><Picture file="3MK4QKR2dLntb6TukMpNTo40lA.svg"/></span><span className="v-flow-tool v-flow-tool-gmail"><Picture file="KUTQNDwz6Rj4bfnBbG32huBdw.svg"/></span><span className="v-flow-tool v-flow-tool-sales"><Picture file="eM9eEN76Tmx94Qr994fFZyWsyMM.svg"/></span><span className="v-flow-tool v-flow-tool-jira"><Picture file="DnYeGIMXQsEpISBVJR4Wqk4hbNc.svg"/></span><span className="v-flow-event"><WorkspaceIcon name={icons[step]}/><Copy text={step===0?['收到新请求','New request arrives']:step===1?['上下文已就绪','Context gathered']:['需要你审批','Needs your approval']}/></span></div>}
   <div className={'v-flow-card-holder'+(step>0?' is-centered':'')}><AnimatePresence mode="wait"><motion.div className="v-workflow-step" key={step} initial={reduced?false:{opacity:0,y:20,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-12}} transition={{duration:.45}}>{step===0?<RequestCard/>:step===1?<DraftCard reduced={reduced}/>:<ApprovalCard progress={progress} reduced={reduced}/>}</motion.div></AnimatePresence></div>
  </div>
 </section>
}
