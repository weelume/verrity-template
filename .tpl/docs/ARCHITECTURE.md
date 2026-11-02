# 架构与职责

前端采用 feature-based 结构，React 19、Next.js 15、严格 TypeScript 和既有 framer-motion；没有后端、数据库或业务持久化。

| 入口 | 职责 |
| --- | --- |
| `src/app/[[...slug]]/page.tsx` | 独立站的双语路径解析、元信息与真实 404 |
| `src/features/verrity/template.tsx` | 页面注册、异步页面加载、市场展示信息 |
| `config/brand.ts` | 默认品牌、年份、联系方式和素材根路径 |
| `host.tsx` | 外部消费方的品牌与公共展示节点注入 |
| `content/` | 文章、职位、FAQ、政策、价格、团队和集成数据 |
| `content/schema.ts` | JSON 双语元组和段落类型的校验边界 |
| `components/Shell.tsx` | 导航、菜单、语言切换、根节点样式生命周期和页脚 |
| `components/Workbench.tsx` | 阅读、答案、逐项引用的阶段循环 |
| `components/Animation.tsx` | 可暂停循环、计数、滚动数字和逐字呈现 |
| `components/Scenes.tsx` | 线框门体与插头的几何和生命周期 |
| `components/ProductSections.tsx` | 流程切换、功能拖拽、安全与评价 |
| `components/Forms.tsx` | 本地校验、文件检查和明确的未发送状态 |
| `pages/` | 各页面内容与公共区块组合 |
| `theme.css` / `pages.css` | 主题令牌、组件与响应式样式，均限定模板作用域 |
| `public/templates/verrity/` | 本地运行图片、SVG 和字体 |

站内链接统一经 `pageHref` / `SiteLink` 拼接，语言切换经 `languageHref` 保留当前页面、查询参数与锚点。客户端路由避免切页整页刷新。未知路径调用 `notFound()`，不回退到首页。

循环在离屏或浏览器后台暂停，恢复继续当前阶段；减少动态效果直接呈现可读状态。拖拽的边界、页数与每页卡片数取自数据和真实容器宽度。滚动使用原生页面滚动，对比表使用显式、可聚焦的内部横向滚动区。

环境参数只控制本地监听地址和端口。所有业务示意均为本地数据，Provider 不包含服务端秘密；表单不发网络请求、不使用 localStorage，也不保存文件。
