import type {DetailBlock,Text} from '../types'
// JSON 在 TypeScript 中只推导为普通数组；在数据边界验证长度和段落类型，拒绝不完整翻译。
export function localized(value:readonly string[]):Text{if(value.length!==2||value.some(text=>!text.trim()))throw new Error('双语内容必须包含完整的中文和英文');return [value[0],value[1]]}
export function detailBlocks(value:{kind:string;text:string[]}[]):DetailBlock[]{return value.map(block=>{if(block.kind!=='h2'&&block.kind!=='h3'&&block.kind!=='p'&&block.kind!=='li'&&block.kind!=='quote')throw new Error('未知正文段落类型：'+block.kind);return {kind:block.kind,text:localized(block.text)}})}
