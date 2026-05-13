import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Brain, Film, Rocket, ArrowRight } from 'lucide-react';

interface TeamMember {
  icon: React.ReactNode;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    icon: <Globe className="w-7 h-7 text-primary" />,
    role: '战略咨询师',
    description: '14年中东市场深耕，真正懂海外的实战专家',
  },
  {
    icon: <Brain className="w-7 h-7 text-primary" />,
    role: 'AI数据分析师',
    description: '阿里出身，用数据驱动决策，不靠直觉判断',
  },
  {
    icon: <Film className="w-7 h-7 text-primary" />,
    role: 'AIGC导演',
    description: '懂品牌叙事的内容创作者，让内容不像广告',
  },
  {
    icon: <Rocket className="w-7 h-7 text-primary" />,
    role: '运营操盘手',
    description: '从0到1实战经验，知道每一步该做什么',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export function TeamOverview() {
  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
            OUR TEAM · 核心团队
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
            不是只有 PPT 的团队，
            <br />
            <span className="bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent">
              是真刀真枪干过的人
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
            12类全链路角色，覆盖从战略规划到落地执行的每一个环节
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={item}>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {member.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{member.role}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
          >
            <span>查看完整团队</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}