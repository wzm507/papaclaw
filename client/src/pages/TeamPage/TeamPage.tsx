import React from 'react';
import { motion } from 'framer-motion';
import { TeamCard } from '@/components/ui/team-card';
import { FounderCard } from '@/components/ui/FounderCard';
import {
  Globe,
  Brain,
  Cpu,
  Film,
  Rocket,
  Languages,
  Sparkles,
  LineChart,
  Landmark,
  Coins,
  FileSearch,
  ShieldCheck,
  Target,
  Users,
  Building2,
  TrendingUp,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

interface ITeamMember {
  role: string;
  icon: React.ReactNode;
  description: string;
}

const teamMembers: ITeamMember[] = [
  {
    role: '14 年中东深耕的战略咨询师',
    icon: <Globe className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '真正在中东市场摸爬滚打过、踩过坑、拿过结果的人。出海这条路，他们走过。',
  },
  {
    role: '阿里出身的 AI 数据分析师',
    icon: <Brain className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '从海量数据里找增长线索，用算法代替直觉。数据告诉我去哪里，我就去哪里。',
  },
  {
    role: 'AI 智能体搭建专家',
    icon: <Cpu className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '专注 AI Skill 研究，把复杂能力封装成可复用的自动化工作流。别人还在用 AI 写文案，我们已经在用 AI 跑流程。',
  },
  {
    role: 'AIGC 导演 + 剪辑师',
    icon: <Film className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '不是外包团队，是懂品牌叙事、懂海外语境的内容创作者。Vibe Marketing 的核心——让内容不像广告。',
  },
  {
    role: '实战派运营操盘手',
    icon: <Rocket className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '从 0 到 1 搭过账号、投过广告、跑过转化、踩过坑的人。知道每一步该做什么，不该做什么。',
  },
  {
    role: '海外本地化专家',
    icon: <Languages className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '懂中东、东南亚、非洲市场的真实消费者心理。不是翻译，是文化转译。同一个产品，在不同市场要用不同的语言讲。',
  },
  {
    role: '品牌策略师',
    icon: <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '做过从定位到视觉体系到品牌故事的全案。知道一个品牌从"中国制造"变成"全球品牌"中间差了多少个关键决策。',
  },
  {
    role: '海外投放优化师',
    icon: <LineChart className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '真金白银投过 Google、Meta、TikTok 广告，知道什么素材跑得动、什么文案转化高、什么时候该止损。',
  },
  {
    role: '政企资源对接人',
    icon: <Landmark className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '在南沙、香港、澳门三地有政府关系网络。政策红利不是天上掉下来的，是有人知道去哪拿、怎么拿、拿多少。',
  },
  {
    role: '供应链金融顾问',
    icon: <Coins className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '跨境结算、融资对接、供应链金融——让客户的钱转得起来、接得住、用得活。',
  },
  {
    role: '多语种内容团队',
    icon: <FileSearch className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '阿拉伯语、英语、东南亚小语种全覆盖。AI 生成的内容，由母语级编辑做最终把控，确保"不像广告"是真的不像。',
  },
  {
    role: '合规与法律顾问',
    icon: <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    description: '出海最怕踩的雷：税务、知识产权、数据隐私、平台规则。有人提前帮你排掉。',
  },
];

const businessModules = [
  {
    icon: <Film className="w-8 h-8 text-primary" />,
    title: '出海媒体',
    subtitle: 'Vibe Marketing',
    description: 'AI驱动的跨境内容营销，让品牌故事在海外市场自然生长',
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: '跨境智库',
    subtitle: '数据商机',
    description: '全球采购信息抓取与分析，精准把握海外市场脉搏',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: '品牌战略咨询',
    subtitle: 'Brand Strategy',
    description: '从定位到落地的全案服务，打造国际化品牌形象',
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: '政企资源对接',
    subtitle: 'Government Link',
    description: '南沙-港澳-中东三地资源联动，获取政策红利',
  },
  {
    icon: <Coins className="w-8 h-8 text-primary" />,
    title: '跨境金融服务',
    subtitle: 'Finance Services',
    description: '一站式跨境结算与融资解决方案，让资金流转更顺畅',
  },
];

const founders = [
  {
    name: '核心创始人',
    title: '中东市场深耕者',
    experience: '14年',
    description: '长期扎根中东核心圈层，具备成熟的海外市场实操经验与顶级政企渠道资源',
    location: '中东',
    highlight: '深耕中东',
    imageSrc: '/images/Robin.png',
  },
  {
    name: '联合创始人',
    title: '港澳资源联动者',
    experience: '香港本土',
    description: '香港本土圈层背景，深度联动南沙、港澳政企资源，构建三地全域资源联动的独家壁垒',
    location: '港澳',
    highlight: '资源联动',
    imageSrc: '/images/dabie.png',
  },
];

const coreAdvantages = [
  { icon: <Target className="w-8 h-8" />, title: 'AI数据驱动', desc: '全链路AI赋能，数据托底决策' },
  { icon: <Globe className="w-8 h-8" />, title: '独家资源网络', desc: '14年中东政企圈层+港澳官方渠道' },
  { icon: <Users className="w-8 h-8" />, title: '实战团队', desc: '真刀真枪干过的人，全流程贴身交付' },
  { icon: <TrendingUp className="w-8 h-8" />, title: '结果导向', desc: '所有服务包结果，不做空谈理论' },
];

const stats = [
  { value: '14年', label: '中东深耕经验', color: 'primary' },
  { value: '中科系', label: 'AI 技术基因', color: 'success' },
  { value: '12+', label: '全链路角色', color: 'accent' },
  { value: '多语种', label: '内容覆盖', color: 'primary' },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export default function TeamPage() {
  return (
    <div className="w-full bg-background">
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
        
        <div className="relative max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 w-full">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                ABOUT US · 关于我们
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent">
                AI 赋能
              </span>
              中国企业出海赢全球
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12">
              Papa Claw（爬爬虾数据科技有限公司）立足南沙、联动港澳、深耕中东，专注 AI 科技出海核心赛道，
              形成 AI 数据获客、品牌内容落地、政企项目拿单、资金资本兜底的全链路出海闭环体系。
            </p>

            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm md:text-base text-foreground font-medium">
                不靠直觉做判断。数据在哪里，市场就在哪里。从数据采集到方案落地，让每一次出海决策都有 AI 托底。
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-24">
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
              FOUNDERS · 双创始人架构
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
              构建不可复制的独家壁垒
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                index={index}
                name={founder.name}
                title={founder.title}
                experience={founder.experience}
                description={founder.description}
                location={founder.location}
                highlight={founder.highlight}
                imageSrc={founder.imageSrc}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
              ADVANTAGES · 核心优势
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
              四大核心壁垒，同行难以复制
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
              BUSINESS · 五大核心业务板块
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
              全链路出海闭环体系
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {businessModules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {module.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{module.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{module.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
              TEAM · 核心团队能力
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
              不是只有 PPT 的团队，
              <br />
              <span className="bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent">
                是真刀真枪干过的人
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
              我们区别于传统出海咨询、纯广告投放、单一供应链服务商，主打高性价比、快落地、全流程贴身服务、结果兜底
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={item}>
                <TeamCard
                  role={member.role}
                  description={member.description}
                  icon={member.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
              STATS · 实力数据
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
              用数据说话，用结果证明
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`text-4xl md:text-5xl lg:text-6xl font-bold text-${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-base md:text-lg text-muted-foreground mt-3">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
              我们不是<span className="text-accent">"帮你出海"</span>，是<span className="bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent">"我们一起出海"</span>
            </h3>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
              专注服务政府出海项目、实体外贸工厂两大客群，务实解决企业出海落地难、获客难、对接难、资金难四大核心痛点
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['落地难', '获客难', '对接难', '资金难'].map((pain, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-6 py-3 bg-success/10 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-foreground font-medium">{pain}</span>
                <span className="text-success font-medium">→</span>
                <span className="text-success font-medium">已解决</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}