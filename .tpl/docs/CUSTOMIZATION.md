# 修改指南

1. **品牌**：修改 `config/brand.ts`；Logo 使用 `Mark` 或 Provider 注入。消费方适配留在消费方，不复制页面源码。
2. **文案**：长内容和集合在 `content/`，页面短文案使用 `Text` 与 `Copy` 成对维护。职位、政策和 FAQ 的 JSON 经过 `schema.ts` 验证，禁止缺项时静默回退到另一语言。
3. **价格**：`content/pricing.ts` 管理方案和对比项，`utils.ts` 管理计算规则。改动后运行价格行为测试，并同步 FAQ、政策与 CTA 的业务承诺。
4. **主题**：在 `theme.css` 修改 `--v-*` 用途令牌；在 `pages.css` 调整页面布局。中文 MiSans 400/700、英文数字 Poppins 400/600/700 都从本地加载。保持样式作用域和焦点对比度。
5. **素材**：替换 `public/templates/verrity/` 的文件，同时更新 `docs/assets.json`、`docs/ASSETS.md` 的来源和许可。不要使用外部热链或修改别的模板素材。
6. **动效**：阅读 `components/Animation.tsx`、`Scenes.tsx`、`Workbench.tsx` 和 `ProductSections.tsx`。保持暂停、回弹、键盘操作和减少动态效果分支。标题观察外层遮罩，不能观察被移出遮罩的文字。
7. **页面**：在 `pages/` 新建组合，在 `template.tsx` 注册双语标题、slug 和加载器，并同步 `.tpl/template.json`；不要为同一响应式网站重复注册多个设备端。
8. **表单**：当前只有本地校验。接入真实系统前，先明确接口、隐私、异常语义、数据保留与真实服务验收，并更新演示提示和环境合同。
9. **展示资料**：设计变化后重拍受影响截图，解码后填写实际像素；不能把 CSS 视口尺寸直接当成 PNG/WebP 尺寸。

日常修改按影响范围检查；正式交付运行类型、lint、行为测试、构建及页面验证。参考站的价格与 FAQ 不一致、14/30 天试用差异需在真实产品化时统一，不能直接当作经营条款使用。
