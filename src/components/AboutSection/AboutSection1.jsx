import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection1 = () => {
  const { t } = useTranslation();

  const stats = [
    { id: 1, value: "200+", label: "CLIENTS" },
    { id: 2, value: "280+", label: "PROJECTS" },
    { id: 3, value: "100%", label: "HAPPY CLIENTS" },
    { id: 4, value: "420K", label: "FOLLOWER" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch py-6">
      
      <div className="lg:col-span-7 bg-[#1A1A1A] border border-[#262626] rounded-3xl p-8 md:p-14 flex flex-col justify-center items-start relative overflow-hidden min-h-[340px]">
        <div className="max-w-xl z-10">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide leading-tight text-white">
            {t('about.heroTitle', 'ELEVATING BRANDS IN THE DIGITAL AGE')}
          </h1>
        </div>

        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center space-x-3 bg-[#141414] border border-[#262626] pl-3 pr-5 py-3 rounded-full cursor-pointer hover:bg-[#222] transition group">
          <div className="w-10 h-10 bg-[#FF9F76] rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <span className="text-xs font-bold text-gray-300 uppercase tracking-wider group-hover:text-white">
            {t('hero.startProject', 'START A PROJECT')}
          </span>
        </div>
      </div>

      <div className="lg:col-span-5 grid grid-cols-2 gap-4 bg-[#1A1A1A] border border-[#262626] rounded-3xl p-4 md:p-6 relative">
        
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="bg-[#141414] border border-[#262626] rounded-2xl p-5 flex flex-col justify-center items-start"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1">
              {stat.value}
            </span>
            <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">
              {stat.label}
            </span>
          </div>
        ))}

        <div className="col-span-2 flex items-center justify-center space-x-2 bg-[#141414] border border-[#262626] py-3.5 rounded-2xl cursor-pointer hover:bg-[#222] transition mt-2">
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            KNOW MORE
          </span>
        </div>

      </div>

    </div>
  );
};

export default AboutSection1;