import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "HOME",
        services: "SERVICES",
        projects: "PROJECTS",
        about: "ABOUT US",
        careers: "CAREERS",
        blogs: "BLOGS",
        contact: "CONTACT US"
      },
      faq: {
        heading: "FREQUENTLY ASKED QUESTIONS",
        viewAll: "VIEW ALL",
        questions: {
          q1: {
            title: "How long does it take to complete a web development project?",
            answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
          },
          q2: {
            title: "Can you handle large-scale mobile app development projects?",
            answer: "Yes, our team has extensive experience in scaling and delivering enterprise-grade mobile solutions with complex integrations."
          },
          q3: {
            title: "Can you integrate third-party APIs into our mobile app?",
            answer: "Absolutely. We seamlessly integrate payment gateways, CRM systems, social networks, and any custom REST/GraphQL APIs."
          },
          q4: {
            title: "How do you ensure cross-platform compatibility for mobile apps?",
            answer: "We use modern frameworks and rigorous testing methodologies across multiple real devices to guarantee a flawless experience."
          },
          q5: {
            title: "What is your approach to user experience (UX) design?",
            answer: "Our approach is user-centric. We conduct user research, build wireframes, and test prototypes to ensure intuitive navigation and maximum engagement."
          }
        }
      },
      testimonials: {
        heading: "TESTIMONIALS",
        viewAll: "ALL TESTIMONIALS",
        cards: {
          t1: {
            title: "NEXGEN TURNED OUR BUSINESS AROUND!",
            desc: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
            name: "Sarah Thompson",
            role: "CEO of BlueBloom"
          },
          t2: {
            title: "NEXGEN TURNED OUR BUSINESS AROUND!",
            desc: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
            name: "Wade Warren",
            role: "Art Director"
          },
          t3: {
            title: "WORKING WITH NEXGEN WAS A PLEASURE.",
            desc: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
            name: "Lisa Williams",
            role: "CEO of HealthTech"
          },
          t4: {
            title: "NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.",
            desc: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
            name: "Jennifer Lee",
            role: "COO of Foodie Haven"
          }
        }
      },
      careers: {
        hero: {
          title: "UNLOCK YOUR POTENTIAL IN THE DIGITAL WORLD",
          startProject: "START A PROJECT",
          rightHeading: "AT NEXGEN",
          rightDesc: "We believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.",
          knowMore: "KNOW MORE"
        },
        jobs: {
          heading: "JOIN OUR TEAM AT NEXGEN",
          viewDetails: "VIEW DETAILS",
          applyNow: "APPLY NOW",
          salary: "Salary",
          experience: "Experience",
          deadline: "Deadline",
          skillsHeading: "SKILLS",
          list: {
            designer: {
              title: "WEB DESIGNER",
              salaryVal: "$45,000 - $60,000 per year",
              expVal: "1+ year",
              deadlineVal: "30/09/2025",
              desc: "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise."
            },
            developer: {
              title: "MOBILE APP DEVELOPER",
              salaryVal: "$55,000 - $75,000 per year",
              expVal: "2+ years",
              deadlineVal: "15/10/2025",
              desc: "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging."
            },
            marketing: {
              title: "DIGITAL MARKETING SPECIALIST",
              salaryVal: "$50,000 - $65,000 per year",
              expVal: "3+ years",
              deadlineVal: "20/11/2025",
              desc: "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise."
            },
            manager: {
              title: "PROJECT MANAGER",
              salaryVal: "$60,000 - $80,000 per year",
              expVal: "5+ years",
              deadlineVal: "05/12/2025",
              desc: "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies."
            }
          }
        },
        process: {
          heading: "HOW TO APPLY",
          knowMore: "KNOW MORE",
          steps: {
            s1: { title: "EXPLORE JOB LISTINGS", desc: "Visit our website's \"Careers\" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations." },
            s2: { title: "REVIEW JOB DESCRIPTION", desc: "Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role." },
            s3: { title: "PREPARE YOUR APPLICATION", desc: "Before applying, ensure you have the following ready" },
            s4: { title: "COMPLETE THE APPLICATION", desc: "Click the \"Apply Now\" button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for." },
            s5: { title: "UPLOAD YOUR DOCUMENTS", desc: "Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form." },
            s6: { title: "SUBMIT YOUR APPLICATION", desc: "Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the \"Submit\" button to send it to our HR team." },
            s7: { title: "APPLICATION REVIEW", desc: "After the application deadline, our HR team will carefully review all applications. Shortlisted candidates will be contacted for further evaluation, which may include interviews and assessments." },
            s8: { title: "INTERVIEW PROCESS", desc: "If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location." }
          }
        }
      },
      projects: {
        hero: {
          title: "EMPOWERING YOUR DIGITAL VISION",
          startProject: "START A PROJECT",
          desc: "At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.",
          tag: "WEB DEVELOPMENT.",
          viewBlog: "VIEW BLOG"
        },
        keyFeatures: {
          heading: "KEY FEATURES OF OUR PROJECTS",
          items: {
            f1: { title: "STRATEGIC PLANNING", desc: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives." },
            f2: { title: "CUSTOMIZED SOLUTIONS", desc: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions." },
            f3: { title: "USER-CENTRIC APPROACH", desc: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces." },
            f4: { title: "TIMELY DELIVERY", desc: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality." }
          }
        }
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "ГЛАВНАЯ",
        services: "УСЛУГИ",
        projects: "ПРОЕКТЫ",
        about: "О НАС",
        careers: "ВАКАНСИИ",
        blogs: "БЛОГИ",
        contact: "СВЯЗАТЬСЯ"
      },
      faq: {
        heading: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
        viewAll: "ВСЕ ВОПРОСЫ",
        questions: {
          q1: {
            title: "Сколько времени занимает разработка веб-сайта?",
            answer: "Сроки зависят от сложности и требований проекта. Наша команда стремится сдавать проекты вовремя, сохраняя высшие стандарты качества."
          },
          q2: {
            title: "Можете ли вы справиться с крупномасштабными мобильными проектами?",
            answer: "Да, у нашей команды огромный опыт в масштабировании и создании корпоративных мобильных решений со сложными интеграциями."
          },
          q3: {
            title: "Можете ли вы интегрировать сторонние API в наше приложение?",
            answer: "Абсолютно. Мы без проблем интегрируем платежные шлюзы, CRM-системы, соцсети и любые кастомные REST/GraphQL API."
          },
          q4: {
            title: "Как вы обеспечиваете кроссплатформенную совместимость приложений?",
            answer: "Мы используем современные фреймворки и детальное тестирование на множестве реальных устройств для гарантии идеальной работы."
          },
          q5: {
            title: "Каков ваш подход к проектированию пользовательского опыта (UX)?",
            answer: "Наш подход ориентирован на пользователя. Мы исследуем аудиторию, строим варфреймы и тестируем прототипы для интуитивной навигации."
          }
        }
      },
      testimonials: {
        heading: "ОТЗЫВЫ",
        viewAll: "ВСЕ ОТЗЫВЫ",
        cards: {
          t1: {
            title: "NEXGEN ПОЛНОСТЬЮ ИЗМЕНИЛ НАШ БИЗНЕС!",
            desc: "Их стратегии цифрового маркетинга помогли нам привлечь новых клиентов и увеличить выручку на 30% всего за несколько месяцев. Очень рекомендуем!",
            name: "Сара Томпсон",
            role: "Генеральный директор BlueBloom"
          },
          t2: {
            title: "NEXGEN ПОЛНОСТЬЮ ИЗМЕНИЛ НАШ БИЗНЕС!",
            desc: "Их стратегии цифрового маркетинга помогли нам привлечь новых клиентов и увеличить выручку на 30% всего за несколько месяцев. Очень рекомендуем!",
            name: "Уэйд Уоррен",
            role: "Арт-директор"
          },
          t3: {
            title: "РАБОТАТЬ С NEXGEN БЫЛО ОДНИМ УДОВОЛЬСТВИЕМ.",
            desc: "Их команда веб-дизайна создала потрясающий сайт, который идеально передал суть нашего бренда. Отзывы наших клиентов исключительно положительные.",
            name: "Лиза Уильямс",
            role: "Генеральный директор HealthTech"
          },
          t4: {
            title: "КОМАНДА ДИЗАЙНА NEXGEN ВОПЛОТИЛА НАШУ ИДЕЮ В ЖИЗНЬ.",
            desc: "Их адаптивный дизайн гарантирует, что наш сайт выглядит потрясающе на всех устройствах, способствуя росту вовлеченности пользователей.",
            name: "Дженнифер Ли",
            role: "Операционный директор Foodie Haven"
          }
        }
      },
      careers: {
        hero: {
          title: "РАСКРОЙ СВОЙ ПОТЕНЦИАЛ В ЦИФРОВОМ МИРЕ",
          startProject: "НАЧАТЬ ПРОЕКТ",
          rightHeading: "В NEXGEN",
          rightDesc: "Мы верим в создание динамичной и совместной рабочей среды, которая вдохновляет членов нашей команды преуспевать в своих областях. Присоединяйтесь к нам, чтобы стать частью увлеченной и инновационной команды, создающей исключительные цифровые решения для клиентов по всему миру. Мы стремимся развивать таланты, поощрять профессиональный рост и создавать рабочее место, где процветает творчество.",
          knowMore: "ПОДРОБНЕЕ"
        },
        jobs: {
          heading: "ПРИСОЕДИНЯЙТЕСЬ К НАШЕЙ КОМАНДЕ В NEXGEN",
          viewDetails: "ПОДРОБНЕЕ",
          applyNow: "ОТКЛИКНУТЬСЯ",
          salary: "Зарплата",
          experience: "Опыт работы",
          deadline: "Дедлайн",
          skillsHeading: "НАВЫКИ",
          list: {
            designer: {
              title: "ВЕБ-ДИЗАЙНЕР",
              salaryVal: "$45,000 - $60,000 в год",
              expVal: "от 1 года",
              deadlineVal: "30/09/2025",
              desc: "Владение пакетом Adobe Creative Suite (Photoshop, Illustrator и др.), глубокое понимание принципов UI/UX-дизайна, опыт адаптивной верстки."
            },
            developer: {
              title: "РАЗРАБОТЧИК МОБИЛЬНЫХ ПРИЛОЖЕНИЙ",
              salaryVal: "$55,000 - $75,000 в год",
              expVal: "от 2 лет",
              deadlineVal: "15/10/2025",
              desc: "Владение разработкой под iOS или Android (Swift, Kotlin), знание паттернов мобильной разработки, опыт тестирования и отладки приложений."
            },
            marketing: {
              title: "СПЕЦИАЛИСТ ПО ЦИФРОВОМУ МАРКЕТИНГУ",
              salaryVal: "$50,000 - $65,000 в год",
              expVal: "от 3 лет",
              deadlineVal: "20/11/2025",
              desc: "Опыт в SEO, SEM и маркетинге в социальных сетях, умение работать с инструментами аналитики (Google Analytics и др.), экспертиза в контент-маркетинге."
            },
            manager: {
              title: "МЕНЕДЖЕР ПРОЕКТОВ",
              salaryVal: "$60,000 - $80,000 в год",
              expVal: "от 5 лет",
              deadlineVal: "05/12/2025",
              desc: "Сильные организационные и коммуникативные навыки, умение управлять сроками проекта и ресурсами, опыт работы по методологии Agile."
            }
          }
        },
        process: {
          heading: "КАК ОТКЛИКНУТЬСЯ",
          knowMore: "ПОДРОБНЕЕ",
          steps: {
            s1: { title: "ПРОСМОТР ВАКАНСИЙ", desc: "Посетите страницу «Вакансии» на нашем сайте, чтобы ознакомиться с текущими позициями. Изучите доступные роли и выберите ту, которая соответствует вашим навыкам и карьерным целям." },
            s2: { title: "ИЗУЧЕНИЕ ОПИСАНИЯ", desc: "Нажмите на название интересующей вакансии, чтобы открыть подробное описание. Внимательно ознакомьтесь с обязанностями и требованиями к квалификации." },
            s3: { title: "ПОДГОТОВКА ДОКУМЕНТОВ", desc: "Перед подачей заявки убедитесь, что у вас подготовлены все необходимые материалы и резюме." },
            s4: { title: "ЗАПОЛНЕНИЕ ЗАЯВКИ", desc: "Нажмите кнопку «Откликнуться» на странице вакансии, чтобы перейти к форме. Заполните личные данные, контактную информацию и выбранную позицию." },
            s5: { title: "ЗАГРУЗКА ФАЙЛОВ", desc: "Прикрепите резюме, сопроводительное письмо и портфолио (при наличии) в соответствующие поля электронной формы." },
            s6: { title: "ОТПРАВКА АНКЕТЫ", desc: "Внимательно проверьте всю введенную информацию. Убедившись в корректности данных, нажмите кнопку «Отправить» для передачи анкеты в HR-отдел." },
            s7: { title: "РАССМОТРЕНИЕ КАНДИДАТУРЫ", desc: "После окончания приема заявок наш HR-отдел тщательно изучит все анкеты. Отобранные кандидаты будут приглашены на следующий этап оценки и тестирования." },
            s8: { title: "ПРОХОЖДЕНИЕ ИНТЕРВЬЮ", desc: "Если ваша кандидатура выбрана, мы свяжемся с вами для согласования даты собеседования. Оно может проходить как лично, так и в онлайн-формате." }
          }
        }
      },
      projects: {
        hero: {
          title: "РАСШИРЯЕМ ВАШЕ ЦИФРОВОЕ ВИДЕНИЕ",
          startProject: "НАЧАТЬ ПРОЕКТ",
          desc: "В NexGen мы стремимся расширить ваше цифровое видение с помощью инновационных решений, разработанных под ваши уникальные потребности. Наша команда опытных специалистов в сочетании с передовыми технологиями гарантирует результат, который выведет ваш бизнес на новый уровень.",
          tag: "ВЕБ-РАЗРАБОТКА.",
          viewBlog: "СМОТРЕТЬ БЛОГ"
        },
        keyFeatures: {
          heading: "КЛЮЧЕВЫЕ ОСОБЕННОСТИ НАШИХ ПРОЕКТОВ",
          items: {
            f1: { title: "СТРАТЕГИЧЕСКОЕ ПЛАНИРОВАНИЕ", desc: "Каждый проект начинается с тщательного исследования и планирования для полного понимания целей наших клиентов." },
            f2: { title: "ИНДИВИДУАЛЬНЫЕ РЕШЕНИЯ", desc: "Мы верим в адаптацию наших услуг под уникальные требования каждого проекта для получения лучших результатов." },
            f3: { title: "ПОЛЬЗОВАТЕЛЬСКИЙ ПОДХОД", desc: "Наши проекты создаются с заботой о конечном пользователе, делая упор на бесшовный опыт и интуитивные интерфейсы." },
            f4: { title: "СВОЕВРЕМЕННАЯ СДАЧА", desc: "Мы придерживаемся строгих сроков и графиков, чтобы обеспечить своевременную сдачу без ущерба для качества." }
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;