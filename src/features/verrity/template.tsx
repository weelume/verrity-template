import type {ComponentType} from 'react'
import screenshotData from './content/screenshots.json'
import {brand} from './config/brand'
import {articles} from './content/articles'
import {jobs} from './content/jobs'
import {legalPages} from './content/legal'
import type {PageProps} from './types'
interface Page {slug:string;title:string;localizedTitles:{en:string};load:()=>Promise<{default:ComponentType<PageProps>}>}
interface Screenshot {src:string;alt:string;device:'desktop'|'tablet'|'mobile';width:number;height:number}
const pages:Page[]=[
 {slug:'',title:'首页',localizedTitles:{en:'Home'},load:()=>import('./pages/HomePage')},
 {slug:'about',title:'关于我们',localizedTitles:{en:'About'},load:()=>import('./pages/AboutPage')},
 {slug:'pricing',title:'价格方案',localizedTitles:{en:'Pricing'},load:()=>import('./pages/PricingPage')},
 {slug:'integrations',title:'集成生态',localizedTitles:{en:'Integrations'},load:()=>import('./pages/IntegrationsPage')},
 {slug:'careers',title:'加入我们',localizedTitles:{en:'Careers'},load:()=>import('./pages/CareersPage')},
 {slug:'blog',title:'博客',localizedTitles:{en:'Blog'},load:()=>import('./pages/BlogPage')},
 {slug:'changelog',title:'更新日志',localizedTitles:{en:'Changelog'},load:()=>import('./pages/ChangelogPage')},
 {slug:'contact',title:'联系我们',localizedTitles:{en:'Contact'},load:()=>import('./pages/ContactPage')},
 ...(['sign-up','sign-in'] as const).map((kind):Page=>({slug:kind,title:kind==='sign-up'?'注册演示':'登录演示',localizedTitles:{en:kind==='sign-up'?'Sign up':'Sign in'},load:async()=>{const {default:AuthPage}=await import('./pages/AuthPage');return {default:(props:PageProps)=><AuthPage {...props} kind={kind}/>}}})),
 ...articles.map((article):Page=>({slug:'blog/'+article.slug,title:article.title[0].replaceAll('/',''),localizedTitles:{en:article.title[1]},load:async()=>{const {default:ArticlePage}=await import('./pages/ArticlePage');return {default:(props:PageProps)=><ArticlePage {...props} article={article}/>}}})),
 ...jobs.map((job):Page=>({slug:'careers/'+job.slug,title:job.title[0],localizedTitles:{en:job.title[1]},load:async()=>{const {default:JobPage}=await import('./pages/JobPage');return {default:(props:PageProps)=><JobPage {...props} job={job}/>}}})),
 ...legalPages.map((page):Page=>({slug:'legal/'+page.slug,title:page.title[0],localizedTitles:{en:page.title[1]},load:async()=>{const {default:LegalPage}=await import('./pages/LegalPage');return {default:(props:PageProps)=><LegalPage {...props} page={page}/>}}})),
 {slug:'404',title:'未找到页面',localizedTitles:{en:'Not found'},load:()=>import('./pages/NotFoundPage')},
]
const screenshots=screenshotData as [Screenshot,...Screenshot[]]
export const verrityTemplate={id:'verrity',gitUrl:brand.gitUrl,name:'Verity · 可溯源 AI 协作',localizedNames:{en:'Verity · AI copilot'},sceneId:'corporate-site',listed:false,tags:['AI SaaS','可溯源','工作流','中英文','三端响应式'],summary:'云海暮色与深色工作台构成的 AI 协作官网，包含动态助手、价格计算器、集成分类、团队、招聘、博客、更新日志与完整双语政策',accentColor:'#d8b79a',cover:screenshots[0].src,screenshots,surfaces:[{id:'site',name:'官网',platform:'pc' as const,locales:['zh','en'] as const,pages}]}
