import type {Article,DetailBlock} from '../types'
// 参考站的六篇演示文章共用正文，保留这一内容关系，避免维护六份重复文本。
const body:DetailBlock[]=[
 {kind:'p',text:['大多数团队并不需要更多功能，而是更少的信息查找入口。过去一年，我们与两百多个团队一起工作，观察他们真实的工作方式。','Most teams don’t need more features. They need fewer places to look. Over the last year we sat with more than two hundred teams and watched how they actually work.']},
 {kind:'h2',text:['我们听到了什么','What we heard']},
 {kind:'p',text:['同样的三个问题反复出现：工作分散在不同工具里，决策淹没在讨论串中，新成员需要几周才能熟悉环境。','The same three problems came up again and again: work scattered across tools, decisions lost in threads, and new people taking weeks to find their way around.']},
 {kind:'p',text:['单独来看，这些问题都不难。但叠加在一起，它们每周都会悄悄耗费团队数小时。','None of these are hard problems on their own. Together they quietly cost every team hours each week.']},
 {kind:'h2',text:['我们改变了什么','What we changed']},
 {kind:'p',text:['我们先做减法。每个页面都必须有存在的理由，每项设置都应该有合理的默认值。然后，我们把人们最常做的工作汇集到一个安静清晰的视图里。','We started by removing things. Every screen had to earn its place, and every setting had a sensible default. Then we brought the work people do most into one calm view.']},
 {kind:'h2',text:['接下来','What’s next']},
 {kind:'p',text:['这只是第一步。未来几个月，我们会继续分享所学，也期待听到你的想法。','This is the first step. Over the coming months we’ll keep sharing what we learn, and we’d love to hear what you think.']},
]
export const articles:Article[]=[
 {slug:'introducing-a-calmer-workspace-for-growing-teams',title:['为成长中的团队/打造更从容的工作空间','Introducing a calmer workspace for growing teams'],summary:['把一年客户访谈中的收获，融入一个更简单的工作空间。','Everything we learned from a year of customer interviews, built into one simpler place to work.'],category:['产品','Product'],date:'2026-10-08',author:'Maya Kerr',image:'rPRGhfTOU3OwBIzfAp1pk4pffu8.jpg',minutes:5,blocks:body},
 {slug:'a-practical-guide-to-onboarding-your-whole-team',title:['全员入职/实用指南','A practical guide to onboarding your whole team'],summary:['帮助每位成员在第一周完成设置、进入工作状态的团队清单。','The checklist teams use to get everyone set up and productive in their first week.'],category:['指南','Guides'],date:'2026-10-01',author:'Leo Hart',image:'7UqurfsmQDcXY3MjnLqSNtO7Bo.jpg',minutes:7,blocks:body},
 {slug:'what-we-shipped-in-september',title:['九月/我们交付了什么','What we shipped in September'],summary:['更快的搜索、共享视图，以及回应你们建议的一系列细节修复。','Faster search, shared views and a long list of small fixes you asked for.'],category:['更新','Changelog'],date:'2026-09-28',author:'Ana Ruiz',image:'CrpzeA1l3cZbr5RNm2LgErRjgeA.jpg',minutes:3,blocks:body},
 {slug:'lessons-from-growing-to-10-000-customers',title:['服务一万位客户/带来的思考','Lessons from growing to 10,000 customers'],summary:['三件我们会继续做的事，以及两件不会再做的事。','Three things we would do again, and two we would not.'],category:['公司','Company'],date:'2026-09-19',author:'Maya Kerr',image:'EZrgzHLNCXJ69Uj6jc8FXu7WQto.jpg',minutes:6,blocks:body},
 {slug:'how-we-design-for-clarity',title:['为清晰而设计','How we design for clarity'],summary:['我们交付的每个页面背后的原则，以及我们有意打破的规则。','The principles behind every screen we ship, and the ones we broke on purpose.'],category:['设计','Design'],date:'2026-09-11',author:'Leo Hart',image:'3xLoGTFsJ0X2Wv5t0Y5AJyddDMM.jpg',minutes:4,blocks:body},
 {slug:'building-a-team-that-writes-things-down',title:['打造愿意/把事情写下来的团队','Building a team that writes things down'],summary:['让决策有迹可循，让跨时区协作更从容。','How writing helps us make better decisions and work across time zones.'],category:['文化','Culture'],date:'2026-09-02',author:'Ana Ruiz',image:'6qr012qM2P7XMoSsgDfCBldgtw.jpg',minutes:5,blocks:body},
]
export const authorImages:Record<string,string>={'Maya Kerr':'wZxVsyVC29TReEHvRUjywCUGLo.jpg','Leo Hart':'c5kUx4PhP2ncXYv8i1PX5o04Ww.jpg','Ana Ruiz':'9sZZNY3nN2CwnTTcRKMNkrvpq0.jpg'}
