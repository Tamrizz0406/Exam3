import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from "../assets/img/Image(1).png"; 

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#141414] text-white pt-10 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#262626] rounded-3xl p-8 lg:p-12 bg-[#1A1A1A]">
        
        <div className="lg:col-span-7 space-y-8">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight uppercase">
            {t('hero.title', 'Digital Solutions')} <br />
            <span className="text-gray-300">{t('hero.subtitle', 'That Drive Success')}</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            {t('hero.description', 'At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.')}
          </p>

          <div className="flex items-center space-x-3 group cursor-pointer w-fit">
            <div className="bg-[#FF9F76] text-black p-3.5 rounded-full transition-transform group-hover:rotate-45 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
            <span className="text-[#FF9F76] font-medium text-sm tracking-wider uppercase border-b border-transparent group-hover:border-[#FF9F76] transition-all duration-200">
              {t('hero.startProject', 'Start a Project')}
            </span>
          </div>

          <div className="border-t border-[#262626] pt-6 overflow-hidden">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs tracking-widest text-gray-400 uppercase">
              <span className="flex items-center gap-2">● MARKETING</span>
              <span className="flex items-center gap-2">● WEBSITE DESIGN</span>
              <span className="flex items-center gap-2">● BRANDING</span>
              <span className="flex items-center gap-2">● WEB DEVELOPMENT</span>
            </div>
          </div>

        </div>

        <div className="lg:col-span-5 relative bg-[#141414] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between h-[400px]">
          
          <div className="w-full h-[75%] rounded-xl overflow-hidden bg-[#262626] flex items-center justify-center text-gray-500">
            <img src={img1} alt="Estatein Real Estate" className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-between items-center mt-4">
            <div>
              <h3 className="text-lg font-semibold text-white tracking-wide uppercase">Estatein Real Estate</h3>
              <p className="text-xs text-gray-500">Web Development.</p>
            </div>
            
            <div className="border border-[#262626] p-3 rounded-full text-[#FF9F76] bg-[#1A1A1A] hover:bg-[#FF9F76] hover:text-black transition duration-300 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
        
        {[
          { label: 'Clients', value: '200+' },
          { label: 'Projects', value: '280+' },
          { label: 'Happy Clients', value: '100%' },
          { label: 'Follower', value: '420K' },
          { label: 'Years Of Experience', value: '10+' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-2xl text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{stat.label}</p>
            <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
          </div>
        ))}

        <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#222] transition group">
          <div className="text-[#FF9F76] mb-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <span className="text-xs tracking-wider text-gray-400 uppercase font-medium">Know More</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;