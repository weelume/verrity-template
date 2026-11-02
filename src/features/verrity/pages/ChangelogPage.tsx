'use client'
import {Shell} from '../components/Shell'
import {Copy,Picture,Reveal,Title,usePage} from '../components/Primitives'
import {changelog} from '../content/changelog'
import type {PageProps} from '../types'
function Changelog(){const {locale}=usePage();return <section className="v-container v-page-top v-changelog"><div className="v-changelog-heading"><Title as="h1" text={['更新日志','Changelog']}/><p className="v-muted"><Copy text={['新功能、优化与修复 每两周交付','New features, improvements and fixes, shipped every two weeks.']}/></p></div><div className="v-changelog-list">{changelog.map(item=><Reveal key={item.version} className="v-release"><aside><span>v{item.version}</span><time dateTime={item.date}>{new Intl.DateTimeFormat(locale==='zh'?'zh-CN':'en-US',{dateStyle:'long',timeZone:'UTC'}).format(new Date(item.date))}</time></aside><article><Picture file={item.image}/><h2><Copy text={item.title}/></h2><p className="v-muted"><Copy text={item.description}/></p><div className="v-release-tags">{item.tags.map(tag=><span key={tag[1]}><Copy text={tag}/></span>)}</div><ul>{item.items.map(line=><li key={line[1]}><Copy text={line}/></li>)}</ul></article></Reveal>)}</div></section>}
export default function ChangelogPage(props:PageProps){return <Shell {...props}><Changelog/></Shell>}
