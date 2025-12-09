import React from 'react';
import { StyleConfig, StyleId, QuoteData } from './types';

export const INITIAL_QUOTE: QuoteData = {
  text: "你前进的方向，比前进的速度更重要，尤其是在有杠杆助力的情况下。",
  author: "纳瓦尔",
  alignment: 'left'
};

// Patterns & Textures
const Textures = {
  paper: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
  ricePaper: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='roughpaper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' stitchTiles='stitch'/%3E%3CfeDiffuseLighting lighting-color='%23fff5e6' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23roughpaper)' opacity='0.4'/%3E%3C/svg%3E")`,
  grain: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.15'/%3E%3C/svg%3E")`,
  noise: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
};

export const STYLES: Record<StyleId, StyleConfig> = {
  zen: {
    id: 'zen',
    name: '纸本 (Paper)',
    description: '温润纸感，手写字迹',
    // Warmer, more tactile paper background
    containerClass: 'bg-[#F2EFE9] shadow-[0_20px_40px_-10px_rgba(60,50,40,0.2)] relative rounded-xl border border-[#E6E0D6]',
    wrapperClass: 'flex flex-col h-full justify-center',
    // Use Calligraphy font for "affinity"
    textClass: 'font-calligraphy text-4xl text-[#4A3B2A] leading-relaxed tracking-wide drop-shadow-sm',
    // Red seal style author
    authorClass: 'font-serif text-sm text-[#8B3A3A] text-right mt-12 pt-4 border-t border-[#4A3B2A]/10 w-full tracking-[0.2em]',
    decoration: (
      <>
        <div className="absolute inset-0 opacity-60 mix-blend-multiply pointer-events-none" style={{ backgroundImage: Textures.paper }}></div>
        {/* Subtle corner accent */}
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#4A3B2A]/10 rounded-tr-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#4A3B2A]/10 rounded-bl-xl"></div>
      </>
    )
  },
  modern: {
    id: 'modern',
    name: '极简 (Clean)',
    description: '现代黑白，醒目有力',
    // High contrast impact
    containerClass: 'bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] relative rounded-3xl border-4 border-black',
    wrapperClass: 'flex flex-col h-full justify-center px-2',
    textClass: 'font-sans font-black text-4xl text-black leading-tight tracking-tighter',
    authorClass: 'font-sans font-bold text-xs text-white bg-black inline-block px-4 py-2 rounded-full self-end mt-12 tracking-widest shadow-lg transform rotate-[-2deg]',
    decoration: (
      <>
        {/* Abstract geometric shape */}
        <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-gray-100 rounded-full mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-gray-50 rounded-full mix-blend-multiply pointer-events-none"></div>
      </>
    )
  },
  ink: {
    id: 'ink',
    name: '泼墨 (Splash)',
    description: '气势磅礴，水墨晕染',
    containerClass: 'bg-[#FDFBF7] shadow-2xl relative overflow-hidden rounded-sm',
    wrapperClass: 'flex flex-col h-full justify-center relative z-10',
    textClass: 'font-calligraphy text-5xl text-[#1a1a1a] leading-[1.6] drop-shadow-md',
    // Red vertical seal
    authorClass: 'font-serif text-white bg-[#991b1b] px-3 py-6 text-sm font-bold tracking-widest writing-vertical-rl rounded-sm absolute bottom-8 left-8 shadow-md opacity-90 border border-[#7f1d1d]',
    decoration: (
      <>
        <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none" style={{ backgroundImage: Textures.paper }}></div>
        {/* Ink Splash CSS Shape */}
        <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[60%] bg-gradient-to-bl from-gray-200 via-gray-100 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none transform rotate-12"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[40%] bg-gradient-to-tr from-gray-300 via-gray-100 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none"></div>
      </>
    )
  },
  nature: {
    id: 'nature',
    name: '森系 (Forest)',
    description: '清新自然，治愈色彩',
    // Soft gradient green
    containerClass: 'bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] shadow-[0_20px_50px_-12px_rgba(76,175,80,0.3)] relative rounded-2xl border border-white/50',
    wrapperClass: 'flex flex-col h-full justify-center',
    textClass: 'font-serif font-bold text-3xl text-[#2E7D32] leading-loose drop-shadow-sm',
    authorClass: 'font-sans text-xs text-[#1B5E20] font-bold tracking-[0.3em] uppercase mt-12 py-2 border-b-2 border-[#A5D6A7] inline-block self-end',
    decoration: (
      <>
        <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backgroundImage: Textures.noise }}></div>
        {/* Leaf-like shadow hint */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#A5D6A7]/40 to-transparent rounded-bl-[100px] pointer-events-none"></div>
      </>
    )
  },
  ancient: {
    id: 'ancient',
    name: '古意 (Ancient)',
    description: '泛黄书卷，竖排版式',
    containerClass: 'bg-[#DCCBB5] shadow-[5px_5px_15px_rgba(0,0,0,0.2),inset_0_0_60px_rgba(0,0,0,0.05)] relative rounded-sm border-l-4 border-[#8D6E63]',
    wrapperClass: 'writing-vertical-rl h-full flex flex-col items-center justify-center gap-6 py-8 pr-6',
    textClass: 'font-cursive text-4xl text-[#3E2723] leading-[2.2] tracking-widest font-bold opacity-90',
    authorClass: 'font-cursive text-xl text-[#5D4037] pt-6 border-l border-[#8D6E63]/40 mt-0 ml-4 tracking-widest',
    decoration: (
       <>
         <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{ backgroundImage: Textures.paper }}></div>
         {/* Line guides */}
         <div className="absolute inset-y-8 left-[25%] w-[1px] bg-[#8D6E63]/10 pointer-events-none"></div>
         <div className="absolute inset-y-8 left-[50%] w-[1px] bg-[#8D6E63]/10 pointer-events-none"></div>
         <div className="absolute inset-y-8 left-[75%] w-[1px] bg-[#8D6E63]/10 pointer-events-none"></div>
       </>
    )
  },
  porcelain: {
    id: 'porcelain',
    name: '青花 (Blue)',
    description: '蓝白相间，典雅大方',
    containerClass: 'bg-white shadow-xl relative border-[3px] border-[#1565C0] rounded-lg',
    wrapperClass: 'flex flex-col h-full justify-center p-4',
    textClass: 'font-serif font-bold text-3xl text-[#0D47A1] leading-loose',
    authorClass: 'font-serif text-sm text-[#1565C0] font-bold tracking-widest mt-12 px-6 py-1 border border-[#1565C0] rounded-full self-end',
    decoration: (
      <>
        <div className="absolute inset-2 border border-[#90CAF9] rounded-sm pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-[#E3F2FD] to-transparent pointer-events-none"></div>
      </>
    )
  },
  anime: {
    id: 'anime',
    name: '元气 (Pop)',
    description: '鲜亮撞色，活力满满',
    // Pop colors
    containerClass: 'bg-[#FFF9C4] shadow-[8px_8px_0px_#F48FB1] relative rounded-3xl border-4 border-[#F48FB1]',
    wrapperClass: 'flex flex-col h-full justify-center',
    textClass: 'font-anime text-4xl text-[#D81B60] leading-relaxed drop-shadow-sm',
    authorClass: 'font-anime text-lg text-white bg-[#F48FB1] mt-8 px-6 py-2 rounded-xl transform -rotate-2 self-end shadow-md',
    decoration: (
       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F48FB1_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none"></div>
    )
  },
  red: {
    id: 'red',
    name: '鸿运 (Lucky)',
    description: '中国红，喜庆祥和',
    containerClass: 'bg-[#C62828] shadow-2xl relative rounded-xl border-[2px] border-[#FFCDD2]',
    wrapperClass: 'flex flex-col h-full justify-center',
    // Gold gradient text simulation via bg-clip-text
    textClass: 'font-calligraphy text-4xl text-[#FFECB3] leading-relaxed drop-shadow-md',
    authorClass: 'font-serif text-sm text-[#C62828] bg-[#FFECB3] px-3 py-1 mt-12 tracking-widest font-bold rounded-sm self-end shadow-lg',
    decoration: (
       <div className="absolute inset-4 border border-[#FFCDD2]/30 rounded-lg pointer-events-none"></div>
    )
  },
  watercolor: {
    id: 'watercolor',
    name: '云烟 (Mist)',
    description: '梦幻紫调，唯美意境',
    containerClass: 'bg-gradient-to-t from-[#F3E5F5] to-[#E1BEE7] shadow-xl relative rounded-2xl overflow-hidden',
    wrapperClass: 'flex flex-col h-full justify-center',
    textClass: 'font-serif font-medium text-3xl text-[#4A148C] leading-loose italic',
    authorClass: 'font-serif text-sm text-[#6A1B9A] mt-12 tracking-[0.3em] self-end opacity-80',
    decoration: (
       <>
         <div className="absolute top-[-30%] right-[-30%] w-[100%] h-[80%] bg-[#CE93D8] rounded-full blur-[80px] opacity-40 pointer-events-none"></div>
         <div className="absolute bottom-[-30%] left-[-30%] w-[100%] h-[80%] bg-[#B39DDB] rounded-full blur-[80px] opacity-40 pointer-events-none"></div>
       </>
    )
  },
  blueprint: {
    id: 'blueprint',
    name: '蓝图 (Tech)',
    description: '科技蓝，理性构建',
    containerClass: 'bg-[#1E293B] shadow-2xl relative rounded-sm border-2 border-[#334155]',
    wrapperClass: 'flex flex-col h-full justify-center',
    textClass: 'font-mono text-3xl text-[#E2E8F0] leading-loose tracking-wide',
    authorClass: 'font-mono text-xs text-[#64748B] bg-[#0F172A] px-4 py-2 mt-12 border border-[#334155] rounded self-end',
    decoration: (
       <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
    )
  },
  clay: {
    id: 'clay',
    name: '陶土 (Clay)',
    description: '质感灰调，素雅高级',
    containerClass: 'bg-[#E5E5E5] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] relative rounded-[40px]',
    wrapperClass: 'flex flex-col h-full justify-center p-4',
    textClass: 'font-sans font-medium text-3xl text-[#525252] leading-relaxed tracking-tight',
    authorClass: 'font-sans text-xs text-[#737373] font-bold tracking-[0.2em] mt-12 uppercase self-end',
    decoration: (
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-[40px] pointer-events-none"></div>
    )
  },
  elegant: {
    id: 'elegant',
    name: '黑金 (Lux)',
    description: '暗夜黑金，奢华质感',
    containerClass: 'bg-[#0F0F0F] shadow-2xl relative rounded-xl border border-[#333]',
    wrapperClass: 'flex flex-col h-full justify-center',
    textClass: 'font-serif font-bold text-3xl text-[#D4AF37] leading-loose tracking-wide',
    authorClass: 'font-serif italic text-sm text-[#8C6D36] mt-12 tracking-[0.3em] border-b border-[#D4AF37]/30 pb-2 self-end',
    decoration: (
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
    )
  }
};