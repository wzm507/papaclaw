import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, ClockIcon, UsersIcon, CheckCircleIcon } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const steps = [
  {
    icon: <MailIcon className="w-6 h-6" />,
    title: '提交咨询',
    desc: '填写您的企业信息和出海需求',
  },
  {
    icon: <UsersIcon className="w-6 h-6" />,
    title: '专家对接',
    desc: '24小时内安排专属顾问联系您',
  },
  {
    icon: <ClockIcon className="w-6 h-6" />,
    title: '方案定制',
    desc: '根据您的需求定制出海方案',
  },
  {
    icon: <CheckCircleIcon className="w-6 h-6" />,
    title: '落地执行',
    desc: '全程跟进，确保方案落地',
  },
];

const advantages = [
  '14年中东市场深耕经验',
  '中科系AI技术团队',
  '全链路出海服务能力',
  '多语种内容覆盖',
  '政企资源对接',
  '跨境结算通道',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    requirement: '',
    industry: '',
    market: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full bg-background">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
            CONTACT US · 合作咨询
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
            开启您的全球出海之旅
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
            留下您的信息，我们的专属顾问将在24小时内与您联系，为您定制专属出海方案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 lg:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                填写咨询信息
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      姓名 <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 bg-background border border-border rounded-xl text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      企业名称 <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-11 px-4 bg-background border border-border rounded-xl text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="请输入企业名称"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      联系方式 <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full h-11 px-4 bg-background border border-border rounded-xl text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="手机号 / 邮箱 / 微信"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      所属行业
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full h-11 px-4 bg-background border border-border rounded-xl text-base text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">请选择行业</option>
                      <option value="manufacturing">制造业</option>
                      <option value="tech">科技/互联网</option>
                      <option value="consumer">消费品</option>
                      <option value="services">服务业</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    目标市场
                  </label>
                  <select
                    value={formData.market}
                    onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                    className="w-full h-11 px-4 bg-background border border-border rounded-xl text-base text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">请选择目标市场</option>
                    <option value="middle-east">中东</option>
                    <option value="southeast-asia">东南亚</option>
                    <option value="africa">非洲</option>
                    <option value="europe">欧洲</option>
                    <option value="americas">美洲</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    需求简述
                  </label>
                  <textarea
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="请简要描述您的出海需求、目标或挑战..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[hsl(25_94%_53%)] text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:bg-[hsl(25_94%_48%)] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <SendIcon className="w-5 h-5" />
                  提交咨询
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">联系我们</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">邮箱</p>
                      <p className="text-muted-foreground">contact@papaclaw.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">电话</p>
                      <p className="text-muted-foreground">+86 400-XXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">地址</p>
                      <p className="text-muted-foreground">广州市南沙区</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">合作流程</h3>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Advantages */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-success/5 border border-primary/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">为什么选择我们</h3>
                <div className="grid grid-cols-2 gap-3">
                  {advantages.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}