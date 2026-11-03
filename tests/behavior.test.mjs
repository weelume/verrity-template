import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {calculatePrice,languageHref,pageHref} from '../src/features/verrity/utils.ts'
import {localized,detailBlocks} from '../src/features/verrity/content/schema.ts'
import {workbenchSummary,workbenchClaims,workbenchSources,renewalRows} from '../src/features/verrity/content/workbench.ts'
test('工作台不能再遗漏结论：三段主张、三处来源和三份续约完整对应',()=>{
 for(const locale of [0,1]){
  assert.equal(workbenchClaims.map(claim=>claim[locale]).join('').replaceAll(' ',''),workbenchSummary[locale].replaceAll(' ',''))
  assert.match(workbenchSummary[locale],/12%/)
  assert.match(workbenchSummary[locale],/8%/)
  assert.match(workbenchSummary[locale],/21/)
  for(const source of workbenchSources){assert.ok(source.title[locale]);assert.ok(source.meta[locale]);assert.ok(source.quote[locale])}
 }
 assert.equal(workbenchSources.length,3)
 assert.deepEqual(renewalRows.map(row=>row.company),['Northwind','Halcyon','Brightline'])
})
test('价格计算器：12 人专业版年付与月付，年度席位成本和节省金额一致',()=>{
 assert.deepEqual(calculatePrice(12,'pro','yearly'),{perSeat:39,annualPerSeat:468,annualTotal:5616,savings:1440})
 assert.deepEqual(calculatePrice(12,'pro','monthly'),{perSeat:49,annualPerSeat:588,annualTotal:7056,savings:1440})
 assert.equal(calculatePrice(100,'starter','yearly').savings,4800)
 for(const seats of [0,-1,1.5,101,NaN])assert.throws(()=>calculatePrice(seats,'pro','yearly'),RangeError)
})
test('语言切换：独立站和宿主保留页面、查询与锚点，英文段不重复',()=>{
 assert.equal(languageHref('/templates/verrity/site/careers/frontend-engineer','?from=pricing','#apply','/templates/verrity/site','zh'),'/templates/verrity/site/en/careers/frontend-engineer?from=pricing#apply')
 assert.equal(languageHref('/en/blog/how-we-design-for-clarity','?a=1','#section-3','','en'),'/blog/how-we-design-for-clarity?a=1#section-3')
 assert.equal(pageHref('','zh'),'/')
 assert.equal(pageHref('/templates/verrity/site','en','pricing'),'/templates/verrity/site/en/pricing')
})
test('内容边界拒绝缺失翻译、未知正文类型；所有职位和政策可解码',async()=>{
 assert.throws(()=>localized(['只有中文']))
 assert.throws(()=>localized(['','English']))
 assert.throws(()=>detailBlocks([{kind:'script',text:['中文','English']}]))
 const jobs=JSON.parse(await readFile(new URL('../src/features/verrity/content/jobs.json',import.meta.url),'utf8'))
 assert.equal(jobs.length,11);assert.equal(new Set(jobs.map(j=>j.slug)).size,11)
 for(const job of jobs){localized(job.title);assert.equal(detailBlocks(job.blocks).filter(b=>b.kind==='li').length,7)}
 const policies=JSON.parse(await readFile(new URL('../src/features/verrity/content/legal.json',import.meta.url),'utf8'))
 assert.equal(policies.length,4);for(const policy of policies){localized(policy.title);assert.ok(detailBlocks(policy.blocks).length>10)}
})
