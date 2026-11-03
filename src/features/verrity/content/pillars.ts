import type {Text} from '../types'
export const workspaceTools=[
 {name:'Google Drive',image:'R9invuQl7TWHqWpsloodpj3iGNU.svg'},
 {name:'Slack',image:'3MK4QKR2dLntb6TukMpNTo40lA.svg'},
 {name:'Salesforce',image:'eM9eEN76Tmx94Qr994fFZyWsyMM.svg'},
 {name:'Gmail',image:'KUTQNDwz6Rj4bfnBbG32huBdw.svg'},
 {name:'Notion',image:'P1resJnIGnv1VjT1wVWbhoTSw4.svg'},
 {name:'Jira',image:'DnYeGIMXQsEpISBVJR4Wqk4hbNc.svg'},
 {name:'HubSpot',image:'afeohhNXbhyo54mCQNf7obPa564.svg'},
 {name:'GitHub',image:'KiVHjFc6pzjyT8FKIbnb3GmzBi8.svg'},
] as const
export const routineQueue:readonly {tool:number;text:Text}[]=[
 {tool:3,text:['已起草回复 · Acme Co','Reply drafted · Acme Co']},
 {tool:5,text:['工单 #4471 已分流','Ticket #4471 triaged']},
 {tool:2,text:['发票 #8812 已匹配','Invoice #8812 matched']},
 {tool:1,text:['已回复 · #support','Reply sent · #support']},
 {tool:0,text:['合同已续约 · Northwind','Contract renewed · Northwind']},
 {tool:6,text:['线索已分配给 Sam','Lead routed to Sam']},
 {tool:4,text:['会议纪要已归档','Meeting notes filed']},
 {tool:7,text:['发行说明已起草','Release notes drafted']},
]
