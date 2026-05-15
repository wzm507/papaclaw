import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Globe, Compass, Building2, Wallet, CheckCircle, ArrowRight, Sparkles, TrendingUp, Shield, Clock, X, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface IProduct {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  details?: string;
  delivery?: string;
  scenarios?: string[];
}

interface IBusinessTab {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  philosophy: string;
  products: IProduct[];
  benefits: { icon: React.ReactNode; title: string; desc: string }[];
}

const tabs: IBusinessTab[] = [
  {
    id: 'vibe-marketing',
    icon: <Zap className="w-5 h-5" />,
    label: 'VIBE MARKETING',
    title: '出海媒体',
    subtitle: '让品牌成为文化，而不是广告',
    description: 'AI数据驱动原生内容，拒绝生硬翻译广告。从账号定位、平台搭建到内容策划、引流转化，一站式解决企业海外品牌常态化运营、获客难题。',
    philosophy: '不是让用户觉得"被营销了"，是让他们觉得"这个品牌懂我"。',
    benefits: [
      { icon: <Sparkles className="w-5 h-5" />, title: 'AI内容量产', desc: '多语种本土化内容快速产出' },
      { icon: <TrendingUp className="w-5 h-5" />, title: '精准投放', desc: '数据驱动优化投放效果' },
      { icon: <Clock className="w-5 h-5" />, title: '快速落地', desc: '48小时内容从脚本到上线' },
    ],
    products: [
      {
        id: 'vibe-1',
        name: '海外新媒体全案运营策划',
        price: '3000元/份',
        description: '账号定位、平台搭建、内容策划全套方案',
        features: ['账号定位分析', '平台搭建指导', '内容策划方案', '引流转化策略', '执行排期规划', '1次免费答疑'],
        details: '针对零基础出海企业，提供从0到1的海外社媒运营落地方案。包含目标市场分析、平台选择建议、内容定位策略、账号搭建指南、运营执行排期表等全套资料。',
        delivery: '交付形式：PDF方案文档+1次1小时在线答疑',
        scenarios: ['企业首次出海', '海外社媒起步', '品牌出海初期'],
      },
      {
        id: 'vibe-2',
        name: '企业社媒全域全包运营',
        price: '80000元/月 | 600000元/年',
        description: '自选3平台托管，AIGC内容量产+投放优化',
        features: ['多平台托管', 'AIGC内容', '投放优化', '询盘转化', '月度复盘'],
        highlight: true,
        details: '全团队全职落地服务，客户可从TikTok、LinkedIn、Facebook、Instagram、小红书、抖音、视频号中自选3个平台自由组合托管。包含AIGC原创本土化多语种内容量产、本地文化适配运营、精准投放优化、询盘主动转化、粉丝社群运维、周/月度数据深度复盘迭代。',
        delivery: '交付形式：每日内容产出、每周数据周报、每月深度复盘、专属对接群',
        scenarios: ['品牌出海常态化运营', '海外获客需求', '多平台矩阵运营'],
      },
      {
        id: 'vibe-3',
        name: '商业PPT定制',
        price: '180元/页',
        description: '路演/融资/招商/政企汇报场景',
        features: ['品牌逻辑梳理', '中英/阿语双语排版', '视觉设计', '定稿交付'],
        details: '专业PPT设计服务，覆盖路演、融资、招商、政企汇报等多种场景。包含品牌逻辑梳理、内容结构优化、专业视觉设计、中英或中阿双语排版。',
        delivery: '交付形式：PPT源文件+PDF版本',
        scenarios: ['融资路演', '招商宣讲', '政企汇报', '项目推介'],
      },
      {
        id: 'vibe-4',
        name: '品牌官网定制',
        price: '25000元/站点',
        description: '海外服务器部署+多语种适配+SEO优化',
        features: ['海外服务器部署', '多语种适配', 'SEO优化', '品牌视觉设计', '后台操作教学', '1年免费维护'],
        details: '企业海外官方门面搭建，包含海外服务器部署、多语种适配、SEO优化、品牌视觉设计、后台操作培训、1年免费技术维护。',
        delivery: '交付形式：上线网站+后台培训+1年维护服务',
        scenarios: ['企业品牌出海', '海外市场推广', '提升品牌公信力'],
      },
    ],
  },
  {
    id: 'cross-border',
    icon: <Globe className="w-5 h-5" />,
    label: 'CROSS-BORDER INTELLIGENCE',
    title: '跨境智库',
    subtitle: '全世界的采购需求，我们帮你找到',
    description: 'AI24小时抓取全球商机，不靠人工盲目筛选。从标讯抓取、商机匹配到标书代投、市场评估，帮客户盯订单、拿商机。',
    philosophy: '不是等客户找你，是客户来找你。',
    benefits: [
      { icon: <Clock className="w-5 h-5" />, title: '实时抓取', desc: 'AI全天候自动扫描全球标讯' },
      { icon: <Sparkles className="w-5 h-5" />, title: '精准匹配', desc: '按行业/地区/金额智能筛选' },
      { icon: <Shield className="w-5 h-5" />, title: '落地跟进', desc: '从投标到订单全程服务' },
    ],
    products: [
      {
        id: 'cross-1',
        name: '全球标书精准匹配服务',
        price: '99元/次',
        description: '1个工作日筛选3条7日内真实标讯',
        features: ['精准匹配', '15分钟投标指导'],
        details: '超低门槛体验精准商机服务，AI智能筛选与企业匹配度最高的全球标讯，帮助企业快速了解海外投标市场。',
        delivery: '交付形式：标讯清单+15分钟一对一投标指导',
        scenarios: ['初次尝试海外投标', '市场调研'],
      },
      {
        id: 'cross-2',
        name: 'AI标书年度代投服务',
        price: '39800元/年',
        description: 'AI全天候抓取+每日推送+全程投标',
        features: ['每日推送', '资质审核', '标书包装', '投标跟进'],
        highlight: true,
        details: '全年托管式投标服务，AI全天候抓取全球标讯，每日精准推送匹配商机，专业团队负责资质审核、标书包装、全程投标跟进。',
        delivery: '交付形式：每日标讯推送、标书制作、投标跟进、中标结果反馈',
        scenarios: ['长期海外投标需求', '政企订单拓展'],
      },
      {
        id: 'cross-3',
        name: '单份标书撰写+代办',
        price: '9800元/单',
        description: '多语种标书定制+材料包装+投标代办',
        features: ['多语种标书', '材料包装', '全程跟进', '中标后3%服务费'],
        details: '针对单次投标需求的专业服务，包含多语种标书定制、投标材料包装优化、投标流程代办、全程跟进答疑。中标后仅收取中标金额3%服务费，未中标无任何额外费用。',
        delivery: '交付形式：标书文件+投标跟进服务',
        scenarios: ['单次海外投标', '特定项目投标'],
      },
    ],
  },
  {
    id: 'strategic',
    icon: <Compass className="w-5 h-5" />,
    label: 'STRATEGIC ADVISORY',
    title: '品牌战略咨询',
    subtitle: '从诊断到落地，步步有据可依',
    description: '不靠拍脑袋决策，以数据+行业行家+本地专家三方验证，做可持续落地的出海规划。',
    philosophy: '不是一份报告就结束，是持续迭代的出海战友。',
    benefits: [
      { icon: <Sparkles className="w-5 h-5" />, title: '数据打底', desc: 'AI分析市场数据与竞品格局' },
      { icon: <TrendingUp className="w-5 h-5" />, title: '专家验证', desc: '行业行家+本地专家双重把关' },
      { icon: <Clock className="w-5 h-5" />, title: '持续迭代', desc: '月度执行计划+周度复盘优化' },
    ],
    products: [
      {
        id: 'strat-1',
        name: '海外市场准入快速评估',
        price: '199元/份',
        description: '市场分析+关税核查+风险预警',
        features: ['市场分析', '关税核查', '风险预警', '15分钟答疑'],
        details: '低成本快速评估海外市场准入可行性，包含目标市场分析、关税资质核查、风险预警、落地建议。',
        delivery: '交付形式：PDF评估报告+15分钟专属答疑',
        scenarios: ['市场调研', '出海决策参考'],
      },
      {
        id: 'strat-2',
        name: '企业出海全域战略咨询',
        price: '按需定制',
        description: '市场诊断+赛道卡位+落地路线图',
        features: ['市场诊断', '赛道卡位', '竞品分析', '落地路线图'],
        highlight: true,
        details: '专家+本地团队双护航的定制化战略咨询服务，包含市场诊断、赛道卡位分析、竞品分析、合规风控、落地路线图、月度执行计划、周度复盘迭代。',
        delivery: '交付形式：战略方案+月度跟进+周度复盘',
        scenarios: ['企业出海战略规划', '海外市场拓展'],
      },
    ],
  },
  {
    id: 'government',
    icon: <Building2 className="w-5 h-5" />,
    label: 'GOVERNMENT & ENTERPRISE',
    title: '政企资源对接',
    subtitle: '政策是加速器，不是障碍',
    description: '南沙-港澳-海外全域政企资源对接，合规准入+政策申报+政企订单对接，帮企业精准吃透所有合规红利。',
    philosophy: '政策红利不是天上掉下来的，是有人知道去哪拿、怎么拿、拿多少。',
    benefits: [
      { icon: <Sparkles className="w-5 h-5" />, title: '政策梳理', desc: 'AI筛查+人工核验全维度政策' },
      { icon: <Shield className="w-5 h-5" />, title: '零风险申报', desc: '到账后才收费，失败不花钱' },
      { icon: <Globe className="w-5 h-5" />, title: '全球对接', desc: '覆盖中东/东南亚/非洲/葡语系国家' },
    ],
    products: [
      {
        id: 'gov-1',
        name: '企业专属政策红利梳理',
        price: '299元/份',
        description: 'AI筛查+人工核验全维度政策',
        features: ['政策梳理', '申报条件', '资料清单', '预估金额'],
        details: '结合企业所属行业、经营地区、企业资质、出海赛道，AI大数据筛查+人工核验，精准梳理企业可申报的国家级/省级/市区级/港澳/南沙全部补贴、税收优惠、人才补贴、算力补贴、出海专项扶持政策。',
        delivery: '交付形式：PDF政策报告',
        scenarios: ['政策红利摸底', '企业资质评估'],
      },
      {
        id: 'gov-2',
        name: '政企补贴全程申报代办',
        price: '结果分成(20%)',
        description: '前期零预付，到账后才收费',
        features: ['零预付', '失败不收费', '缺失文件代做'],
        highlight: true,
        details: '零风险政策申报服务，前期不收取任何服务费，补贴资金到账后仅收取实际到账金额的20%作为服务费。申报失败不收费。如企业存在资质不全、申报材料缺失等问题，可提供缺失文件专项代做服务。',
        delivery: '交付形式：申报服务+材料代做',
        scenarios: ['政策补贴申报', '资质文件准备'],
      },
      {
        id: 'gov-3',
        name: '政企出海商务考察',
        price: '98000元/团',
        description: '全程地接+官方接待+政企高层拜会',
        features: ['专业地接', '行程定制', '官方接待', '成果复盘'],
        details: '一站式海外官方商务合作资源对接服务，包含全程专业地接、行程定制、官方接待、政企高层拜会、外事对接服务、全程翻译、商务座谈、成果复盘总结。',
        delivery: '交付形式：全程服务+成果报告',
        scenarios: ['海外商务考察', '政企资源对接'],
      },
    ],
  },
  {
    id: 'financial',
    icon: <Wallet className="w-5 h-5" />,
    label: 'FINANCIAL SERVICES',
    title: '跨境金融服务',
    subtitle: '资本在哪里，品牌就去哪里',
    description: '出海企业不缺订单，缺的是让资金安全、快速流转的通道。从跨境结算、供应链金融到投融资对接，打通出海企业资金全链路。',
    philosophy: '不是帮你省钱，是帮你让钱转起来。',
    benefits: [
      { icon: <TrendingUp className="w-5 h-5" />, title: '低费率结算', desc: '中科汇智通道，支持数字人民币' },
      { icon: <Shield className="w-5 h-5" />, title: '供应链金融', desc: '真实订单做信用，无抵押融资' },
      { icon: <Globe className="w-5 h-5" />, title: '资本对接', desc: '海内外产业基金+QFLP/QDLP通道' },
    ],
    products: [
      {
        id: 'fin-1',
        name: '融资BP定制服务',
        price: '19800元/份',
        description: '国际化双语融资BP定制',
        features: ['品牌梳理', '财务数据', '双语排版'],
        details: '针对企业出海融资、项目招商、政企汇报场景，定制专业国际化融资BP，包含品牌梳理、业务架构、商业模式、财务数据、落地规划、优势背书全板块内容，中英文双语排版、商业高级视觉定稿交付。',
        delivery: '交付形式：PPT源文件+PDF版本',
        scenarios: ['融资路演', '项目招商', '政企资本对接'],
      },
      {
        id: 'fin-2',
        name: '跨境合规结算服务',
        price: '按需适配',
        description: '专属通道+低费率+快到账',
        features: ['数字人民币', '低费率', '快到账'],
        highlight: true,
        details: '依托中科汇智专属通道，支持数字人民币跨境结算，低费率、快到账，解决中东、东南亚、非洲小众市场结算难题。',
        delivery: '交付形式：结算通道开通+操作指导',
        scenarios: ['海外贸易结算', '跨境资金流转'],
      },
      {
        id: 'fin-3',
        name: '出海供应链金融',
        price: '按需定制',
        description: '真实订单信用背书，无抵押融资',
        features: ['订单融资', '无抵押', '快速放款'],
        details: '依托企业真实订单与贸易流水做信用背书，无抵押对接周转资金，解决"有订单、没钱生产"的核心卡点。',
        delivery: '交付形式：融资服务+还款方案',
        scenarios: ['外贸订单融资', '生产资金周转'],
      },
      {
        id: 'fin-4',
        name: '投融资资本对接',
        price: '按需定制',
        description: '海内外基金匹配+路演辅导',
        features: ['基金对接', '路演辅导', '通道落地'],
        details: '依托海内外产业基金、政府引导基金、跨境资本渠道，为优质出海项目提供资本匹配、路演辅导、QFLP/QDLP通道落地、全程投融资对接跟进。',
        delivery: '交付形式：资本对接+路演辅导',
        scenarios: ['融资需求', '资本升级'],
      },
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('vibe-marketing');
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeContent = tabs.find(tab => tab.id === activeTab) || tabs[0];

  const openModal = (product: IProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="w-full bg-background">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
            CORE BUSINESS · 核心业务
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
            五大业务板块，全链路覆盖
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            从品牌营销到供应链情报，从战略咨询到金融服务，AI 驱动的全链路出海服务
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {activeContent.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {activeContent.label}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{activeContent.title}</h2>
                    </div>
                  </div>
                  <p className="text-lg text-foreground font-semibold mb-2">{activeContent.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{activeContent.description}</p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-xl p-4 md:p-6">
                    <p className="text-sm md:text-base font-medium text-foreground italic">
                      "{activeContent.philosophy}"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                    核心优势
                  </h3>
                  <div className="space-y-4">
                    {activeContent.benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                  产品与服务
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeContent.products.map((product, index) => (
                    <div
                      key={index}
                      className={`p-4 md:p-6 rounded-xl border transition-all hover:shadow-md ${
                        product.highlight
                          ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-success/5'
                          : 'border-border/50 bg-card hover:border-primary/20'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{product.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                        </div>
                        {product.highlight && (
                          <Badge className="bg-accent text-accent-foreground text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            主推
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                        <button
                          onClick={() => openModal(product)}
                          className="flex items-center gap-1 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                        >
                          详情
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                          >
                            <CheckCircle className="w-3 h-3 text-success" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-8 md:mt-12 bg-gradient-to-r from-primary/5 via-success/5 to-accent/5 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              一站式AI出海结果服务商
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              从AI商机挖掘、本土化品牌营销、出海战略咨询，到政企资源对接、跨境资金兜底，
              全覆盖企业出海全生命周期需求
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-success" />
                <span className="text-foreground font-medium">AI数据托底决策</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-success" />
                <span className="text-foreground font-medium">独家政企资源落地</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-success" />
                <span className="text-foreground font-medium">全流程贴身交付</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-success" />
                <span className="text-foreground font-medium">所有服务包结果</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedProduct && (
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
                    {activeContent.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {activeContent.label}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{selectedProduct.name}</h3>
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
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-primary">{selectedProduct.price}</span>
                  {selectedProduct.highlight && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      主推产品
                    </Badge>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    服务详情
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct.details || '暂无详细描述'}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    交付标准
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProduct.delivery || '暂无交付标准说明'}
                  </p>
                </div>

                {selectedProduct.scenarios && selectedProduct.scenarios.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      适配场景
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.scenarios.map((scenario, i) => (
                        <Badge key={i} variant="secondary" className="px-4 py-2">
                          {scenario}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    服务内容
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-accent hover:bg-accent/90">
                    立即咨询
                  </Button>
                  <Button variant="outline" onClick={closeModal}>
                    关闭
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}