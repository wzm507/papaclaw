import React, { useState } from 'react';
import { MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingContactButton() {
  const [fabOpen, setFabOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
      <AnimatePresence>
        {fabOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 md:w-96 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
              <div>
                <h3 className="text-lg font-semibold text-foreground">合作咨询</h3>
                <p className="text-sm text-muted-foreground mt-0.5">留下信息，我们会尽快联系您</p>
              </div>
              <button
                onClick={() => setFabOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                aria-label="关闭咨询面板"
              >
                <XIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  姓名 <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 bg-card border border-border rounded-lg text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  企业名称 <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 bg-card border border-border rounded-lg text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="请输入企业名称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  联系方式 <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 bg-card border border-border rounded-lg text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="手机号 / 邮箱 / 微信"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  需求简述
                </label>
                <textarea
                  className="w-full px-3 py-2 bg-card border border-border rounded-lg text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  rows={3}
                  placeholder="请简要描述您的出海需求或目标市场..."
                />
              </div>
              <button className="w-full h-10 bg-[hsl(25_94%_53%)] text-white rounded-lg font-medium text-base flex items-center justify-center gap-2 hover:bg-[hsl(25_94%_48%)] transition-colors active:scale-[0.98]">
                <SendIcon className="w-4 h-4" />
                提交咨询
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setFabOpen(!fabOpen)}
        className="w-14 h-14 rounded-full bg-[hsl(25_94%_53%)] text-white shadow-lg flex items-center justify-center hover:bg-[hsl(25_94%_48%)] transition-colors"
        aria-label={fabOpen ? '关闭咨询面板' : '打开咨询面板'}
      >
        <AnimatePresence mode="wait">
          {fabOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <XIcon className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircleIcon className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}