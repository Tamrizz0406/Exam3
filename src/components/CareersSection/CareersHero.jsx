import React from 'react';
import { useTranslation } from 'react-i18next';

const CareersHero = () => {
  const { t } = useTranslation();

  return (
    <section className="py-4 mt-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#262626] bg-[#1A1A1A] rounded-[24px] overflow-hidden">
        
        <div className="lg:col-span-8 p-8 md:p-14 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#262626]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-[1.15] flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>{t('careers.hero.title').split(' IN ')[0]}</span>
            <span className="inline-flex items-center space-x-3 normal-case font-normal my-1">
              <div className="w-12 h-12 rounded-full border border-[#FF9F76]/40 bg-[#FF9F76]/10 flex items-center justify-center text-[#FF9F76] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rotate-45">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-wider uppercase text-[#FF9F76] font-sans">
                {t('careers.hero.startProject')}
              </span>
            </span>
            <span className="w-full">{t('careers.hero.title').split(' IN ')[1] ? 'IN ' + t('careers.hero.title').split(' IN ')[1] : ''}</span>
          </h1>
        </div>

        <div className="lg:col-span-4 p-8 md:p-12 lg:p-14 flex flex-col justify-between space-y-12 bg-[#1A1A1A]">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase">
              {t('careers.hero.rightHeading')}
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed font-normal text-left">
              {t('careers.hero.rightDesc')}
            </p>
          </div>

          <div className="flex items-center space-x-3 cursor-pointer group w-fit">
            <div className="w-12 h-12 border border-[#262626] bg-[#141414] rounded-full flex items-center justify-center text-gray-400 group-hover:border-gray-500 group-hover:text-white transition duration-300 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-gray-400 group-hover:text-white transition font-sans">
              {t('careers.hero.knowMore')}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareersHero;