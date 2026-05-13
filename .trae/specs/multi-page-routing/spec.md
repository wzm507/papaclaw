# 页面路由重构规格说明书

## Why
当前网站采用单页锚点滚动架构，所有内容集成在一个页面中。用户希望将其转换为多页面路由架构，使每个导航区块（首页、团队实力、核心业务、合作咨询）成为独立页面，以提升页面加载性能、SEO 效果和用户体验。

## What Changes
- 将现有的单页锚点导航架构重构为多页面路由架构
- 新增 3 个独立页面：团队实力页、核心业务页、合作咨询页
- 保留首页作为落地页，但将其内容组织为独立页面内容
- 顶部导航栏在不同页面间保持一致
- 实现平滑的页面过渡动画
- 悬浮咨询按钮在所有页面保持全局可用

## Impact
- 受影响的功能：顶部导航栏、悬浮 FAB 按钮、页面过渡动画
- 受影响的代码：`app.tsx`（路由配置）、`Layout.tsx`（布局组件）、新增页面文件
- 依赖的 shadcn/ui 组件：`Tabs`、`Sheet`（移动端菜单）、`Button`

## ADDED Requirements

### Requirement: 多页面路由系统
系统 SHALL 提供独立的路由配置，使得每个导航区块对应独立的 URL 路径。

#### Scenario: 用户点击导航链接
- **WHEN** 用户点击顶部导航栏的"团队实力"链接
- **THEN** 页面平滑过渡到 `/team` 路由，显示团队实力页面的完整内容

#### Scenario: 用户直接访问子页面 URL
- **WHEN** 用户直接访问 `https://example.com/team`
- **THEN** 系统渲染团队实力页面，并高亮顶部导航栏的对应项

### Requirement: 页面内容迁移
系统 SHALL 将首页的各个区块内容迁移到对应的独立页面中。

| 首页区块 | 目标路由 | 页面名称 |
|---------|---------|---------|
| HeroSection + StatCardSection | `/` | 首页 |
| TeamSection | `/team` | 团队实力 |
| ServicesSection | `/services` | 核心业务 |
| ContactSection | `/contact` | 合作咨询 |

### Requirement: 全局导航一致性
系统 SHALL 在所有页面中保持统一的导航栏样式和交互行为。

#### Scenario: 导航项激活状态
- **WHEN** 用户访问 `/team` 页面
- **THEN** 顶部导航栏的"团队实力"项显示激活状态（高亮样式）

#### Scenario: 移动端导航
- **WHEN** 用户在移动端点击汉堡菜单
- **THH** 侧边栏面板从右侧滑出，显示所有导航项

### Requirement: 全局悬浮咨询按钮
系统 SHALL 在所有页面右下角显示悬浮咨询按钮，提供一致的转化入口。

### Requirement: 页面过渡动画
系统 SHALL 为页面切换提供平滑的过渡动画效果。

## MODIFIED Requirements

### Requirement: 顶部导航栏
原需求中导航栏仅支持锚点跳转，现修改为支持路由跳转。

**修改说明**：导航链接从 `href="#team"` 改为 `to="/team"`，使用 React Router 的 `Link` 组件实现客户端路由导航。

## Implementation Notes
- 使用 React Router v6 进行路由管理
- 页面过渡使用 Framer Motion 的 `AnimatePresence` 组件
- 响应式导航使用 shadcn/ui 的 `Sheet` 组件处理移动端
- 所有页面共享 Layout 组件提供的 Header 和 FAB
