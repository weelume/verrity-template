import type {Text} from '../types'
export const integrations=[
 ['Google Drive','Documents','WDofgCdQ7fqZ77FTnTiJGUCz1Q.svg'],['Box','Documents','7yggbNkyLRM9IKdTRoJMbJM1S3o.svg'],['Dropbox','Documents','EaaWL82aaJ05Ogedk51wMB3f0Q.svg'],['Egnyte','Documents','1wxBQ7e030A3Ck4V338m9tWxOw.svg'],['Notion','Documents','m2BH3ieTEOm0MzcCN2TADIUcGQ.svg'],['Confluence','Documents','H8h4cdgcQwJsn6kUH6LJfNpVGq4.svg'],['Gmail','Email & meetings','6SU7QaShGN1ezaDGJH8as72Bm0.svg'],['Google Calendar','Email & meetings','g97rEM1wBFlQGtGLTxIdBlk67hY.svg'],['Zoom','Email & meetings','uXE6sVcS477VXEDUYNRhLkIth8.svg'],['QuickBooks','Finance','yfzlxKfLiGOFR81jMLzSZZC8.svg'],['Xero','Finance','GzqgQXp4rdfq7USybRQ4PH50.svg'],['Stripe','Finance','lxH7Uc0oeuZIOmCYJB0ZG6ImzU.svg'],['HubSpot','CRM','CbL64AoUam96k5F1XKz4OEiE.svg'],['Zendesk','CRM','RkupyhVEh0CUBH1a5wsA3FcTew.svg'],['Snowflake','Data','E7QrF5sZf1oOC56EYCAhit6DA.svg'],['Google Sheets','Data','94AVTtOsriF9lZnr6pnVWR9eMOI.svg'],['Okta','Identity','wka5ux2IkbxEGAqFD6BVH8hpsEY.svg'],['Auth0','Identity','DlL9bBnOXTA7HZWEyM83Uo1e6o.svg'],
].map(([name,category,image])=>({name,category,image,beta:name==='Snowflake'||name==='Auth0'}))
export const integrationCategories:Text[]=[['全部','All'],['文档','Documents'],['邮件与会议','Email & meetings'],['财务','Finance'],['CRM','CRM'],['数据','Data'],['身份认证','Identity']]
export const logos=['kLBjfMnFga2LGSVfBqJ0TSesg.png','9CCdSGnp4wZzkoBdBprccR8bZlc.png','hNTVjh3nu0D4k9RQNWwLGn9k.png','TEf88PJtCZWpo6NhZ9ls1KU2ag.png','ASgGrbBExpBcDp2IKQxXXsqAOJA.png','Xe5vOjNnwglfC6zAAuErdNlgHs.png','okLIs2s4rRVtZbiX9QOPazg5tA4.png']
export const logoNames=['Northwind','Halvard','Aster Holdings','Kestrel','Orbis','Halcyon','Meridian & Co']
export const workflow=[
 {title:['每个请求 都能读懂','Every request, understood'],description:['读取各个工具中的请求，理解实际需求，并找到合适的负责人。','Verity reads requests from every tool, works out what is needed and finds the right owner.']},
 {title:['工作 已经拟好','The work, already drafted'],description:['整合政策与历史记录，准备好一份有依据的草稿，供你审核。','Verity gathers the context and prepares a grounded draft for you to review.']},
 {title:['决定 由你来做','You make the call'],description:['凡是需要判断的例外，都会先交给你。每次决定都有完整记录。','Anything that needs judgement comes to you first, with the context for a clear decision.']},
] satisfies {title:Text;description:Text}[]
export const features=[
 {title:['团队协作','Team collaboration'],description:['一起评论、提及与编辑。','Comment, mention and edit together.']},
 {title:['分析与报表','Analytics and reports'],description:['通过实时仪表盘了解工作成效。','See what is working with live dashboards.']},
 {title:['角色与权限','Roles and permissions'],description:['管理查看、编辑与邀请权限。','Control who can view, edit and invite.']},
 {title:['自动化','Automations'],description:['让日常工作自行运转。','Let routine work run on its own.']},
 {title:['通知','Notifications'],description:['只关注需要你的事情。','Stay on top of what needs you, nothing more.']},
 {title:['搜索','Search'],description:['几秒钟内找到工作空间中的内容。','Find anything in your workspace in seconds.']},
] satisfies {title:Text;description:Text}[]
export const testimonials=[
 {company:'Northwind Group',team:['风险与合规','Risk & Compliance'],short:['午饭前处理 1,284 项审核','1,284 reviews cleared before lunch'],quote:['它在午饭前处理了 1,284 项审核，只就其中三项向我确认。而且恰好是最需要确认的三项。','It cleared 1,284 reviews before lunch and asked me about three. They were exactly the right three.'],name:'Dana Whitfield',role:['首席风险官','Chief Risk Officer'],reference:'NW-0381',date:'2026-10-14',signature:'9szodhrSHzUyVMVAHd0nxIZGXo.svg'},
 {company:'Halvard Insurance',team:['理赔运营','Claims Operations'],short:['理赔分流速度提升 78%','78% faster claim triage'],quote:['午饭前，理赔就已交给合适的理赔员，档案已经读过，保单也已核查。','Claims reach the right adjuster before lunch, with the file already read and the policy checked.'],name:'Jonas Weber',role:['理赔负责人','Head of Claims'],reference:'HV-1127',date:'2026-09-02',signature:'dLsAFh7ElgiTYxpaKDMuQ9YA9cY.svg'},
 {company:'Aster Holdings',team:['金融犯罪防控','Financial Crime'],short:['每位分析师处理的 KYC 文件增至 3.2 倍','3.2× more KYC files per analyst'],quote:['团队终于能把一天用在疑难案例上。所有常规事务，在我们到达之前就已完成并记录。','The team finally spends its day on the hard cases. Everything routine is done and documented before we arrive.'],name:'Ravi Shah',role:['KYC 经理','KYC Manager'],reference:'AS-0412',date:'2026-08-21',signature:'OAEGvuk0v8Ca7VwOcFIId2alI.svg'},
 {company:'Kestrel Health',team:['财务','Finance'],short:['每项例外 都在付款前发现','Every exception caught before payment'],quote:['现在，每项例外都会在资金流动前交给人确认。从春天以来，我们没有再付错过一张发票。','Every exception now reaches a person before money moves. We have not paid a wrong invoice since spring.'],name:'Maya Chen',role:['财务负责人','Finance Lead'],reference:'KH-0907',date:'2026-09-30',signature:'901nwj8TqZNOntlhwKsUI2sjnU.svg'},
 {company:'Meridian & Co',team:['法律运营','Legal Operations'],short:['每周找回 31 小时','31 hours back every week'],quote:['我们的律师不再逐项分流收件箱。Verity 完成初次阅读，而我们作出判断。','Our associates stopped triaging the inbox. Verity does the first read, and we make the call.'],name:'Lena Fischer',role:['运营负责人','Head of Operations'],reference:'MC-2210',date:'2026-10-09',signature:'O5LgWqqX1QAwkAmVXjoF6Hd4k.svg'},
] satisfies {company:string;team:Text;short:Text;quote:Text;name:string;role:Text;reference:string;date:string;signature:string}[]
