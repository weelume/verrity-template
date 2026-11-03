# 模板使用入口

这是可运行的 Next.js + React + TypeScript 前端工程，协议 `git-template`，格式版本 `0.2.0`，模板版本 `1.0.1`。市场元数据在 `template.json`，操作、服务与环境合同在 `project.json`，常见修改入口在 `customization.json`。

按顺序阅读根目录 `README.md`、本目录 `template.json`、`project.json`，再阅读 `docs/ARCHITECTURE.md`、`CUSTOMIZATION.md`、`VERIFICATION.md` 与 `LICENSE.md`。

使用 Node 24.16.0、pnpm 9.15.4。冻结安装后执行 `pnpm dev`，默认地址 `http://127.0.0.1:43686`，`/en` 为英文；`pnpm build` 与 `pnpm start` 用于本地生产验证。使用 `Ctrl+C` 停止自己启动的服务。

模板提供 31 个参考站页面和独立的 404 演示，中英文共用路由规则与业务源码。运行时照片、SVG 和字体在 `public/templates/verrity/`；本目录 `assets/` 仅保存真实展示截图。

所有表单仅本地校验，不连接登录、邮件、支付、招聘或 SaaS 后端，不存储用户数据。查看文档不会安装、启动、构建、上传或发布；执行任何操作前遵循接收方用户的授权范围。

修改完成后运行适用的类型、lint、行为测试和构建检查；布局或交互变化再检查受影响页面。正式交付前检查独立启动、素材完整性、双语、移动端、交互及当前源码摘要，不把历史报告当作新源码已验收的证明。
