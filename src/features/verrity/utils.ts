import type {Locale} from './types'
export function pageHref(basePath:string,locale:Locale,slug=''):string{return `${basePath}${locale==='en'?'/en':''}${slug?'/'+slug:''}`||'/'}
export function languageHref(pathname:string,search:string,hash:string,basePath:string,locale:Locale):string{
  const relative=pathname.slice(basePath.length).replace(/^\/en(?=\/|$)/,'').replace(/^\//,'')
  return pageHref(basePath,locale==='zh'?'en':'zh',relative)+search+hash
}
export type Plan='starter'|'pro'
export type Billing='monthly'|'yearly'
export const prices:Record<Plan,Record<Billing,number>>={starter:{monthly:19,yearly:15},pro:{monthly:49,yearly:39}}
export function calculatePrice(seats:number,plan:Plan,billing:Billing){
  if(!Number.isInteger(seats)||seats<1||seats>100)throw new RangeError('团队人数须为 1–100 的整数')
  return {perSeat:prices[plan][billing],annualPerSeat:prices[plan][billing]*12,annualTotal:seats*prices[plan][billing]*12,savings:seats*(prices[plan].monthly-prices[plan].yearly)*12}
}
export function debug(event:string,context:Record<string,string|number|boolean>={}){if(process.env.NODE_ENV==='development')console.debug('[verrity] '+event+' '+JSON.stringify(context))}
