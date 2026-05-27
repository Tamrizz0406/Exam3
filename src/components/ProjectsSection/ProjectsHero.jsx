import React from 'react';
import { useTranslation } from 'react-i18next';
import projectImg from '../../assets/img/Card.png';

const ProjectsHero = () => {
  const { t } = useTranslation();

  return (
    <section className="py-4 mt-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#262626] bg-[#1A1A1A] rounded-[24px] overflow-hidden">
        
        <div className="lg:col-span-7 p-8 md:p-14 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#262626] space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-[1.15] flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>{t('projects.hero.title').split(' YOUR ')[0]}</span>
            <span className="inline-flex items-center space-x-3 normal-case font-normal my-1">
              <div className="w-12 h-12 rounded-full border border-[#FF9F76]/40 bg-[#FF9F76]/10 flex items-center justify-center text-[#FF9F76] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rotate-45">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-wider uppercase text-[#FF9F76] font-sans">
                {t('projects.hero.startProject')}
              </span>
            </span>
            <span className="w-full">
              {t('projects.hero.title').split(' YOUR ')[1] ? t('projects.hero.title').split(' YOUR ')[1] : t('projects.hero.title')}
            </span>
          </h1>
          <p className="text-xs text-gray-400 leading-relaxed font-normal max-w-2xl text-left pt-2">
            {t('projects.hero.desc')}
          </p>
        </div>

        <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-center bg-[#1A1A1A]">
          <div className="relative rounded-2xl overflow-hidden group border border-[#262626] bg-[#141414] p-4 flex flex-col space-y-4">
            <div className="w-full h-64 rounded-xl overflow-hidden relative">
              <img 
                src={projectImg} 
                alt="Project Preview" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition duration-500"
              />
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <span className="bg-[#1A1A1A] border border-[#262626] px-3 py-1.5 rounded-xl text-[10px] text-gray-400 font-medium tracking-wide uppercase">
                {t('projects.hero.tag')}
              </span>
              <button className="flex items-center space-x-1.5 bg-[#1A1A1A] border border-[#262626] px-4 py-2 rounded-xl text-[10px] font-bold text-gray-400 hover:text-white hover:border-gray-600 transition uppercase group/btn">
                <span>{t('projects.hero.viewBlog')}</span>
                <div className="text-[#FF9F76] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsHero;