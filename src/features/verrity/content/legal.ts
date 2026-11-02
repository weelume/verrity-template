import data from './legal.json'
import type {DetailBlock,Text} from '../types'
import {localized,detailBlocks} from './schema'
export interface Legal {slug:string;title:Text;date:string;minutes:number;blocks:DetailBlock[]}
export const legalPages:Legal[]=data.map(page=>({...page,title:localized(page.title),blocks:detailBlocks(page.blocks)}))
