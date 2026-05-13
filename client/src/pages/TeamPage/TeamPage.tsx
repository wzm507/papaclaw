import React from 'react';
import { motion } from 'framer-motion';
import { TeamCard } from '@/components/ui/team-card';
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
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
              WHY US · 关于服务你的底气
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-6 md:mb-8">
              不是只有 PPT 的团队，
              <br />
              <span className="bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent">
                是真刀真枪干过的人
              </span>
            </h2>
          </motion.div>
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

        <motion.div
          className="mt-12 md:mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
              我们不是<span className="text-accent">"帮你出海"</span>，是<span className="bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent">"我们一起出海"</span>
            </h3>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
              Not consultants. Co-founders of your global journey.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tabular-nums">
                14 <span className="text-xl md:text-2xl text-primary">年</span>
              </div>
              <div className="text-base md:text-lg text-muted-foreground mt-3">中东深耕</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-success/5 to-transparent hover:from-success/10 transition-colors">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                中科系
              </div>
              <div className="text-base md:text-lg text-muted-foreground mt-3">AI 基因</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-colors">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tabular-nums">
                12<span className="text-xl md:text-2xl text-accent">+</span>
              </div>
              <div className="text-base md:text-lg text-muted-foreground mt-3">全链路角色</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                多语种
              </div>
              <div className="text-base md:text-lg text-muted-foreground mt-3">内容覆盖</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}