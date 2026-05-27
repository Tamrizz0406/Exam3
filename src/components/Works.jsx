import React from 'react';
import { useTranslation } from 'react-i18next';
import img2 from "../assets/img/Image(1) copy.png"; 
import img3 from "../assets/img/Image(1) copy 2.png";

const Works = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: 1,
      title: "ZENITH FITNESS APP",
      category: "Mobile App Development",
      time: "6 months",
      desc: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
      technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
      team: [1, 2, 3, 4, 5] 
    },
    {
      id: 2,
      title: "A-AURA ECOMMERCE",
      category: "Web Design & Development",
      time: "3 months",
      desc: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
      technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      team: [1, 2, 3, 4, 5]
    }
  ];

  return (
    <section className="w-full bg-[#141414] text-white py-12 border-t border-[#262626]">
      
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold tracking-wide uppercase">
          {t('works.heading', 'OUR WORKS')}
        </h2>
        <div className="flex items-center space-x-2 border border-[#262626] bg-[#1A1A1A] px-4 py-2.5 rounded-xl cursor-pointer hover:bg-[#222] transition group">
          <span className="text-xs font-medium text-gray-400 group-hover:text-white uppercase tracking-wider">
            {t('works.allWorks', 'All Works')}
          </span>
          <div className="text-[#FF9F76] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#1A1A1A] border border-[#262626] rounded-3xl p-6 items-stretch"
          >
            
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold tracking-wide text-white uppercase">
                    {project.title}
                  </h3>
                  <button className="flex items-center space-x-1.5 border border-[#262626] bg-[#141414] px-3 py-1.5 rounded-xl hover:border-gray-600 transition text-xs font-medium text-gray-400 hover:text-white uppercase">
                    <span>{t('works.details', 'Details')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-[#FF9F76]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-[#141414] border border-[#262626] px-3 py-1.5 rounded-lg text-xs text-gray-400">
                    Category <span className="text-white ml-1">● {project.category}</span>
                  </span>
                  <span className="bg-[#141414] border border-[#262626] px-3 py-1.5 rounded-lg text-xs text-gray-400">
                    Time Taken <span className="text-white ml-1">● {project.time}</span>
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed pt-2">
                  {project.desc}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-[#262626] min-h-[220px] flex items-center justify-center text-gray-500 border border-[#262626]">
               <img src={img2} className="w-full h-full object-cover" />
              <span className="text-xs uppercase tracking-wider">Project Screenshot</span>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-between bg-[#141414] border border-[#262626] rounded-2xl p-5 space-y-5">
              
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-[#1A1A1A] border border-[#262626] px-2.5 py-1 rounded-md text-[11px] text-gray-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                  Team Members
                </h4>
                <div className="flex items-center -space-x-2 overflow-hidden">
                  {project.team.map((member, idx) => (
                    <div 
                      key={idx} 
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-[#141414] bg-[#262626] flex items-center justify-center text-[10px] text-gray-400 font-bold uppercase"
                    >
                       <img src={img3} className="rounded-full" />
                      M{idx+1}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-[#FF9F76]/15 border border-[#FF9F76]/30 text-[#FF9F76] font-semibold py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-[#FF9F76] hover:text-black transition duration-300">
                {t('works.bookCall', 'Book a Call')}
              </button>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Works;