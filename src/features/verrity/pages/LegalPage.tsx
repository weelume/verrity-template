'use client'
import {Shell} from '../components/Shell'
import {Copy,Title,usePage} from '../components/Primitives'
import {RichBlocks} from './ArticlePage'
import {type Legal} from '../content/legal'
import {type PageProps} from '../types'
function LegalView({page}:{page:Legal}){const {locale}=usePage();return <><header className="v-container v-page-top v-legal-heading"><Title as="h1" text={page.title}/><p><Copy text={['最后更新','Last updated']}/>　<time dateTime={page.date}>{new Intl.DateTimeFormat(locale==='zh'?'zh-CN':'en-US',{dateStyle:'long',timeZone:'UTC'}).format(new Date(page.date))}</time> · {page.minutes} <Copy text={['分钟阅读','min read']}/></p></header><div className="v-container v-legal-layout"><article><p className="v-legal-notice"><Copy text={['以下为参考站的演示条款，不构成真实服务承诺。正式使用前请依据实际业务、安全措施和适用法律审核。','These are demonstration policies from the reference website, not a live service commitment. Review them against your business, security controls and applicable law before use.']}/></p><RichBlocks blocks={page.blocks}/></article></div></>}
export default function LegalPage({page,...props}:PageProps&{page:Legal}){return <Shell {...props}><LegalView page={page}/></Shell>}
