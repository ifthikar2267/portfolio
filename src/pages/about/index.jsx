import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import PhilosophySection from './components/PhilosophySection';
import SkillsProgressionSection from './components/SkillsProgressionSection';
import PersonalSection from './components/PersonalSection';
import ValuesSection from './components/ValuesSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Page Content */}
      <main className="pt-16">
        <HeroSection />
        <JourneySection />
        <PhilosophySection />
        <SkillsProgressionSection />
        <PersonalSection />
        <ValuesSection />
      </main>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AJ</span>
                </div>
                <div>
                  <div className="text-lg font-bold">Alex Johnson</div>
                  <div className="text-sm text-slate-400">Full-Stack Developer</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Building digital experiences that matter. Passionate about clean code, 
                user-centered design, and continuous learning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/homepage" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date()?.getFullYear()} Alex Johnson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;