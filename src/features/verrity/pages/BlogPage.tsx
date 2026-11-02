'use client'
import {useState} from 'react'
import {Shell} from '../components/Shell'
import {Copy,Title,usePage} from '../components/Primitives'
import {FeaturedArticle,ArticleCards} from '../components/BlogCards'
import {articles} from '../content/articles'
import {t,type PageProps,type Text} from '../types'
import {debug} from '../utils'
function Blog(){const [category,setCategory]=useState('All posts'),{locale}=usePage(),categories:Text[]=[['全部文章','All posts'],...articles.map(item=>item.category)],items=category==='All posts'?articles:articles.filter(item=>item.category[1]===category);return <section className="v-container v-page-top v-blog-page"><Title as="h1" text={['博客','Blog']}/><div className="v-blog-layout"><aside><p className="v-muted"><Copy text={['主题','Topics']}/></p><div className="v-blog-topics" role="tablist" aria-label={t(['文章分类','Blog topics'],locale)}>{categories.map(item=><button key={item[1]} role="tab" aria-selected={category===item[1]} onClick={()=>{setCategory(item[1]);debug('blog.filter',{category:item[1]})}}><Copy text={item}/></button>)}</div></aside><div aria-live="polite">{items[0]&&<FeaturedArticle article={items[0]}/>}<ArticleCards items={items.slice(1)}/></div></div></section>}
export default function BlogPage(props:PageProps){return <Shell {...props}><Blog/></Shell>}
