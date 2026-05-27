import React from 'react';
import { useTranslation } from 'react-i18next';

const CareersJobs = () => {
  const { t } = useTranslation();

  const jobKeys = ['designer', 'developer', 'marketing', 'manager'];

  const getIcon = (key) => {
    switch (key) {
      case 'designer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#FF9F76]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a1.65 1.65 0 112.332 2.332l-9.37 9.377a1.65 1.65 0 01-1.165.483H8.39a.45.45 0 01-.45-.45v-1.14c0-.437.174-.855.483-1.164l-.023-.023zM9.53 16.122a1.65 1.65 0 00-1.165.483l-4.73 4.73a.45.45 0 01-.636 0l-1.14-1.14a.45.45 0 010-.636l4.73-4.73a1.65 1.65 0 011.165-.483h1.14a.45.45 0 01.45.45v1.14z" />
          </svg>
        );
      case 'developer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#FF9F76]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H13.5M10.5 22.5H13.5M17.25 1.5h-10.5A2.25 2.25 0 004.5 3.75v16.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 00-2.25-2.25z" />
          </svg>
        );
      case 'marketing':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#FF9F76]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        );
      case 'manager':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#FF9F76]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.214.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-13.413 0C1.981 6.691 1.212 7.625 1.212 8.706v3.783c0 .644.28 1.25.768 1.66m18.27 0a4.115 4.115 0 01-3.007 1.24H4.757a4.118 4.118 0 01-3.007-1.24m12-11.64V2.05c0-.466-.38-.844-.847-.844H11.1c-.466 0-.847.378-.847.844v1.291m4.73 0c-1.245-.09-2.493-.135-3.743-.135s-2.498.045-3.743.136" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-6 space-y-8">
      <div className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase text-white">
          {t('careers.jobs.heading')}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {jobKeys.map((key) => (
          <div key={key} className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#262626] pb-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#141414] border border-[#262626] rounded-xl flex items-center justify-center">
                  {getIcon(key)}
                </div>
                <h3 className="text-base font-bold text-white tracking-wide uppercase">
                  {t(`careers.jobs.list.${key}.title`)}
                </h3>
              </div>
              <button className="flex items-center space-x-1 border border-[#262626] bg-[#141414] px-3 py-2 rounded-xl hover:border-gray-600 transition text-[10px] font-bold text-gray-400 hover:text-white uppercase group">
                <span>{t('careers.jobs.viewDetails')}</span>
                <div className="text-[#FF9F76] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-[#141414] border border-[#262626] px-3 py-2 rounded-xl text-[10px] text-gray-400 font-medium">
                <span className="text-gray-500 mr-1">{t('careers.jobs.salary')}:</span> {t(`careers.jobs.list.${key}.salaryVal`)}
              </div>
              <div className="bg-[#141414] border border-[#262626] px-3 py-2 rounded-xl text-[10px] text-gray-400 font-medium">
                <span className="text-gray-500 mr-1">{t('careers.jobs.experience')}:</span> {t(`careers.jobs.list.${key}.expVal`)}
              </div>
              <div className="bg-[#141414] border border-[#262626] px-3 py-2 rounded-xl text-[10px] text-gray-400 font-medium">
                <span className="text-gray-500 mr-1">{t('careers.jobs.deadline')}:</span> {t(`careers.jobs.list.${key}.deadlineVal`)}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-white tracking-wider uppercase">
                {t('careers.jobs.skillsHeading')}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                {t(`careers.jobs.list.${key}.desc`)}
              </p>
            </div>

            <button className="w-full bg-[#FF9F76] text-[#141414] hover:bg-[#ff8b57] font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider transition duration-300">
              {t('careers.jobs.applyNow')}
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CareersJobs;