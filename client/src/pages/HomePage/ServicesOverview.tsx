import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Globe, Compass, Building2, Wallet, ArrowRight } from 'lucide-react';

interface BusinessBlock {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
}

const businesses: BusinessBlock[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    label: 'VIBE MARKETING',
    title: '让品牌成为文化',
    description: 'AI驱动的内容创作与全渠道分发，让用户觉得品牌懂他们',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    label: 'GLOBAL INTELLIGENCE',
    title: '全球采购情报',
    description: 'AI 24小时抓取全球招标信息，帮你找到订单',
  },
  {
    icon: <Compass className="w-6 h-6" />,
    label: 'STRATEGIC ADVISORY',
    title: '战略咨询',
    description: '数据+行家+本地人，三方验证确保方向正确',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    label: 'GOVERNMENT',
    title: '政企对接',
    description: '南沙、香港、澳门政策红利，帮你拿到实实在在的好处',
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    label: 'FINANCIAL SERVICES',
    title: '跨境金融',
    description: '跨境结算、供应链金融，让钱转起来',
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

export function ServicesOverview() {
  return (
    <section className="w-full bg-muted/30 py-16 md:py-24 lg:py-32">
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
            CORE SERVICES · 核心业务
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
            五大业务板块，全链路覆盖
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
            从品牌营销到供应链情报，从战略咨询到金融服务，AI驱动的全链路出海服务
          </p>
        </motion.div>

        {/* Business Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {businesses.map((biz, index) => (
            <motion.div key={index} variants={item}>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium mb-4">
                  {biz.icon}
                  <span>{biz.label}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{biz.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{biz.description}</p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>了解详情</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
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
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(25_94%_53%)] text-white rounded-xl font-semibold hover:bg-[hsl(25_94%_48%)] transition-all hover:-translate-y-0.5"
          >
            <span>查看全部业务</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}