import type {Text} from '../types'

export const workbenchSummary:Text=[
 '本季度有三份续约需要你签字。Northwind 的续约涨幅为 12%，高于合同规定的 8% 上限。Halcyon 和 Brightline 将在 21 天后自动续约，除非你提前发出通知。',
 'Three renewals need your sign-off this quarter. Northwind’s renewal comes in 12% above the 8% cap in its contract. Halcyon and Brightline auto-renew in 21 days unless you give notice.',
]
export const workbenchClaims:Text[]=[
 ['本季度有三份续约需要你签字。','Three renewals need your sign-off this quarter.'],
 ['Northwind 的续约涨幅为 12%，高于合同规定的 8% 上限。','Northwind’s renewal comes in 12% above the 8% cap in its contract.'],
 ['Halcyon 和 Brightline 将在 21 天后自动续约，除非你提前发出通知。','Halcyon and Brightline auto-renew in 21 days unless you give notice.'],
]
export const workbenchSources=[
 {title:['续约日历','Renewal calendar'],meta:['表格 · Q4 工作表','Sheet · Q4 tab'],quote:['Northwind · 11 月 1 日 · 需要审批。Halcyon · 10 月 29 日 · 自动续约。','Northwind · 1 Nov · approval required. Halcyon · 29 Oct · auto-renew.']},
 {title:['Northwind 主服务协议.pdf','Northwind MSA.pdf'],meta:['第 6 页 · §4.2','Page 6 · §4.2'],quote:['年度涨幅不得超过上一期限费用的百分之八（8%）。','Annual increases shall not exceed eight percent (8%) of the prior term fees.']},
 {title:['Halcyon 订单.pdf','Halcyon order form.pdf'],meta:['第 2 页 · 期限','Page 2 · Term'],quote:['若未在到期前 30 天发出通知，则自动续约。','Renews automatically unless notice is given 30 days before the end of term.']},
] satisfies {title:Text;meta:Text;quote:Text}[]
export const renewalRows=[
 {company:'Northwind',price:'$153,000',status:['超出上限','Over cap'],action:['决定','Decide']},
 {company:'Halcyon',price:'$48,200',status:['21 天后自动续约','Auto-renews in 21d'],action:['审核','Review']},
 {company:'Brightline',price:'$31,900',status:['21 天后自动续约','Auto-renews in 21d'],action:['审核','Review']},
] satisfies {company:string;price:string;status:Text;action:Text}[]
