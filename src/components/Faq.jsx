import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();

  const [openId, setOpenId] = useState(1); 

  const faqData = [
    {
      id: 1,
      question: "How long does it take to complete a web development project?",
      answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      id: 2,
      question: "Can you handle large-scale mobile app development projects?",
      answer: "Yes, our team has extensive experience in architecture design and scaling mobile applications for both iOS and Android platforms."
    },
    {
      id: 3,
      question: "Can you integrate third-party APIs into our mobile app?",
      answer: "Absolutely. We seamlessly integrate payment gateways, CRM systems, social networks, and any custom REST/GraphQL APIs."
    },
    {
      id: 4,
      question: "How do you ensure cross-platform compatibility for mobile apps?",
      answer: "We use modern frameworks like React Native and Flutter, combined with rigorous testing on real devices to guarantee a flawless UX everywhere."
    },
    {
      id: 5,
      question: "What is your approach to user experience (UX) design?",
      answer: "Our approach is deeply research-driven. We build user personas, wireframes, and interactive prototypes to align perfectly with your business goals."
    }
  ];

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#141414] text-white py-12 border-t border-[#262626]">
      
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase">
          {t('faq.heading', 'FREQUENTLY ASKED QUESTIONS')}
        </h2>
        
        <div className="flex items-center space-x-2 border border-[#262626] bg-[#1A1A1A] px-4 py-2.5 rounded-xl cursor-pointer hover:bg-[#222] transition group">
          <span className="text-xs font-medium text-gray-400 group-hover:text-white uppercase tracking-wider">
            {t('faq.viewAll', 'View All')}
          </span>
          <div className="text-[#FF9F76] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <div className="lg:col-span-7 space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 transition duration-300"
              >
                <div 
                  onClick={() => toggleAccordion(item.id)}
                  className="flex justify-between items-center gap-4 cursor-pointer select-none group"
                >
                  <h3 className="text-sm md:text-base font-semibold tracking-wide text-white group-hover:text-gray-300 transition">
                    {item.question}
                  </h3>
                  
                  <div className="flex-shrink-0 border border-[#262626] bg-[#141414] p-2.5 rounded-full text-gray-400 transition-colors">
                    {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-[#262626]' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="lg:col-span-5 bg-[#1A1A1A] border border-[#262626] rounded-3xl p-6 lg:p-8 space-y-6">
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              {t('faq.formHeading', 'ASK YOUR QUESTION')}
            </h3>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                NAME
              </label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-600 placeholder-gray-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                EMAIL
              </label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-600 placeholder-gray-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                YOUR QUESTION
              </label>
              <textarea 
                rows="4"
                placeholder="Enter Your Question Here ....."
                className="w-full bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-600 placeholder-gray-600 resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#FF9F76] text-black font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest hover:bg-[#ffb291] transition mt-2"
            >
              {t('faq.submitBtn', 'SEND YOUR MESSAGE')}
            </button>
          </form>
        </div>

      </div>

    </section>
  );
};

export default Faq;