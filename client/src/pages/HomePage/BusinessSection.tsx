import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Globe, Compass, Building2, Wallet, CheckCircle, ChevronRight, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface IBusinessStep {
  title: string;
  desc: string;
}

interface IBusinessBlock {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle: string;
  goldenQuote: string;
  goldenQuoteEn: string;
  painPoint?: string;
  steps: IBusinessStep[];
  dataAnchors?: { label: string; value: string }[];
  regions?: string[];
}

const businesses: IBusinessBlock[] = [
  {
    id: 'vibe-marketing',
    icon: <Zap className="w-6 h-6" />,
    label: 'VIBE MARKETING',
    title: '让品牌成为文化，而不是广告',
    subtitle: '不是让用户觉得"被营销了"，是让他们觉得"这个品牌懂我"。',
    goldenQuote: 'Don\'t sell. Resonate.',
    goldenQuoteEn: '',
    painPoint: '传统出海营销 = 翻译国内物料 + 投放海外广告。用户一眼就知道你在卖东西，然后划走。',
    steps: [
      {
        title: 'AI 抓取目标市场热门内容，找到情绪入口',
        desc: '每天分析 TikTok、YouTube、Instagram 上的爆款视频和帖子，找出目标市场的消费者在讨论什么、焦虑什么、喜欢什么。不是猜，是数据告诉的。',
      },
      {
        title: 'AIGC 导演 + 本地化团队创作原生内容',
        desc: '不找外包。自己的导演和剪辑师基于数据写脚本、做内容。一条视频从脚本到上线 48 小时。',
      },
      {
        title: '全平台投放 + 每周数据复盘',
        desc: 'Google、Meta、TikTok 同步跑。每周看：什么素材跑得动、什么文案转化高、什么时候该砍掉。不是一套内容用到死。',
      },
    ],
  },
  {
    id: 'cross-border',
    icon: <Globe className="w-6 h-6" />,
    label: 'CROSS-BORDER INTELLIGENCE',
    title: '全世界的采购需求，我们帮你找到',
    subtitle: '不是等你去找客户，是客户来找你。',
    goldenQuote: '数据告诉你市场在哪里，我们帮你把订单拿回来。',
    goldenQuoteEn: 'Not just data. Revenue.',
    steps: [
      {
        title: '每天自动扫，比你先知道谁要买东西',
        desc: '覆盖全球主要政府采购网、招标平台、国际贸易数据库。AI 24 小时不间断抓取，按行业、地区、金额自动分类筛选。不用你盯着，我们帮你盯着。',
      },
      {
        title: '匹配到你的企业，包装好材料去投标',
        desc: '找到需求只是第一步。根据招标方的具体要求——资质、技术参数、报价、交付周期——帮你做一整套投标材料：中文/阿拉伯语/英语标书、企业资质包装、产品方案书。不是给你一堆数据让你自己搞，是帮你把标投出去。',
      },
      {
        title: '中标后全程跟进，帮你把订单真正落地',
        desc: '合同谈判、样品寄送、生产排期、物流协调、跨境结算——有人全程跟进。不是投完标就结束，是帮你把这笔钱收到账上。',
      },
    ],
  },
  {
    id: 'strategic',
    icon: <Compass className="w-6 h-6" />,
    label: 'STRATEGIC ADVISORY',
    title: '从诊断到落地，步步有据可依',
    subtitle: '不是拍脑袋做判断，是数据 + 行家 + 本地人，三方验证。',
    goldenQuote: '不是一份报告就结束，是持续迭代的出海战友。',
    goldenQuoteEn: 'Not a one-time report. An ongoing partnership.',
    steps: [
      {
        title: '数据打底，先看清市场再动手',
        desc: 'AI 分析目标市场的行业数据、竞品格局、消费者行为趋势。不是泛泛的"这个市场很大"，是具体到"你的产品在哪个细分赛道有机会、机会多大、对手是谁"。',
      },
      {
        title: '行业专家入场，验证方向对不对',
        desc: '帮你联系这个赛道里真正干过的人——做过同类产品的、踩过同类坑的、在目标市场拿过结果的。听听过来人怎么说，比看十份报告都有用。',
      },
      {
        title: '本地专家落地，确保方案不是空中楼阁',
        desc: '目标市场当地的从业者、渠道商、政策专家——帮你验证方案在当地能不能落地、会不会踩雷、该怎么调整。AI 告诉你该去哪，本地人告诉你该怎么走。',
      },
    ],
    dataAnchors: [
      { label: '诊断', value: '数据扫描 + 专家验证，确认市场机会和切入点' },
      { label: '规划', value: '目标市场选择 + 渠道策略 + 品牌出海路线图' },
      { label: '落地', value: '月度执行计划 + 周度复盘 + 根据最新数据持续调整方向' },
    ],
  },
  {
    id: 'government',
    icon: <Building2 className="w-6 h-6" />,
    label: 'GOVERNMENT & ENTERPRISE',
    title: '政策不是障碍，是加速器',
    subtitle: '政策红利不是天上掉下来的，是有人知道去哪拿、怎么拿、拿多少。',
    goldenQuote: '政策就在那里，但知道怎么拿的人不多。',
    goldenQuoteEn: 'Policy is an accelerator — if you know who to ask.',
    steps: [
      {
        title: '在南沙，帮你拿政策红利和政企订单',
        desc: '双 15% 税优、算力补贴 30%、港澳人才个税补贴——政策写在那里，但没人帮你申报就等于没有。',
      },
      {
        title: '在港澳，帮你打通资本通道和中葡平台',
        desc: '香港 QFLP/QDLP 金融通道、金融机构落户奖励最高 1800 万。澳门中葡合作平台——葡语系国家的生意，这是一条别人没有的绿色通道。',
      },
      {
        title: '在海外，帮你搞定合规准入和政府关系',
        desc: '中东、东南亚、非洲、南亚——每个市场政策逻辑不同。合规准入、政府投标、本地牌照、税务规划——有人帮你具体到"这个国家这个行业的这个政策，该怎么走"。',
      },
    ],
    regions: ['南沙', '香港', '澳门', '阿联酋', '日本', '新加坡', '泰国', '马来西亚', '越南', '巴基斯坦', '葡语系国家', '非洲多国'],
  },
  {
    id: 'financial',
    icon: <Wallet className="w-6 h-6" />,
    label: 'FINANCIAL SERVICES',
    title: '资本在哪里，品牌就去哪里',
    subtitle: '出海不是缺产品，是缺让钱转起来的通道。',
    goldenQuote: '不是帮你省钱，是帮你让钱转起来。',
    goldenQuoteEn: 'Real financial advantages, not just promises.',
    steps: [
      {
        title: '跨境结算——中科汇智通道，让钱转得快、省得多',
        desc: '数字人民币跨境、mBridge 通道、非洲创新结算方案。不走传统银行的老路，手续费更低、到账更快、币种更灵活。东南亚、中东、非洲的结算难题，我们有专门方案。',
      },
      {
        title: '供应链金融——用数据做风控，帮你拿到周转资金',
        desc: '基于企业真实交易数据和订单，匹配供应链金融资源。不是传统抵押贷，是用你的贸易流水和订单做信用背书。解决出海企业最头疼的"有订单、没钱做"的卡点。',
      },
      {
        title: '对接基金——帮好项目找到对的钱',
        desc: '有规模的出海企业，不是缺钱，是缺对接资本的通道。帮你对接境内外投资机构、产业基金、政府引导基金。QFLP/QDLP 通道全通。',
      },
    ],
    dataAnchors: [
      { label: '跨境结算', value: '低费率 + 快到账' },
      { label: '供应链金融', value: '订单做信用' },
      { label: '基金对接', value: 'QFLP/QDLP 全通' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function BusinessSection() {
  const [activeBusiness, setActiveBusiness] = useState<IBusinessBlock | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (business: IBusinessBlock) => {
    setActiveBusiness(business);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveBusiness(null), 300);
  };

  return (
    <section id="services" className="w-full bg-muted/30 py-16 md:py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
            CORE BUSINESS · 核心业务
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
            五大业务板块，全链路覆盖
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
            从品牌营销到供应链情报，从战略咨询到金融服务，AI 驱动的全链路出海服务
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {businesses.map((biz, index) => (
            <motion.div key={biz.id} variants={itemVariants}>
              <Card
                className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => handleCardClick(biz)}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-success/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {biz.icon}
                    </div>
                    <Badge variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      了解详情
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {biz.label}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {biz.title}
                  </h3>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                    {biz.subtitle}
                  </p>

                  <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all">
                    <span>查看详情</span>
                    <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && activeBusiness && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="fixed inset-x-4 md:inset-x-1/4 lg:inset-x-1/3 top-1/2 -translate-y-1/2 bg-background rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {activeBusiness.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {activeBusiness.label}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{activeBusiness.title}</h3>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                  {activeBusiness.subtitle}
                </p>

                {activeBusiness.painPoint && (
                  <div className="bg-muted/50 border border-border rounded-xl p-4 md:p-6 mb-6">
                    <p className="text-base md:text-lg text-muted-foreground">
                      {activeBusiness.painPoint}
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    核心能力
                  </h4>
                  <div className="space-y-4">
                    {activeBusiness.steps.map((step, index) => (
                      <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-success" />
                            <h5 className="font-semibold text-foreground">{step.title}</h5>
                          </div>
                          <p className="text-muted-foreground text-sm pl-7">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {activeBusiness.dataAnchors && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                      服务内容
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {activeBusiness.dataAnchors.map((anchor, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-3 bg-primary/5 rounded-lg border border-primary/10">
                          <span className="text-sm font-semibold text-primary">{anchor.label}</span>
                          <span className="text-sm text-muted-foreground">{anchor.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeBusiness.regions && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                      覆盖区域
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeBusiness.regions.map((region, i) => (
                        <Badge key={i} variant="secondary" className="px-4 py-2">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-r from-primary/5 to-success/5 border border-primary/10 rounded-xl p-4 md:p-6">
                  <p className="text-lg md:text-xl font-semibold text-foreground">
                    {activeBusiness.goldenQuote}
                  </p>
                  {activeBusiness.goldenQuoteEn && (
                    <p className="text-sm md:text-base text-muted-foreground mt-2">
                      {activeBusiness.goldenQuoteEn}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}