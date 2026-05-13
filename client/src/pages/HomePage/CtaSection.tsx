import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[hsl(222_100%_54%)] via-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Content */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
                准备好开启全球出海之旅了吗？
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10">
                留下您的信息，我们的专属顾问将在24小时内与您联系，为您定制专属出海方案
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[hsl(222_100%_54%)] rounded-xl font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5"
                >
                  <span>立即咨询</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/30 transition-all hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  <span>下载出海白皮书</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}