import React, { useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reasons from "./components/Reasons";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

import AboutSection1 from "./components/AboutSection/AboutSection1";
import TeamSection from "./components/AboutSection/TeamSection";
import AchievementsSection from "./components/AboutSection/AchievementsSection";
import AwardsSection from "./components/AboutSection/AwardsSection";
import TestimonialsSection from "./components/AboutSection/TestimonialsSection";

import CareersHero from "./components/CareersSection/CareersHero";
import CareersJobs from "./components/CareersSection/CareersJobs";
import CareersProcess from "./components/CareersSection/CareersProcess";

import ProjectsHero from "./components/ProjectsSection/ProjectsHero";
import ProjectsFeatures from "./components/ProjectsSection/ProjectsFeatures";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans antialiased">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="max-w-7xl mx-auto px-4 space-y-16">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Reasons />
            <Works />
            <Testimonials />
            <Faq />
          </>
        )}
        {currentPage === 'about' && (
          <>
            <AboutSection1 />
            <TeamSection />
            <AchievementsSection />
            <AwardsSection />
            <TestimonialsSection />
          </>
        )}
        {currentPage === 'careers' && (
          <>
            <CareersHero />
            <CareersJobs />
            <CareersProcess />
          </>
        )}
        {currentPage === 'projects' && (
          <>
            <ProjectsHero />
            <ProjectsFeatures />
            <Works />
            <Testimonials />
            <Faq />
          </>
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;