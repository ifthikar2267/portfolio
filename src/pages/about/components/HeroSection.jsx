import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-violet-50 via-pink-50 to-emerald-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-violet-200">
                <Icon name="Sparkles" size={16} className="text-violet-600" />
                <span className="text-sm font-medium text-violet-700">About Me</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Crafting Digital
                <span className="gradient-text block">Experiences</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                I'm a passionate full-stack developer who believes in building more than just applications—I create digital experiences that solve real problems and delight users.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-slate-600">Technologies</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200">
                <Icon name="Download" size={18} className="mr-2" />
                Download Resume
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors duration-200">
                <Icon name="Calendar" size={18} className="mr-2" />
                Schedule Call
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-brand-lg">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Alex Johnson - Full Stack Developer"
                  className="w-full h-96 object-cover rounded-xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-xl shadow-lg">
                  <Icon name="Code2" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-500 text-white p-3 rounded-xl shadow-lg">
                  <Icon name="Palette" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;