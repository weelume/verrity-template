'use client'
import {Shell} from '../components/Shell'
import {Copy,Picture,Title,Reveal} from '../components/Primitives'
import {LocalForm,ContactEmails} from '../components/Forms'
import {authorImages} from '../content/articles'
import type {PageProps} from '../types'
export default function ContactPage(props:PageProps){return <Shell {...props}><section className="v-container v-page-top v-contact-page"><div><Title as="h1" text={['写信给我们','Write to us']}/><blockquote><Copy text={['“告诉我们你正在做什么。我们中的一位会回复你，通常就在当天。”','“Tell us what you’re working on. One of us will write back, usually the same day.”']}/></blockquote><div className="v-contact-people"><div>{['Ana Ruiz','Leo Hart','Maya Kerr'].map(name=><Picture key={name} file={authorImages[name]}/>)}</div><span>Ana, Leo and Sara</span></div><ContactEmails/></div><Reveal direction="right"><LocalForm kind="contact"/></Reveal></section></Shell>}
