# Verity · 可溯源 AI 协作

以云海暮色、深色 AI 工作台和线框场景呈现的双语响应式官网。包含首页、关于、价格、集成、招聘、博客、更新日志、联系、注册与登录演示，以及 6 篇文章、11 个职位、4 份政策和 404 演示页。默认中文，对应英文路径为 `/en`。

首读 `.tpl/README.md`、`.tpl/template.json` 和 `.tpl/project.json`。源码仓库：[verrity-template](https://github.com/weelume/verrity-template)。参考站：[Verity](https://verrity.framer.website/)。

## 工具链与启动

Node **24.16.0**、pnpm **9.15.4**，依赖版本由锁文件固定。不需要数据库、密钥或外部账号。

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

访问 `http://127.0.0.1:43686`，英文首页为 `/en`。`PORT` 可覆盖端口，`BIND_HOST` 默认 `127.0.0.1`；变量合同见 `.tpl/contracts/env.schema.json`。停止服务使用启动终端的 `Ctrl+C`，只停止本次启动的进程。

```sh
corepack pnpm typecheck
corepack pnpm lint
corepack pnpm test
corepack pnpm build
corepack pnpm start
```

依赖安装和构建会生成本地缓存，不修改业务数据。运行素材、字体均由本项目提供；页面展示不需要第三方图片或字体服务。开发态控制台使用 `debug` 记录页面、语言、分类、动画阶段和表单校验，禁止记录用户填写内容或文件名。

## 功能与边界

- AI 工作台分阶段阅读、呈现答案与引用，流程切换、功能拖拽与键盘切换、计数、评价逐字呈现、分类 FAQ、团队肖像切换、城市时钟、循环线框门体与插头。
- PC、平板和手机共用一个站点；使用主题变量管理字体、配色、玻璃卡片和滚动条。尊重减少动态效果设置。
- 价格计算器支持人数、入门/专业方案与月付/年付联动。
- 集成、博客和招聘支持分类；导航与语言切换使用客户端路由，并保留查询参数和锚点。
- 联系、登录、注册和职位申请**仅本地校验**，不发送、不保存、不上传文件。第三方登录入口明确提示演示，未连接身份服务。
- 参考站的价格 FAQ 与价格表、试用天数存在矛盾，保留作为演示内容。正式使用前必须统一业务规则；政策页不构成真实安全或合同承诺。

## 修改与交付

品牌在 `src/features/verrity/config/brand.ts`；长内容和集合在 `content/`；短界面文案在对应页面及公共组件内以中英文成对维护；主题在 `theme.css`、`pages.css`；页面组合在 `pages/`；路由注册在 `template.tsx`。

详细说明见 `.tpl/docs/ARCHITECTURE.md`、`.tpl/docs/CUSTOMIZATION.md`、`.tpl/docs/VERIFICATION.md` 和 `.tpl/docs/LICENSE.md`。截图和市场元数据随页面变化同步更新，验收报告只对对应源码摘要有效。

`pnpm bundle` 在本地 WSL Linux 文件系统中为干净、已提交源码生成供其他 React/Next 应用消费的固定运行包；不会自动发布、上传或推送。完整源码通过 Git 或已提交源码的 ZIP 交付，不能用运行包代替源码工程。消费方使用 `VerrityHostProvider` 注入自己的品牌、Logo、市场入口与备案节点，不把消费方信息写回本项目。

照片、Logo、签名、参考英文和设计的商业使用及素材再分发权未确认。源码、素材、字体和协议工具的权利边界分别记录在许可文件中，不能因仓库公开推定拥有商业授权。
