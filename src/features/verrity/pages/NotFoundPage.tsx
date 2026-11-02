'use client'
import {Shell} from '../components/Shell'
import {ButtonLink,Copy,Title} from '../components/Primitives'
import type {PageProps} from '../types'
export default function NotFoundPage(props:PageProps){return <Shell {...props}><section className="v-container v-not-found"><span>404</span><Title as="h1" text={['没有找到这一页','This page could not be found']}/><p><Copy text={['页面可能已移动 请回到首页继续探索','The page may have moved. Start again from the home page.']}/></p><ButtonLink slug=""><Copy text={['回到首页','Back to home']}/></ButtonLink></section></Shell>}
