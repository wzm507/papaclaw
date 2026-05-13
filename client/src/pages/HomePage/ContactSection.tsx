import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import logoUrl from '@shared/static/images/logo.png';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';

const quickLinks = [
  { label: 'Vibe Marketing', href: '#vibe-marketing' },
  { label: '全球采购情报', href: '#cross-border' },
  { label: '战略咨询', href: '#strategic' },
  { label: '政企对接', href: '#government' },
  { label: '金融服务', href: '#financial' },
];

const legalLinks = [
  { label: '隐私政策', href: '#' },
  { label: '服务条款', href: '#' },
  { label: '帮助中心', href: '#' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-background border-t border-border">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoUrl} alt="PAPA CLAW" className="h-10 w-auto md:h-12" />
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-md">
              用 AI 把中国生意，变成全球生意。
              <br />
              从数据采集到方案落地，让每一次出海决策都有 AI 托底。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-base text-muted-foreground">
                <MailIcon className="w-5 h-5 text-primary" />
                <span>contact@papaclaw.com</span>
              </div>
              <div className="flex items-center gap-3 text-base text-muted-foreground">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <span>+86 400-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-base text-muted-foreground">
                <MapPinIcon className="w-5 h-5 text-primary" />
                <span>广州 · 南沙</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-6">
              快速导航
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <UniversalLink
                    to={link.href}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </UniversalLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Legal */}
          <div>
            <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-6">
              开始合作
            </h3>
            <div className="space-y-4 mb-8">
              <UniversalLink
                to="#hero"
                className="block w-full text-center bg-[hsl(25_94%_53%)] text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-[hsl(25_94%_48%)] transition-all hover:-translate-y-0.5"
              >
                预约演示
              </UniversalLink>
              <UniversalLink
                to="#contact"
                className="block w-full text-center border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-muted hover:border-primary/30 hover:text-primary transition-all"
              >
                下载出海白皮书
              </UniversalLink>
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <UniversalLink
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </UniversalLink>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PAPA CLAW · 广州爬爬虾数据科技有限公司 · 粤 ICP 备 XXXXXXXX 号
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            用 AI 把中国生意，变成全球生意
          </p>
        </motion.div>
      </div>
    </section>
  );
}
