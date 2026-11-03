import type {Text} from '../types'
export const featurePeople=[
 {name:'Maya Chen',email:'maya@acme.com',image:'wZxVsyVC29TReEHvRUjywCUGLo.jpg'},
 {name:'Jonas Weber',email:'jonas@acme.com',image:'c5kUx4PhP2ncXYv8i1PX5o04Ww.jpg'},
 {name:'Ravi Shah',email:'ravi@acme.com',image:'9sZZNY3nN2CwnTTcRKMNkrvpq0.jpg'},
] as const
export const featureRoles:readonly Text[]=[['管理员','Admin'],['编辑者','Editor'],['查看者','Viewer']]
export const featureComments=[
 {person:0,time:'2m',text:['可以把发布时间改到 14 号吗？','Can we move the launch to the 14th?']},
 {person:1,time:'now',text:['没问题 我来更新计划','Works for me. Updating the plan.']},
] as const
export const featureAutomation=[
 {label:['触发条件','When'],text:['提交表单','A form is submitted'],icon:'sparkle'},
 {label:['接着','Then'],text:['等待 1 天','Wait 1 day'],icon:'clock'},
 {label:['接着','Then'],text:['发送欢迎邮件','Send a welcome email'],icon:'message'},
] as const
export const featureNotices=[
 ['Maya',['在 Q3 发布计划中提到了你','mentioned you in Q3 launch plan'],'2m'],
 ['Jonas',['向你分配了价格审核','assigned you Pricing review'],'18m'],
 ['', ['导出文件已就绪','Your export is ready'],'1h'],
] as const
export const featureResults=[
 [['价格审核','Pricing review'],['文档','Doc'],'file'],
 [['定价页面重设计','Pricing page redesign'],['项目','Project'],'grid'],
 [['价格反馈','Pricing feedback'],['讨论','Thread'],'message'],
] as const
