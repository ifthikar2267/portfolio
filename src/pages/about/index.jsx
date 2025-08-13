import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
// import JourneySection from './components/JourneySection';
// import PhilosophySection from './components/PhilosophySection';
// import SkillsProgressionSection from './components/SkillsProgressionSection';
// import PersonalSection from './components/PersonalSection';
// import ValuesSection from './components/ValuesSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Page Content */}
      <main className="pt-16">
        <HeroSection />
        {/* <JourneySection />
        <PhilosophySection />
        <SkillsProgressionSection />
        <PersonalSection />
        <ValuesSection /> */}
      </main>
      {/* Footer */}
      <footer className="bg-[#0077FF] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                {/* <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MJ</span>
                </div> */}
                <div>
                  <div className="text-lg font-bold font-worksans">Ifthikar</div>
                  <div className="text-md text-white font-worksans">Full-Stack Developer</div>
                </div>
              </div>
              <p className="text-white leading-relaxed max-w-md font-opensans">
                Building digital experiences that matter. Passionate about clean code, 
                user-centered design, and continuous learning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold font-worksans text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/homepage" className="text-white hover:text-white transition-colors font-worksans">Home</a></li>
                <li><a href="/projects" className="text-white hover:text-white transition-colors font-worksans">Projects</a></li>
                <li><a href="/about" className="text-white hover:text-white transition-colors font-worksans">About</a></li>
                <li><a href="/contact" className="text-white hover:text-white transition-colors font-worksans">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold text-white mb-4 font-worksans">Connect</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="https://www.linkedin.com/in/ifthikar-mj-59b8a8250" className="text-white hover:text-white transition-colors font-worksans">LinkedIn</a></li>
                <li><a href="https://github.com/ifthikar2267" className="text-white hover:text-white transition-colors font-worksans">GitHub</a></li>
                <li><a href="mailto:meetifthikarhere@gmail.com" className="text-white hover:text-white transition-colors font-worksans">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-mute mt-8 pt-8 text-center text-white font-worksans">
            <p>&copy; {new Date()?.getFullYear()} Ifthikar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;