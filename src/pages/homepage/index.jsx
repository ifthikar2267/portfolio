import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillsVisualization from './components/SkillsVisualization';
import FeaturedProjects from './components/FeaturedProjects';
import AchievementTimeline from './components/AchievementTimeline';
import SocialProofSection from './components/SocialProofSection';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Ifthikar - Full-Stack Developer | Building the Future Through Code</title>
        <meta 
          name="description" 
          content="Professional full-stack developer specializing in React, Express.js, and Node.js. Creating scalable web applications that drive real business results. View projects, certifications, and get in touch." 
        />
        <meta 
          name="keywords" 
          content="full-stack developer, React developer, Node.js, web development, portfolio, software engineer" 
        />
        <meta name="author" content="ifthikar-portfolio" />
        <meta property="og:title" content="DevPortfolio Pro - Full-Stack Developer" />
        <meta 
          property="og:description" 
          content="Building the future through code. Professional full-stack developer with expertise in modern web technologies." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifthikar-portfolio.vercel.app" />
        <link rel="canonical" href="https://ifthikar-portfolio.vercel.app" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <HeroSection />
          
          {/* Skills Visualization */}
          <SkillsVisualization />
          
          {/* Abbout me */}
          {/* <HeroSection /> */}
          
          {/* Featured Projects */}
          <FeaturedProjects />
          
          {/* Achievement Timeline */}
          <AchievementTimeline />
          
          {/* Social Proof Section */}
          {/* <SocialProofSection /> */}
        </main>

        {/* Footer */}
        <footer className="bg-[#007BFF] border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  {/* <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SAI</span>
                  </div> */}
                  <div>
                    <div className="text-xl font-bold text-white font-worksans">Ifthikar</div>
                    <div className="text-md text-white font-semibold mt-1 font-worksans">Portfolio</div>
                  </div>
                </div>
                <p className="text-white mb-6 max-w-md font-worksans">
                  Code meets creativity. Full-stack developer building scalable, high-impact web applications that shape the future.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ifthikar2267" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ifthikar-mj-59b8a8250" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:meetifthikarhere@gmail.com"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">Gmail</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15Zm1.5 0v.511l8.25 6.188 8.25-6.188V4.5h-16.5Zm16.5 2.378-7.634 5.73a.75.75 0 0 1-.882 0L3.75 6.878V19.5h16.5V6.878Z" />
                    </svg>

                  </a>
  
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-white mb-4 font-worksans">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/projects" className="text-white hover:text-black transition-colors duration-200 font-worksans">Projects</a></li>
                  <li><a href="/about" className="text-white hover:text-black transition-colors duration-200 font-worksans">About</a></li>
                  <li><a href="/certifications" className="text-white hover:text-black transition-colors duration-200 font-worksans">Certifications</a></li>
                  <li><a href="/contact" className="text-white hover:text-black transition-colors duration-200 font-worksans">Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              {/* <div>
                <h3 className="font-semibold text-foreground mb-4">Services</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">Web Development</li>
                  <li className="text-muted-foreground">Mobile Apps</li>
                  <li className="text-muted-foreground">API Development</li>
                  <li className="text-muted-foreground">Consulting</li>
                </ul>
              </div> */}
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white text-sm font-semibold font-worksans">
                © {new Date()?.getFullYear()} Ifthikar Portfolio. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0 font-worksans">
                <a href="/privacy" className="text-white font-semibold hover:text-black text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-white font-semibold hover:text-black text-sm transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;