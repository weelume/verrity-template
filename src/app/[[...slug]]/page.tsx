import {notFound} from 'next/navigation'
import {verrityTemplate} from '../../features/verrity/template'
import {brand} from '../../features/verrity/config/brand'
export async function generateMetadata({params}:{params:Promise<{slug?:string[]}>}){const path=(await params).slug??[],locale=path[0]==='en'?'en':'zh',slug=(locale==='en'?path.slice(1):path).join('/'),page=verrityTemplate.surfaces[0].pages.find(item=>item.slug===slug);return {title:(locale==='en'?(page?.localizedTitles.en??'Not found'):(page?.title??'未找到页面'))+' · '+brand.name[locale],description:locale==='zh'?'让每个答案都有据可查':'The AI copilot that shows its work.'}}
export function generateStaticParams(){return verrityTemplate.surfaces[0].pages.flatMap(page=>[{slug:page.slug?page.slug.split('/'):[]},{slug:['en',...(page.slug?page.slug.split('/'):[])]}])}
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const path=(await params).slug??[],locale=path[0]==='en'?'en':'zh',slug=(locale==='en'?path.slice(1):path).join('/'),page=verrityTemplate.surfaces[0].pages.find(item=>item.slug===slug);if(!page)notFound();const {default:Component}=await page.load();return <Component locale={locale} basePath=""/>}
