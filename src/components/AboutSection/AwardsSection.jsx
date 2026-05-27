import React from 'react';
import { useTranslation } from 'react-i18next';

const AwardsSection = () => {
  const { t } = useTranslation();

  const awards = [
    {
      id: 1,
      date: "October 2017",
      title: "DIGITAL EXCELLENCE AWARD",
      desc: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
    },
    {
      id: 2,
      date: "March 2019",
      title: "TOP MOBILE APP DEVELOPMENT AGENCY",
      desc: "Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless and user-centric mobile applications."
    },
    {
      id: 3,
      date: "July 2022",
      title: "BEST DIGITAL MARKETING CAMPAIGN",
      desc: "Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts that achieved remarkable business growth for our clients."
    },
    {
      id: 4,
      date: "November 2024",
      title: "INNOVATIVE TECH STARTUP AWARD",
      desc: "Recognition of our pioneering efforts as a technology startup, acknowledging our commitment to exploring and implementing cutting-edge technologies to drive innovation in the digital space."
    }
  ];

  return (
    <section className="py-12 mt-6">
      
      <div className="mb-10 pb-4 border-b border-[#262626]">
        <h2 className="text-3xl font-bold tracking-wide uppercase text-white">
          {t('awards.heading', 'AWARDS & RECOGNITIONS')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {awards.map((award) => (
          <div 
            key={award.id} 
            className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[365px] hover:border-gray-700 transition"
          >
            
            <div>
              <div className="flex items-center justify-between w-full mb-6">
                <div className="flex items-center space-x-1.5 bg-[#141414] border border-[#262626] px-3 py-1.5 rounded-xl">
                  <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </span>
                  <span className="text-[10px] font-semibold text-white">
                    • {award.date}
                  </span>
                </div>

                <div className="w-10 h-10 bg-[#141414] border border-[#262626] rounded-xl flex items-center justify-center text-[#FF9F76]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25c-.621 0-1.125.504-1.125 1.125v3.375m9 0V9M5.25 18.75V9m4.25 5.625h4.5m-4.5-3h4.5m-7.5-6h12a.75.75 0 01.75.75v3.75a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25V4.5a.75.75 0 01.75-.75z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-base font-bold tracking-wide text-white uppercase leading-snug">
                {award.title}
              </h3>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-normal pt-4">
              {award.desc}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default AwardsSection;