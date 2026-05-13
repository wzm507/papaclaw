# Tasks

- [x] Task 1: 创建独立页面组件
  - [x] SubTask 1.1: 创建团队实力页面 `/client/src/pages/TeamPage/TeamPage.tsx`
  - [x] SubTask 1.2: 创建核心业务页面 `/client/src/pages/ServicesPage/ServicesPage.tsx`
  - [x] SubTask 1.3: 创建合作咨询页面 `/client/src/pages/ContactPage/ContactPage.tsx`
  - [x] SubTask 1.4: 调整首页内容，将首页拆分为独立的 Hero 组件

- [x] Task 2: 更新路由配置
  - [x] SubTask 2.1: 修改 `app.tsx` 添加新的路由配置
  - [x] SubTask 2.2: 更新 `Layout.tsx` 添加页面过渡动画

- [x] Task 3: 重构顶部导航栏
  - [x] SubTask 3.1: 创建可复用的 `Header` 组件
  - [x] SubTask 3.2: 实现路由感知的导航高亮
  - [x] SubTask 3.3: 使用 shadcn/ui Sheet 组件实现移动端菜单

- [x] Task 4: 集成 shadcn/ui 组件
  - [x] SubTask 4.1: 使用 Sheet 组件（如果尚未安装）
  - [x] SubTask 4.2: 验证 Button、Tabs 等组件已正确配置

- [x] Task 5: 验证与测试
  - [x] SubTask 5.1: 验证各页面路由正确跳转
  - [x] SubTask 5.2: 验证移动端导航菜单正常展开
  - [x] SubTask 5.3: 验证 FAB 在所有页面可见

# Task Dependencies
- Task 1 完成后才能进行 Task 2
- Task 3 可以在 Task 1 并行进行
- Task 5 依赖 Task 1、2、3 全部完成
