import data from './faq.json'
import type {Text} from '../types'
import {localized} from './schema'
export interface FaqGroup {id:string;title:Text;items:{question:Text;answer:Text}[]}
export const faq:FaqGroup[]=data.map(group=>({...group,title:localized(group.title),items:group.items.map(item=>({question:localized(item.question),answer:localized(item.answer)}))}))
