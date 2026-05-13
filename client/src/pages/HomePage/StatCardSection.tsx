"use client";

import { SimpleStatCard } from '@/components/ui/simple-stat-card';
import { Users, Building2, Layers } from 'lucide-react';

export default function StatCardSection() {
  return (
    <section className="bg-black py-16 md:py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-4 md:mb-6">
            WINNING GLOBAL · 全球制胜
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">
            不是帮你"走出去"，是帮你<span className="bg-gradient-to-r from-[hsl(222_100%_54%)] to-[hsl(158_60%_52%)] bg-clip-text text-transparent">"赚到钱"</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl lg:max-w-3xl mx-auto">
            Not about going global. It's about winning global.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          <SimpleStatCard
            title="已入驻企业"
            value="500+"
            icon={<Users className="w-7 h-7 text-primary" />}
            className="bg-gray-900 border-gray-800 text-white"
          />

          <SimpleStatCard
            title="办公室"
            value="3地"
            icon={<Building2 className="w-7 h-7 text-primary" />}
            className="bg-gray-900 border-gray-800 text-white"
          />
          
          <SimpleStatCard
            title="业务板块"
            value="5大"
            icon={<Layers className="w-7 h-7 text-primary" />}
            className="bg-gray-900 border-gray-800 text-white"
          />
        </div>
      </div>
    </section>
  );
}