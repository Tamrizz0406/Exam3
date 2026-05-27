import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reasons = () => {
  const { t } = useTranslation();

  const reasonsData = [
    {
      id: 1,
      titleKey: 'reasons.card1_title',
      defaultTitle: "EXPERTISE IN CUTTING-EDGE TECHNOLOGIES",
      descKey: 'reasons.card1_desc',
      defaultDesc: "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions."
    },
    {
      id: 2,
      titleKey: 'reasons.card2_title',
      defaultTitle: "PROVEN TRACK RECORD OF SUCCESS",
      descKey: 'reasons.card2_desc',
      defaultDesc: "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs."
    },
    {
      id: 3,
      titleKey: 'reasons.card3_title',
      defaultTitle: "CLIENT-CENTRIC APPROACH",
      descKey: 'reasons.card3_desc',
      defaultDesc: "At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process."
    },
    {
      id: 4,
      titleKey: 'reasons.card4_title',
      defaultTitle: "DEDICATED TEAM OF PROFESSIONALS",
      descKey: 'reasons.card4_desc',
      defaultDesc: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business."
    }
  ];

  return (
    <section className="w-full bg-[#141414] text-white py-12 border-t border-[#262626]">
      
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide max-w-2xl uppercase leading-snug">
          {t('reasons.heading', 'REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY')}
        </h2>
      </div>

      <div className="reasons-swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {reasonsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 h-[300px] flex flex-col justify-between hover:border-gray-700 transition duration-300 group">
                
                <div>
                  <h3 className="text-lg font-bold tracking-wide text-white mb-4 uppercase min-h-[56px] leading-tight">
                    {t(item.titleKey, item.defaultTitle)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(item.descKey, item.defaultDesc)}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 border-t border-[#262626] pt-4">
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <div className="border border-[#262626] p-2.5 rounded-full bg-[#141414] text-[#FF9F76] group-hover:bg-[#FF9F76] group-hover:text-black transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white uppercase tracking-wider transition duration-200">
                      {t('reasons.learnMore', 'Learn More')}
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default Reasons;