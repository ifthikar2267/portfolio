import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { FiDownload } from 'react-icons/fi';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';




const HeroSection = () => {


  const handleDownload = () => {
    const fileUrl =
      "/assets/images/Ifthikar - Full Stack Developer Resume.pdf";

    // Create a hidden link and trigger click
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Ifthikar_Resume.pdf"); // This suggests a filename
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const navigate = useNavigate();

  return (
    <section className="relative bg-white py-8 lg:py-15  min-h-screen flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              {/* <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-violet-200">
                <Icon name="Sparkles" size={16} className="text-violet-600" />
                <span className="text-sm font-medium text-violet-700">About Me</span>
              </div> */}
              <div className="relative animate-slide-up flex justify-center">
           <div className="w-60 h-60 overflow-hidden rounded-full">
              <Image
                src="/assets/images/ifthikar.jpeg"
                alt="ifthikar - Full Stack Developer"
                className="w-full h-full object-cover"
                style={{ objectPosition: "40% center" }}
              />
            </div>
            </div>
              
              <h3 className="text-xl text-center text-[#0077FF]  lg:text-2xl font-bold leading-tight">
                ABOUT ME
              </h3>

             <h3 className="text-3xl text-center lg:text-4xl font-bold leading-tight font-worksans">
              <span className="text-[#0077FF]">Full Stack Developer</span>{' '}
              <span className="text-black">crafting scalable and dynamic applications</span>
            </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed lg:max-w-6xl font-worksans text-justify break-words">
              Hello there! I'm <span className='font-bold'>Ifthikar</span>. I specialize in web design and development, and I’m deeply passionate about creating innovative, user-friendly solutions. With hands-on experience in fullstack development, I strive to deliver high-quality, scalable, and impactful digital experiences. 
              </p>
            </div>

            {/* Quick Stats */}
            {/* <div className="grid grid-cols-3 gap-6">
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
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col lg:justify-between sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-[#0077FF] hover:bg-white hover:text-[#0077FF] border border-[#0077FF] sm:w-auto rounded-full text-white flex items-center gap-2 font-worksans"
                onClick={handleDownload}
              >
                Download CV
                <FiDownload size={18} />
              </Button>
              <Button 
                className="bg-[#0077FF] hover:bg-white hover:text-[#0077FF] border border-[#0077FF] sm:w-auto rounded-full text-white flex items-center gap-2 font-worksans"
                onClick={() => navigate('/education')}
              >
                <Icon name="Book" size={18} className="mr-2" />
                Education
              </Button>
               <Button 
                className="bg-white border border-[#0077FF] text-[#0077FF] hover:bg-[#0077FF] hover:text-white sm:w-auto rounded-full flex items-center gap-2 font-worksans"
                onClick={() => navigate('/projects')}
              >
                <Icon name="FolderOpen" size={18} className="mr-2" />
                View Project
              </Button>
              <Button 
                className="bg-white border border-[#0077FF] text-[#0077FF] hover:bg-[#0077FF] hover:text-white sm:w-auto rounded-full flex items-center gap-2 font-worksans"
                onClick={() => navigate('/contact')}
              >
                <Icon name="Contact" size={18} className="mr-2" />
                Contact ME
              </Button>

            </div>
          </div>

          {/* Image */}
          {/* <div className="relative animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-brand-lg">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Alex Johnson - Full Stack Developer"
                  className="w-full h-96 object-cover rounded-xl"
                /> */}
                
                {/* Floating Elements */}
                {/* <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-xl shadow-lg">
                  <Icon name="Code2" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-500 text-white p-3 rounded-xl shadow-lg">
                  <Icon name="Palette" size={24} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;