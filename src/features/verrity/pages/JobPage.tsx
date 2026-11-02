'use client'
import {Shell} from '../components/Shell'
import {Copy,SiteLink,Title} from '../components/Primitives'
import {LocalForm} from '../components/Forms'
import {RichBlocks} from './ArticlePage'
import type {Job,PageProps,Text} from '../types'
export default function JobPage({job,...props}:PageProps&{job:Job}){return <Shell {...props}><article className="v-container v-page-top v-role-detail"><SiteLink slug="careers" className="v-back-link"><Copy text={['全部职位','All roles']}/></SiteLink><div className="v-role-detail-heading"><Title as="h1" text={job.title}/><p className="v-muted"><Copy text={job.summary}/></p></div><div className="v-role-summary">{[{label:['团队','Team'],value:job.department},{label:['工作地点','Location'],value:job.location},{label:['薪资','Pay'],value:[job.salary,job.salary]},{label:['类型','Type'],value:['全职','Full time']}].map(item=><div key={item.label[1]}><small><Copy text={item.label as [string,string]}/></small><span><Copy text={item.value as Text}/></span></div>)}</div><div className="v-role-content"><RichBlocks blocks={job.blocks}/><aside className="v-role-apply"><h2><Copy text={['申请这个职位','Apply for this role']}/></h2><p><Copy text={['大约需要五分钟 无需求职信','Takes about five minutes. No cover letter needed.']}/></p><LocalForm kind="application"/></aside></div></article></Shell>}
