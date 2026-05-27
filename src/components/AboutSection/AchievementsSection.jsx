import React from 'react';
import { useTranslation } from 'react-i18next';

const AchievementsSection = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      id: 1,
      date: "September 2023",
      title: "GLOBAL RECOGNITION FOR INNOVATION",
      desc: "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape."
    },
    {
      id: 2,
      date: "March 2019",
      title: "INDUSTRY LEADERSHIP ACKNOWLEDGED",
      desc: "Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction."
    },
    {
      id: 3,
      date: "August 2015",
      title: "EXPANSION INTO INTERNATIONAL MARKETS",
      desc: "Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale."
    },
    {
      id: 4,
      date: "January 2010",
      title: "PIONEERING THE DIGITAL FRONTIER",
      desc: "In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation."
    }
  ];

  return (
    <section className="py-12 mt-6">
      
      <div className="mb-10 pb-4 border-b border-[#262626]">
        <h2 className="text-3xl font-bold tracking-wide uppercase text-white">
          {t('achievements.heading', 'OUR ACHIEVEMENTS')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item) => (
          <div 
            key={item.id} 
            className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="text-sm font-medium text-gray-500 tracking-wide">
                {item.date}
              </span>
              
              <div className="w-full h-[1px] bg-[#262626] my-5"></div>
              
              <h3 className="text-base font-bold tracking-wide text-white uppercase leading-snug">
                {item.title}
              </h3>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-normal pt-4">
              {item.desc}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default AchievementsSection;