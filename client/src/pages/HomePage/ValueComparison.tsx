import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, CheckCircle, XCircle } from 'lucide-react';

interface ComparisonItem {
  icon: React.ReactNode;
  title: string;
  traditional: string;
  aiEnabled: string;
}

const comparisonItems: ComparisonItem[] = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: '效率',
    traditional: '人工手动操作，周期长',
    aiEnabled: 'AI自动抓取分析，实时响应',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: '成本',
    traditional: '人力成本高，效率低下',
    aiEnabled: '自动化流程，成本降低60%',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: '准确率',
    traditional: '依赖经验判断，误差大',
    aiEnabled: '数据驱动决策，精准匹配',
  },
];

export function ValueComparison() {
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
            VALUE COMPARISON · 价值对比
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
            传统出海 vs <span className="bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent">AI赋能出海</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
            不靠直觉做判断，数据在哪里，市场就在哪里
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {comparisonItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="bg-primary/5 border-b border-border px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                {/* Traditional */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">传统模式</p>
                    <p className="text-sm text-foreground">{item.traditional}</p>
                  </div>
                </div>

                {/* AI Enabled */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-success uppercase mb-1">AI赋能</p>
                    <p className="text-sm text-foreground">{item.aiEnabled}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}