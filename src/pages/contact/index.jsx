import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import ProfessionalReferences from './components/ProfessionalReferences';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');

  const tabs = [
    {
      id: 'contact',
      label: 'Contact Form',
      icon: 'MessageSquare',
      description: 'Send me a detailed project brief'
    },
    {
      id: 'methods',
      label: 'Contact Methods',
      icon: 'Phone',
      description: 'Multiple ways to reach me'
    },
    {
      id: 'availability',
      label: 'Availability',
      icon: 'Calendar',
      description: 'Schedule a consultation'
    },
    {
      id: 'references',
      label: 'References',
      icon: 'Users',
      description: 'Professional recommendations'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contact':
        return <ContactForm />;
      case 'methods':
        return <ContactMethods />;
      case 'availability':
        return <AvailabilityCalendar />;
      case 'references':
        return <ProfessionalReferences />;
      default:
        return <ContactForm />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact - DevPortfolio Pro | Let's Build Something Amazing</title>
        <meta name="description" content="Get in touch to discuss your next project. Available for full-time roles, contract work, consultations, and collaborations. Professional references available." />
        <meta name="keywords" content="contact developer, hire full-stack developer, project consultation, web development services, technical consultation" />
        <meta property="og:title" content="Contact - DevPortfolio Pro" />
        <meta property="og:description" content="Let's discuss your next project. Professional full-stack developer available for new opportunities." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devportfolio-pro.com/contact" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-5"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Icon name="MessageCircle" size={16} />
              <span>Let's Connect</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ready to Build
              <span className="gradient-text block">Something Amazing?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking to hire a full-stack developer, need technical consultation, 
              or want to collaborate on an exciting project, I'd love to hear from you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-accent" />
                <span>Responds within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} className="text-accent" />
                <span>Remote & On-site</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-xl p-2 shadow-brand border border-border">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`p-4 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab?.id
                        ? 'bg-primary text-white shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon 
                        name={tab?.icon} 
                        size={20} 
                        className={activeTab === tab?.id ? 'text-white' : 'text-primary'} 
                      />
                      <span className="font-semibold">{tab?.label}</span>
                    </div>
                    <p className={`text-xs ${
                      activeTab === tab?.id ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {tab?.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fade-in">
              {renderTabContent()}
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <Icon name="Zap" size={48} className="mx-auto mb-6 text-white/90" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Have an Urgent Project?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  For time-sensitive projects or immediate consultation needs, 
                  reach out directly via email or LinkedIn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:alex.developer@email.com?subject=Urgent Project Inquiry"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200"
                  >
                    <Icon name="Mail" size={20} />
                    <span>Email Directly</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/alex-developer-pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200"
                  >
                    <Icon name="Linkedin" size={20} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={18} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold gradient-text">DevPortfolio</span>
                  <span className="text-xs text-muted-foreground -mt-1">Pro</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Building digital solutions that drive real business results through 
                full-stack expertise and user-first thinking.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/alexdeveloper" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Icon name="Github" size={20} />
                </a>
                <a href="https://linkedin.com/in/alex-developer-pro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="https://twitter.com/alexdev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Projects</a>
                <a href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">About</a>
                <a href="/education" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Education</a>
                <a href="/certifications" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Certifications</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>alex.developer@email.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Available Mon-Fri, 9 AM - 6 PM EST</p>
                <p>Currently accepting new projects</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} DevPortfolio Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;