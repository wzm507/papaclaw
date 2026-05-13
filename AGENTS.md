# 胶囊潮流·AI出海服务官网 - 需求拆解文档

## 产品概述

- **产品类型**: 企业官网/品牌落地页
- **场景类型**: <scene_type>prototype-app</scene_type>
- **目标用户**: 国内有出海意向的企业决策者、业务拓展负责人、品牌营销主管
- **核心价值**: 清晰传递“AI赋能中国企业出海赢全球”核心定位，通过全链路服务能力展示建立信任，引导高意向客户发起合作咨询
- **界面语言**: 中文
- **主题偏好**: user_specified (浅色背景 #F8FAFC，专业稳重B端风格)
- **导航模式**: 锚点导航
- **导航布局**: Topbar（顶部固定，配合毛玻璃效果）

---

## 页面结构总览

> **说明**：官网采用单页全屏通栏分段式布局，以下为页面区块结构。所有区块集成于单一页面文件中，通过顶部锚点导航平滑滚动切换。

**页面文件**: `HomePage.tsx`

| 区块名称 | 锚点 | 区块说明 |
|---------|------|---------|
| 首屏品牌展示 | `#hero` | 核心定位标语、企业规模数据看板、主CTA引导 |
| 团队能力展示 | `#team` | 12类核心团队角色网格展示，突出实战经验与AI技术优势 |
| 业务模块介绍 | `#services` | Vibe Marketing 与 全球采购信息抓取 两大核心业务详解 |
| 页脚/联系区 | `#contact` | 版权信息、快速导航链接、辅助转化入口 |

---

## 导航配置

> **说明**：此表为导航生成的数据源，路由需与页面结构总览一致

- **导航布局**: Topbar（顶部固定，滚动时保持可见，背景采用半透明+毛玻璃效果）
- **导航项**（锚点跳转）:
  | 导航文字 | 锚点 |
  |---------|------|
  | 首页 | `#hero` |
  | 团队实力 | `#team` |
  | 核心业务 | `#services` |
  | 合作咨询 | `#contact` |

---

## 功能列表

> **说明**：每个区块的功能点，供页面生成使用

- **区块**: 首屏品牌展示 (`#hero`)
  - **区块目标**: 快速建立品牌认知，传递核心价值，吸引用户停留并产生初步兴趣
  - **功能点**:
    - **核心标语展示**: 居中/左对齐排版展示“AI赋能中国企业出海赢全球”，使用主色 #165DFF 或蓝绿渐变强调关键文字
    - **企业规模数据看板**: 以数据卡片形式展示核心业务指标（如服务企业数、覆盖国家数、AI处理数据量等），支持数字静态高亮或入场动画
    - **主行动按钮 (CTA)**: 使用强调色 #F97316 设计醒目按钮，点击平滑滚动至业务模块或触发咨询弹窗

- **区块**: 团队能力展示 (`#team`)
  - **区块目标**: 展示专业团队实力与AI技术底蕴，建立深度信任背书
  - **功能点**:
    - **12类角色能力网格**: 采用响应式网格布局（桌面端 3-4列，移动端 1-2列）展示12个核心岗位/角色卡片
    - **能力标签与AI优势高亮**: 每个角色卡片包含岗位名称、核心职责简述、AI技术赋能标签（如“AI驱动策略生成”、“自动化数据清洗”）
    - **实战经验数据化**: 卡片内嵌微型数据指标（如“平均从业年限”、“成功案例数”），配合图标提升专业感与可读性

- **区块**: 业务模块介绍 (`#services`)
  - **区块目标**: 清晰传递两大核心业务的差异化价值与应用场景
  - **功能点**:
    - **Vibe Marketing 业务详解**: 图文混排模块，展示AI内容生成、跨文化营销适配、全渠道分发等核心能力与成功案例
    - **全球采购信息抓取业务详解**: 数据流/技术架构可视化展示，突出实时抓取、多语言解析、供应链情报匹配能力
    - **差异化价值对比**: 采用左右分栏或对比卡片形式，清晰呈现传统模式 vs AI赋能模式的效率/成本/准确率优势

- **区块**: 页脚/联系区 (`#contact`)
  - **区块目标**: 提供品牌背书收尾与辅助转化路径
  - **功能点**:
    - **品牌信息与版权**: 展示 Logo、企业简称、版权年份及合规声明
    - **快速链接导航**: 列示隐私政策、服务条款、帮助中心等次级链接
    - **辅助CTA入口**: 提供“预约演示”或“下载出海白皮书”等次级转化按钮，承接未直接点击悬浮窗的用户

- **全局组件**: 固定悬浮咨询按钮
  - **区块目标**: 提供随时可触达的转化入口，降低咨询门槛
  - **功能点**:
    - **固定悬浮定位**: 始终固定于页面右下角（避开移动端底部安全区），使用强调色 #F97316 圆形/胶囊按钮
    - **点击展开交互**: 点击后展开轻量级咨询面板（包含姓名、企业、联系方式、需求简述输入框及提交按钮）
    - **智能显隐逻辑**: 页面滚动时自动调整透明度或位置，避免遮挡核心内容，支持点击外部区域或提交后自动收起

-------

# UI 设计指南

> **场景类型**: <scene_type>prototype-app</scene_type>（应用架构设计）
> **确认检查**: 本指南适用于可交互的企业官网/品牌落地页。采用单页锚点滚动架构，顶部固定导航，全屏通栏分段式布局。

> ℹ️ Section 1-2 为设计意图与决策上下文。Code agent 实现时以 Section 3 及之后的具体参数为准。

## 1. Design Archetype (设计原型)

### 1.1 内容理解
- **目标用户**: 国内有出海意向的企业决策者、业务拓展负责人、品牌营销主管。心理预期：寻求专业、高效、可信赖的 AI 技术赋能，期望清晰看到服务价值与落地能力。
- **核心目的**: 建立品牌信任背书，清晰传递“AI赋能中国企业出海赢全球”定位，通过全链路能力展示引导高意向客户发起咨询。
- **期望情绪**: 专业稳重、科技感、清晰高效、行动导向。
- **需避免的感受**: 信息杂乱、过度营销感、技术术语堆砌导致的距离感、视觉廉价。

### 1.2 设计语言
- **Aesthetic Direction**: 现代企业服务 SaaS 风格。融合 Notion 的干净信息层级与 Figma 的细腻渐变视觉，去除冗余装饰，以排版、留白和精准的色彩对比构建专业感。
- **Visual Signature**: 
  1. 8px 统一圆角 (`rounded-lg`) 贯穿所有交互与容器元素
  2. 蓝绿渐变 (#165DFF → #36D399) 仅用于核心金句与数据强调，克制使用
  3. 高对比度排版：标题 `font-bold`/`font-semibold` 与正文 `font-normal` 形成 ≥1.5x 视觉层级差
  4. 64px 区块间距与 24px 内间距构建稳定的呼吸节奏
- **Emotional Tone**: 专业可靠、清晰高效 —— 视觉语言服务于“降低决策成本，提升信任转化”。
- **Design Style**: Modern Tech / Clean SaaS — 扁平化现代设计，注重信息密度与留白的平衡，符合 B 端服务视觉定位。
- **Application Type**: Landing / Marketing Site (单页锚点导航)

## 2. Design Principles (设计理念)
1. **信息层级优先**：通过字号、字重、色彩权重建立清晰的阅读路径。核心定位 > 业务价值 > 能力细节 > 行动入口，避免视觉平均分布。
2. **克制与聚焦**：渐变与高饱和强调色仅用于引导关键行动 (CTA) 和突出核心数据，其余区域保持中性背景与低干扰排版。
3. **全链路叙事**：页面结构遵循“认知建立 (Hero) → 信任背书 (Team) → 价值证明 (Services) → 行动转化 (Contact/FAB)”的逻辑流，区块过渡自然。
4. **响应式一致性**：移动端优先保证核心信息完整可读，网格布局自动降级为单列堆叠，悬浮咨询按钮适配安全区域。

## 3. Color System (色彩系统)

> 基于用户指定品牌色自主推导，严格遵循 HSL 格式。禁止使用 Tailwind 预设色板替代。

**配色设计理由**：采用高饱和科技蓝 (#165DFF) 建立专业与信任基调，蓝绿渐变传递 AI 与全球化的活力；暖橙 (#F97316) 作为最高权重 CTA 色，在冷色调背景中形成强烈视觉锚点，驱动转化。

### 3.1 主题颜色

| 角色 | CSS 变量 | Tailwind Class | HSL 值 | HEX (参考) | 设计说明 |
|-----|---------|----------------|--------|-----------|---------|
| bg | `--background` | `bg-background` | hsl(210 40% 98%) | #F8FAFC | 全局页面背景，极浅冷灰降低视觉疲劳 |
| surface | `--card` | `bg-card` | hsl(0 0% 100%) | #FFFFFF | 卡片/面板背景，与 bg 形成微妙层次 |
| text | `--foreground` | `text-foreground` | hsl(217 33% 17%) | #1E293B | 主要正文与标题，高对比度保证可读性 |
| textMuted | `--muted-foreground` | `text-muted-foreground` | hsl(215 20% 47%) | #64748B | 次要说明、辅助标签、非激活态文字 |
| primary | `--primary` | `bg-primary` | hsl(222 100% 54%) | #165DFF | 品牌主色：常规按钮、标题强调、图标 |
| primary-foreground | `--primary-foreground` | `text-primary-foreground` | hsl(0 0% 100%) | #FFFFFF | 主色背景上的文字/图标 |
| accent | `--accent` | `bg-accent` | hsl(25 94% 53%) | #F97316 | 核心 CTA 强调色：最高行动权重按钮 |
| accent-foreground | `--accent-foreground` | `text-accent-foreground` | hsl(0 0% 100%) | #FFFFFF | 强调色按钮文字 |
| border | `--border` | `border-border` | hsl(210 20% 90%) | #E2E8F0 | 卡片描边、分隔线，保持轻盈 |
| success | `--success` | `bg-success` | hsl(158 60% 52%) | #36D399 | 辅助成功标签、数据正向增长、渐变终点 |

> **Token 速查**: `primary` = 品牌常规交互；`accent` = 核心转化行动 (CTA)；`muted` = 静态非交互区域；`success` = 辅助强调/渐变终点

### 3.2 Topbar 颜色（仅当使用 Topbar 导航时参考）

> Topbar 背景使用半透明毛玻璃效果，直接写入组件样式。
- **背景**: `bg-white/80 backdrop-blur-md border-b border-border`
- **文字/激活态**: 默认 `text-foreground`，激活/悬停 `text-primary`
- **对比度保障**: 滚动时背景透明度动态调整，确保与下方内容对比度 ≥ 4.5:1

## 4. Typography (字体排版)
- **Heading**: `system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif` (现代无衬线，适配 Notion/字节风格)
- **Body**: 同上，依赖系统字体栈确保多终端渲染一致性与加载性能
- **字体导入**: 无外部导入，使用原生系统字体栈

| 层级 | Tailwind Class | 颜色 | 用途 |
|-----|---------------|------|------|
| Display/H1 | `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight` | `text-foreground` 或渐变 | 首屏核心标语、区块主标题 |
| H2 | `text-2xl md:text-3xl font-semibold tracking-tight` | `text-foreground` | 二级章节标题 |
| H3 | `text-xl font-semibold` | `text-foreground` | 卡片/模块内标题 |
| Body | `text-base leading-relaxed` | `text-foreground` | 正文段落、描述说明 |
| Caption/Label | `text-sm font-medium` | `text-muted-foreground` | 标签、数据单位、辅助说明 |
| Data/Number | `text-3xl md:text-4xl font-bold tabular-nums` | `text-primary` 或渐变 | 核心指标数字展示 |

## 5. Global Layout Structure (全局布局结构)

### 5.1 Page Content Zones (页面区块配置)

> ⚠️ **全局统一规则**：以下参数为所有页面共享的唯一内容区定义。

**Standard Content Zone（全页面统一）**:
- **Maximum Width**: `max-w-7xl` (1280px)
- **Padding**: `px-4 md:px-6 lg:px-8`
- **Alignment**: `mx-auto`
- **Vertical Spacing**: 区块间距 `py-16` (64px)，内部组件间距 `gap-6` (24px)

**Hero/Banner 区块**:
- **Width**: `w-full` (背景全宽)
- **Padding**: `py-20 md:py-28`
- **Background**: `bg-background`

**布局策略**: 全屏通栏分段式。背景统一使用 `bg-background`，通过内容卡片的 `bg-card` 与留白构建层次。所有区块内容受 `max-w-7xl` 约束居中。

## 6. Visual Effects & Motion (视觉效果与动效)

- **Header/Hero 视觉方案**: 无独立背景色，依赖排版对比与蓝绿渐变文字 (`bg-gradient-to-r from-primary to-success bg-clip-text text-transparent`) 构建视觉锚点。
- **装饰手法**: 无冗余装饰。依靠卡片微阴影 (`shadow-sm`)、边框 (`border-border`) 与精确的间距系统构建秩序感。
- **圆角**: 全局统一 `rounded-lg` (8px)。按钮、输入框、卡片、标签均遵循此值。
- **阴影**: `shadow-sm` 用于卡片层级区分；`shadow-md` 用于悬浮导航与 FAB 按钮；禁用重度投影。
- **复杂背景文字处理**: 
  - 渐变背景文字: 使用 `bg-clip-text text-transparent`，底层确保对比度充足。
  - 有色背景上的文字: 严格使用 `text-primary-foreground` 或 `text-accent-foreground` (纯白)，对比度 ≥ 4.5:1。

### 6.1 动效意图

> 本节只声明动效意图（what / why），不提供实现细节（how）。

- **整体动效风格**: 克制、短促、以 opacity + 微位移为主，服务于 B 端专业感，避免过度炫技。
- **页面入场**: 首屏内容自上而下轻微淡入 (`opacity-0` → `opacity-100`, `translate-y-2` → `translate-y-0`)，节奏从容（约 300-400ms）。
- **滚动揭示**: 各区块随视口进入依次淡入上浮，整体节奏统一，避免 stagger 过度分散注意力。
- **列表项动效 · 变更模式**: `增量增删` / `整批替换`
- **列表项动效 · 意图**: 团队能力网格与业务卡片在滚动进入视口时逐项轻微延迟入场（stagger 50ms），营造有序加载感。
- **关键交互微动效**: 按钮 hover 时轻微上浮 (`-translate-y-0.5`) + 阴影加深；数字指标加载时支持计数动画意图；悬浮咨询按钮点击展开面板时伴随平滑缩放与淡入。

## 7. Components (组件指南)

> **必须引用 Color System 中的颜色角色**。每个组件需定义 Default/Hover/Active/Focus 状态。

### Buttons
- **Primary (常规品牌按钮)**: 背景 `bg-primary` / 文字 `text-primary-foreground` / 圆角 `rounded-lg` / Hover `bg-primary/90 hover:-translate-y-0.5` / Focus `ring-2 ring-primary/50 ring-offset-2`
- **Accent / CTA (核心转化按钮)**: 背景 `bg-accent` / 文字 `text-accent-foreground` / 圆角 `rounded-lg` / Hover `bg-accent/90 hover:-translate-y-0.5` / Active `scale-[0.98]`
- **Outline**: 背景 透明 / 边框 `border border-border` / 文字 `text-foreground` / Hover `bg-background border-primary/30 text-primary`
- **Ghost**: 背景 透明 / 文字 `text-muted-foreground` / Hover `bg-background text-foreground`

### Form Elements
- **输入框**: 背景 `bg-card` / 边框 `border border-border` / 圆角 `rounded-lg` / 内边距 `px-4 py-2.5` / Focus `border-primary ring-2 ring-primary/20 outline-none` / Placeholder `text-muted-foreground`
- **悬浮咨询面板**: 固定定位 `fixed bottom-6 right-6 md:bottom-10 md:right-10` / 背景 `bg-card` / 边框 `border-border` / 阴影 `shadow-xl` / 圆角 `rounded-xl` / 展开宽度 `w-80 md:w-96`

### Cards
- **通用卡片**: 背景 `bg-card` / 边框 `border border-border` / 圆角 `rounded-lg` / 内边距 `p-6` (24px) / 阴影 `shadow-sm` / Hover `shadow-md transition-shadow`
- **团队能力卡片**: 同上，顶部可加 2px `border-t-2 border-primary/10` 增加层次，内部数据使用 `tabular-nums` 对齐。
- **业务对比卡片**: 左右分栏布局，左侧传统模式 `bg-muted/50`，右侧 AI 模式 `bg-card border-primary/20`，通过色彩对比凸显价值。

### Navigation (Topbar)
- **容器**: `fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border`
- **链接项**: `px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors`
- **激活态**: `text-primary border-b-2 border-primary` (底部指示线)
- **移动端菜单**: 汉堡图标触发侧滑/下拉面板，面板背景 `bg-card`，项间距 `py-3`

### Floating Action Button (FAB)
- **折叠态**: `fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-lg hover:scale-105 transition-transform flex items-center justify-center`
- **展开态**: 面板 `absolute bottom-16 right-0 w-80 md:w-96 bg-card rounded-xl shadow-xl border border-border p-6`，带关闭按钮与表单字段。

## 8. Flexibility Note (灵活性说明)

> **一致性优先原则**：单页官网中，所有区块必须使用相同的核心参数（最大宽度、容器边距、圆角、阴影等），确保整体设计语言统一。
>
> **允许的微调范围**（code agent 可自行判断）：
> - 响应式断点适配（移动端 `px-4`，`md:` 以上恢复 `px-6 lg:px-8`）
> - 网格列数根据内容自动降级（桌面 3-4 列 → 平板 2 列 → 手机 1 列）
> - 区块内部间距可根据内容密度在 `gap-4` ~ `gap-6` 间微调，保持 8px 倍数
> - 数字动画与滚动揭示效果可根据性能按需启用/降级
>
> **禁止的随意变更**：
> - ❌ 不同区块使用不同的圆角尺寸（必须统一 `rounded-lg`）
> - ❌ 突破 `max-w-7xl` 限制让内容无限延伸
> - ❌ 擅自更改用户指定的核心配色与渐变逻辑
> - ❌ 添加未经定义的侧边栏、页脚复杂导航或多余装饰元素

## 9. Signature & Constraints (设计签名与禁区)

### DO (视觉签名)
1. **8px 秩序圆角**: 所有交互容器、按钮、卡片严格使用 `rounded-lg` (8px)，构建克制、现代的 B 端视觉基调。
2. **蓝绿渐变点睛**: 核心标语与关键数据使用 `bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent`，在冷灰背景中精准传递 AI 与全球化活力。
3. **暖橙 CTA 锚点**: 核心转化按钮统一使用 `bg-[hsl(25_94%_53%)]`，配合 `hover:-translate-y-0.5` 微动效，在页面中形成明确的行动引力场。
4. **毛玻璃导航**: Topbar 采用 `bg-white/80 backdrop-blur-md`，滚动时保持内容可读性与导航可见性，符合现代 SaaS 官网标准。

### DON'T (禁止做法)
> 通用约束参见「通用约束」。以下为 Prototype 特有：
- ❌ 使用 Tailwind 预设色板（如 `bg-blue-500`, `text-orange-400`）替代设计系统定义的 HSL 色值
- ❌ 在 Hero 或业务区块使用大面积纯色背景破坏通栏分段式的留白节奏
- ❌ 团队能力卡片使用复杂插画或过度装饰，应保持干净的数据/文本排版
- ❌ 悬浮咨询按钮遮挡页面核心内容或移动端底部安全区，需动态避让或调整透明度