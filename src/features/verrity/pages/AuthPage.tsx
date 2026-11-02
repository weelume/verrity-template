'use client'
import {Shell} from '../components/Shell'
import {Copy,Title} from '../components/Primitives'
import {LocalForm} from '../components/Forms'
import type {PageProps} from '../types'
export default function AuthPage({kind,...props}:PageProps&{kind:'sign-in'|'sign-up'}){return <Shell {...props}><section className="v-container v-page-top v-auth-page"><Title as="h1" text={kind==='sign-up'?['创建你的账户','Create your account']:['登录 Verity','Sign in to Verity']}/><p className="v-muted"><Copy text={kind==='sign-up'?['从两周试用开始 了解自己的工作空间','Start a two-week pilot. We’ll email you a link to set up your workspace.']:['使用你的工作账户','Use your work account.']}/></p><LocalForm kind={kind}/></section></Shell>}
