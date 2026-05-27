import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ currentPage, setCurrentPage }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="border-b border-[#262626] bg-[#141414] sticky top-0 z-50 py-5 mb-8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        <div 
          className="text-xl font-bold tracking-wider text-white cursor-pointer uppercase"
          onClick={() => setCurrentPage('home')}
        >
          NEXGEN
        </div>

        <nav className="hidden md:flex items-center space-x-1 bg-[#1A1A1A] border border-[#262626] p-1.5 rounded-xl">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${currentPage === 'home' ? 'bg-[#262626] text-white' : 'text-gray-400 hover:text-white'}`}
          >
            {t('nav.home')}
          </button>
          
          <button 
            onClick={() => setCurrentPage('about')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${currentPage === 'about' ? 'bg-[#262626] text-white' : 'text-gray-400 hover:text-white'}`}
          >
            {t('nav.about')}
          </button>

          <button 
            className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-gray-500 cursor-not-allowed"
            disabled
          >
            {t('nav.services')}
          </button>

         <button 
  onClick={() => setCurrentPage('projects')}
  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${currentPage === 'projects' ? 'bg-[#262626] text-white' : 'text-gray-400 hover:text-white'}`}
>
  {t('nav.projects')}
</button>

          <button 
            onClick={() => setCurrentPage('careers')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${currentPage === 'careers' ? 'bg-[#262626] text-white' : 'text-gray-400 hover:text-white'}`}
          >
            {t('nav.careers')}
          </button>

          <button 
            className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-gray-500 cursor-not-allowed"
            disabled
          >
            {t('nav.blogs')}
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex bg-[#1A1A1A] border border-[#262626] p-1 rounded-xl text-[10px] font-bold">
            <button 
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 rounded-md transition ${i18n.language === 'en' ? 'bg-[#262626] text-white' : 'text-gray-400'}`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('ru')}
              className={`px-2 py-1 rounded-md transition ${i18n.language === 'ru' ? 'bg-[#262626] text-white' : 'text-gray-400'}`}
            >
              RU
            </button>
          </div>

          <button className="bg-[#FF9F76] text-[#141414] font-bold text-xs px-5 py-2.5 rounded-xl uppercase tracking-wider hover:bg-[#ff8b57] transition">
            {t('nav.contact')}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;