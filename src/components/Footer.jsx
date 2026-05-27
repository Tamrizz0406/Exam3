import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const [searchQuery, setSearchQuery] = useState("");

  const socialCards = [
    { name: 'INSTAGRAM', icon: '📸', desc: 'Share visually appealing snippets of our latest web projects.' },
    { name: 'TWITTER', icon: '🐦', desc: 'Tweet about interesting coding challenges you\'ve overcome.' },
    { name: 'DRIBBBLE', icon: '🏀', desc: 'Showcase design elements of our web projects.' },
    { name: 'BEHANCE', icon: '🎯', desc: 'Create detailed presentations for our projects.' }
  ];

  return (
    <footer className="w-full bg-[#141414] text-white pt-12 pb-6 border-t border-[#262626] mt-16">
      
      <div className="bg-[#D39373] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-wide leading-tight">
            {t('footer.ctaTitle', 'READY TO TRANSFORM YOUR DIGITAL PRESENCE?')}
          </h2>
          <p className="text-black/80 text-xs md:text-sm font-medium leading-relaxed">
            {t('footer.ctaDesc', 'Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.')}
          </p>
        </div>
        <button className="bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl flex items-center space-x-2 hover:bg-zinc-900 transition flex-shrink-0">
          <span>{t('footer.getInTouch', 'GET IN TOUCH')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-[#D39373]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </button>
      </div>

      <div className="w-full overflow-hidden bg-[#1A1A1A] border-y border-[#262626] py-3.5 mb-8 text-[10px] font-bold tracking-widest text-gray-400 uppercase select-none whitespace-nowrap flex justify-around">
        <span>ON SOCIAL MEDIA ● FOLLOW US ON SOCIAL MEDIA ● FOLLOW US ON SOCIAL MEDIA ● FOLLOW US ON SOCIAL MEDIA</span>
      </div>

      <div className="w-full mb-8 bg-[#1A1A1A] border border-[#262626] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            {t('footer.searchHeading', 'Looking for something specific?')}
          </h3>
          <p className="text-gray-500 text-xs">
            {t('footer.searchSub', 'Search through our projects, documentation, or services.')}
          </p>
        </div>
        
        <div className="relative flex items-center bg-[#141414] border border-[#262626] rounded-xl px-4 py-3 w-full md:max-w-md focus-within:border-gray-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z" />
          </svg>
          
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('footer.searchPlaceholder', 'Search NexGen resources...')}
            className="w-full bg-transparent text-white text-xs focus:outline-none placeholder-gray-600"
          />

          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="text-gray-500 hover:text-white transition ml-2 text-sm"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialCards.map((card, idx) => (
            <div key={idx} className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-5 flex flex-col justify-between min-h-[140px] group hover:border-gray-700 transition">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-[#141414] border border-[#262626] rounded-xl text-lg">
                  {card.icon}
                </div>
                <div className="border border-[#262626] bg-[#141414] p-2 rounded-full text-gray-400 group-hover:text-[#FF9F76] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">{card.name}</h4>
                <p className="text-gray-500 text-[11px] leading-normal">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          
          <div className="grid grid-cols-4 gap-4 bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 text-xs">
            <div className="space-y-3">
              <span className="font-bold text-white block uppercase tracking-wider">Home</span>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li className="hover:text-white cursor-pointer">Why Us</li>
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Testimonials</li>
                <li className="hover:text-white cursor-pointer">FAQ's</li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="font-bold text-white block uppercase tracking-wider">Services</span>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li className="hover:text-white cursor-pointer">Web Dev</li>
                <li className="hover:text-white cursor-pointer">App Dev</li>
                <li className="hover:text-white cursor-pointer">Web Design</li>
                <li className="hover:text-white cursor-pointer">Marketing</li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="font-bold text-white block uppercase tracking-wider">Projects</span>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li className="hover:text-white cursor-pointer">Klothink</li>
                <li className="hover:text-white cursor-pointer">Zenith</li>
                <li className="hover:text-white cursor-pointer">Novus</li>
                <li className="hover:text-white cursor-pointer">Apex</li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="font-bold text-white block uppercase tracking-wider">Blogs</span>
              <div className="space-y-2">
                <span className="text-gray-500 font-medium block">Business</span>
                <span className="text-gray-400 font-medium flex items-center gap-1">Design <span className="text-[9px] bg-[#262626] text-gray-400 px-1 rounded">Soon</span></span>
                <span className="text-gray-400 font-medium flex items-center gap-1">Dev <span className="text-[9px] bg-[#262626] text-gray-400 px-1 rounded">Soon</span></span>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 space-y-4">
            <div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">NEWSLETTER</span>
              <h3 className="text-sm font-bold uppercase text-white tracking-wider">SUBSCRIBE TO OUR NEWSLETTER</h3>
            </div>
            <div className="flex items-center bg-[#141414] border border-[#262626] rounded-xl px-4 py-2.5">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent text-white text-xs focus:outline-none placeholder-gray-600"
              />
              <button className="text-gray-400 hover:text-[#FF9F76] transition ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-[#262626] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
        <p>© 2024 NexGen. All rights reserved.</p>
        <div className="flex space-x-4">
          <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;