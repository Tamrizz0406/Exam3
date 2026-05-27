import React from 'react';
import { useTranslation } from 'react-i18next';

const CareersProcess = () => {
  const { t } = useTranslation();

  const steps = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'];

  return (
    <section className="py-6 space-y-8">
      
      <div className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase text-white">
          {t('careers.process.heading')}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((key, index) => (
          <div 
            key={key} 
            className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 md:p-7 flex flex-col justify-between space-y-8 min-h-[280px]"
          >
            <div className="space-y-4">
              <span className="text-xs text-gray-600 font-medium block font-sans">
                Step 0{index + 1}
              </span>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                {t(`careers.process.steps.${key}.title`)}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-normal text-left">
                {t(`careers.process.steps.${key}.desc`)}
              </p>
            </div>

            <div className="flex items-center space-x-2.5 cursor-pointer group w-fit">
              <div className="w-8 h-8 border border-[#262626] bg-[#141414] rounded-full flex items-center justify-center text-gray-400 group-hover:border-gray-500 group-hover:text-white transition duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 group-hover:text-white transition font-sans">
                {t('careers.process.knowMore')}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default CareersProcess;