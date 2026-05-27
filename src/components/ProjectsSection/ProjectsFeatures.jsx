import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectsFeatures = () => {
  const { t } = useTranslation();
  const features = ['f1', 'f2', 'f3', 'f4'];

  const getIcon = (key) => {
    switch (key) {
      case 'f1': return <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" />;
      case 'f2': return <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />;
      case 'f3': return <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.699a.75.75 0 01-.437-.695z" clipRule="evenodd" />;
      case 'f4': return <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.591a.75.75 0 101.06 1.06l1.591-1.591zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 101.06-1.06l-1.591-1.591a.75.75 0 10-1.06 1.06l1.591 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM6.166 17.834a.75.75 0 10-1.06 1.06l1.591 1.591a.75.75 0 101.06-1.06l-1.591-1.591zM3 12a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM6.166 6.166a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06L6.166 7.226a.75.75 0 010-1.06z" clipRule="evenodd" />;
      default: return null;
    }
  };

  return (
    <section className="py-12 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase text-white">
        {t('projects.keyFeatures.heading')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((key) => (
          <div key={key} className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-8 flex flex-col space-y-6">
            <div className="w-12 h-12 bg-[#141414] border border-[#262626] rounded-xl flex items-center justify-center text-[#FF9F76]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">{getIcon(key)}</svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white tracking-wide uppercase">{t(`projects.keyFeatures.items.${key}.title`)}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{t(`projects.keyFeatures.items.${key}.desc`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsFeatures;