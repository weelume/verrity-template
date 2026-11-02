'use client'
import {useRef} from 'react'
import {motion,useScroll,useTransform,useReducedMotion} from 'framer-motion'
import {type PageProps,t} from '../types'
import {Shell} from '../components/Shell'
import {ButtonLink,Copy,Picture,SiteLink,Title,usePage} from '../components/Primitives'
import {Workbench} from '../components/Workbench'
import {logos,logoNames} from '../content/site'
import {ProductPillars,WorkflowSection,FeatureCarousel,NumbersSection,SecuritySection,Testimonials} from '../components/ProductSections'
import {Faq} from '../components/Faq'
import {Cta} from '../components/Cta'
import {ArticleCards,FeaturedArticle} from '../components/BlogCards'
import {articles} from '../content/articles'
function Hero(){const ref=useRef<HTMLElement>(null),reduce=useReducedMotion(),{scrollYProgress}=useScroll({target:ref,offset:['start start','end start']}),y=useTransform(scrollYProgress,[0,1],[0,180]),{locale}=usePage();return <section className="v-hero" ref={ref}><div className="v-hero-background"><motion.img src="/templates/verrity/images/W3N8oMZnMM1JLDCI1yGoLdBEU.jpg" alt={t(['暮色中的云海','Sea of fog at dusk'],locale)} style={{y:reduce?0:y}}/></div><div className="v-hero-copy"><Title as="h1" text={['每个答案/都有据可查','The AI copilot that shows its work.']}/><p><Copy text={['逐页阅读 逐项引用\n把重要决定始终交到人手中','Verity reads every page, cites every answer, and keeps a person in charge of every decision that matters.']}/></p><div className="v-hero-form"><input type="email" aria-label={t(['工作邮箱','Work email'],locale)} placeholder={t(['工作邮箱','Work email'],locale)}/><ButtonLink slug="contact"><Copy text={['预约演示','Book a demo']}/></ButtonLink></div><SiteLink slug="#tour" className="v-hero-tour"><svg width="13" height="15" viewBox="0 0 13 15" fill="none" aria-hidden="true"><path d="M2 2l9 5.5L2 13V2Z" stroke="currentColor" strokeWidth="1.2"/></svg><Copy text={['两分钟 了解工作方式','Watch the two-minute tour']}/></SiteLink></div><div className="v-hero-workbench"><Workbench tilt/></div></section>}
function Trusted(){return <section className="v-container v-trusted"><h2><Copy text={['400 多家企业的风控、法务和财务团队信赖之选','Trusted by risk, legal and finance teams at 400+ companies']}/></h2><div className="v-logo-grid">{logos.slice(0,3).map((file,i)=><div key={file}><Picture file={file} alt={logoNames[i]}/></div>)}<div className="v-logo-number"><b>400+</b><small><Copy text={['受监管团队','regulated teams']}/></small></div>{logos.slice(3).map((file,i)=><div key={file}><Picture file={file} alt={logoNames[i+3]}/></div>)}</div></section>}
export default function HomePage(props:PageProps){return <Shell {...props} hero><Hero/><Trusted/><ProductPillars/><WorkflowSection/><FeatureCarousel/><NumbersSection/><SecuritySection/><Testimonials/><section className="v-section v-container"><div className="v-section-heading"><div><Title text={['来自博客的/最新消息','Latest from the blog']}/><p className="v-muted" style={{marginTop:20}}><Copy text={['产品动态、实用指南与团队故事。','Product news, guides and stories from the team.']}/></p></div><ButtonLink slug="blog" secondary><Copy text={['查看全部文章','View all posts']}/></ButtonLink></div><FeaturedArticle/><ArticleCards items={articles.slice(1,5)}/></section><Faq/><Cta/></Shell>}
