import React from 'react';
import { useTranslation } from 'react-i18next';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonialsData = [
    { id: 1, key: 't1', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    { id: 2, key: 't2', avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" },
    { id: 3, key: 't3', avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
    { id: 4, key: 't4', avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" }
  ];

  return (
    <section className="py-12 relative mt-6">
      
      <div className="absolute top-6 right-6 z-10">
        <button className="flex items-center space-x-2 border border-[#262626] bg-[#141414] px-4 py-2.5 rounded-xl hover:border-gray-600 transition text-xs font-semibold text-gray-400 hover:text-white uppercase group">
          <span>{t('testimonials.allTestimonials') || t('TESTIMONIALS.allTestimonials')}</span>
          <div className="text-[#FF9F76] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </button>
      </div>

      <div className="mb-10 pb-6 border-b border-[#262626]">
        <h2 className="text-3xl font-bold tracking-wide uppercase text-white">
          {t('testimonials.heading') || t('TESTIMONIALS.heading')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonialsData.map((item) => (
          <div 
            key={item.id} 
            className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[340px] hover:border-gray-700 transition"
          >
            
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-wide text-white uppercase leading-snug">
                "{t(`testimonials.cards.${item.key}.title`) || t(`TESTIMONIALS.cards.${item.key}.title`)}"
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                {t(`testimonials.cards.${item.key}.desc`) || t(`TESTIMONIALS.cards.${item.key}.desc`)}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#262626]/60 mt-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={item.avatar} 
                  alt="avatar" 
                  className="w-10 h-10 rounded-full object-cover border border-[#262626]"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">
                    {t(`testimonials.cards.${item.key}.name`) || t(`TESTIMONIALS.cards.${item.key}.name`)}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-medium pt-0.5">
                    {t(`testimonials.cards.${item.key}.role`) || t(`TESTIMONIALS.cards.${item.key}.role`)}
                  </p>
                </div>
              </div>

              <div className="w-9 h-9 bg-[#141414] border border-[#262626] rounded-full flex items-center justify-center text-white hover:border-gray-600 cursor-pointer transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default TestimonialsSection;