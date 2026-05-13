import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const serviceTags = [
  'AI 自动抓取全球标书并投标',
  'AI 数据驱动 Vibe Marketing',
  '对接政府订单与企业资源',
  '品牌全链路出海代运营包结果',
  '跨境结算 + 供应链金融',
];

export function HeroSection() {
  return (
    <main className="overflow-hidden">
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section className="relative min-h-screen flex items-center">
        <div className="relative pt-24 md:pt-36 pb-16 md:pb-24 w-full">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className="absolute inset-0 -z-20">
            <img
              src="https://neeko-copilot.bytedance.net/api/text_to_image?prompt=abstract%20global%20business%20network%20with%20AI%20connections%20blue%20gradient%20background%20modern%20tech&image_size=landscape_16_9"
              alt="background"
              className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
              width="3276"
              height="4095"
            />
          </AnimatedGroup>
          <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
          <div className="mx-auto max-w-[90rem] px-6 md:px-8 lg:px-16 xl:px-20">
            <div className="text-center sm:mx-auto lg:mx-auto lg:mt-0">
              <AnimatedGroup variants={transitionVariants}>
                <div
                  className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                  <span className="text-foreground text-sm">AI赋能中国企业出海赢全球</span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                  <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </div>

                <h1
                  className="mt-8 max-w-5xl mx-auto text-balance text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  用 AI 把中国生意
                  <br />
                  <span className="bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent">
                    变成全球生意
                  </span>
                </h1>
                <p
                  className="mx-auto mt-8 max-w-3xl text-balance text-lg md:text-xl">
                  不靠直觉做判断。数据在哪里，市场就在哪里。
                  <br />
                  从数据采集到方案落地，让每一次出海决策都有 AI 托底。
                </p>
              </AnimatedGroup>

              <motion.div
                className="mt-10 flex flex-wrap justify-center gap-3 md:gap-5 max-w-5xl mx-auto">
                {serviceTags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 rounded-lg bg-primary/5 text-primary text-sm md:text-base font-medium border border-primary/10"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}