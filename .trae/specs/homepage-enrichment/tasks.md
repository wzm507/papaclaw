# 首页内容丰富 - 实施计划

## [x] Task 1: 添加团队实力概览模块
- **Priority**: P0
- **Depends On**: None
- **Description**: 
  - 创建团队实力概览组件，展示4个核心角色（战略咨询师、AI数据分析师、AIGC导演、运营操盘手）
  - 每个卡片包含图标、角色名称、简短描述
  - 添加"查看完整团队"CTA按钮，跳转到/team页面
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `human-judgment` TR-1.1: 团队卡片布局整齐，信息清晰
  - `human-judgment` TR-1.2: CTA按钮点击正确跳转到团队页面

## [x] Task 2: 添加核心业务概览模块
- **Priority**: P0
- **Depends On**: Task 1
- **Description**: 
  - 创建业务概览组件，展示5大业务板块（Vibe Marketing、全球采购情报、战略咨询、政企对接、金融服务）
  - 采用卡片网格布局，每个卡片包含图标、标题和一句话描述
  - 添加"了解详情"按钮，跳转到/services页面
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `human-judgment` TR-2.1: 业务卡片信息完整，视觉层次清晰
  - `human-judgment` TR-2.2: 按钮跳转功能正常

## [x] Task 3: 添加价值对比模块
- **Priority**: P1
- **Depends On**: Task 2
- **Description**: 
  - 创建对比卡片组件，展示传统出海 vs AI赋能出海的差异
  - 从效率、成本、准确率三个维度进行对比
  - 使用图标和简短文字展示对比内容
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `human-judgment` TR-3.1: 对比信息清晰易懂
  - `human-judgment` TR-3.2: 视觉对比明显，突出AI优势

## [x] Task 4: 添加行动号召区域
- **Priority**: P1
- **Depends On**: Task 3
- **Description**: 
  - 创建醒目的CTA区域，使用渐变背景
  - 包含主标题、副标题
  - 添加"立即咨询"和"下载白皮书"两个按钮
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `human-judgment` TR-4.1: CTA区域视觉突出，吸引注意力
  - `human-judgment` TR-4.2: 按钮点击功能正常

## [x] Task 5: 更新首页整合所有模块
- **Priority**: P0
- **Depends On**: Task 1, Task 2, Task 3, Task 4
- **Description**: 
  - 更新HomePage.tsx，整合新增的所有模块
  - 确保模块之间有适当的间距和过渡效果
  - 添加滚动揭示动画效果
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-4, AC-5
- **Test Requirements**:
  - `human-judgment` TR-5.1: 首页整体布局协调美观
  - `human-judgment` TR-5.2: 动画效果流畅自然