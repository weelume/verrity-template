import type {ReactNode} from 'react'
export type Locale='zh'|'en'
export type Text=readonly [zh:string,en:string]
export interface PageProps {basePath:string;locale?:Locale}
export interface HostConfig {brandName?:Record<Locale,string>;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Record<Locale,string>;marketplaceAriaLabel?:Record<Locale,string>;filing?:ReactNode}
export interface DetailBlock {kind:'h2'|'h3'|'p'|'li'|'quote';text:Text}
export interface Article {slug:string;title:Text;summary:Text;category:Text;date:string;author:string;image:string;minutes:number;blocks:DetailBlock[]}
export interface Job {slug:string;title:Text;summary:Text;department:Text;location:Text;salary:string;blocks:DetailBlock[]}
export const t=(text:Text,locale:Locale):string=>text[locale==='zh'?0:1]
