import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const coreValues = [
    {
      title: "Integrity",
      description: "I believe in honest communication, transparent processes, and delivering what I promise. If I can't meet a deadline, I'll let you know early with solutions.",
      icon: "Shield",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Excellence",
      description: "Good enough isn't good enough. I strive for excellence in every line of code, every user interaction, and every project delivery.",
      icon: "Star",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Empathy",
      description: "Understanding user needs, team dynamics, and business constraints helps me build solutions that truly serve their intended purpose.",
      icon: "Heart",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Innovation",
      description: "I'm always exploring new technologies and approaches, but I balance innovation with proven solutions to minimize risk while maximizing value.",
      icon: "Lightbulb",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Collaboration",
      description: "The best solutions emerge from diverse perspectives. I actively seek feedback, share knowledge, and contribute to team success.",
      icon: "Users",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Growth",
      description: "Every challenge is a learning opportunity. I embrace feedback, learn from mistakes, and continuously evolve my skills and approaches.",
      icon: "TrendingUp",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const projectHighlights = [
    {
      title: "E-commerce Platform Redesign",
      impact: "40% increase in conversion rate",
      description: "Led the complete redesign of a struggling e-commerce platform, focusing on user experience and performance optimization.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      icon: "ShoppingCart"
    },
    {
      title: "Real-time Collaboration Tool",
      impact: "Used by 10,000+ teams",
      description: "Built a real-time collaboration platform with live editing, video calls, and project management features.",
      technologies: ["Next.js", "WebRTC", "Socket.io", "MongoDB"],
      icon: "Users"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      impact: "Reduced analysis time by 60%",
      description: "Created an intelligent dashboard that automatically identifies trends and provides actionable insights for business decisions.",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      icon: "BarChart3"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide every decision I make and every project I work on. They're not just words—they're commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues?.map((value, index) => (
              <div
                key={value?.title}
                className="group relative bg-white rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300 border border-slate-100 hover:border-violet-200"
              >
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value?.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={value?.icon} size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {value?.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {value?.description}
                  </p>
                </div>
                
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value?.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Project Highlights */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Favorite Project Highlights
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A few projects that showcase my values in action and demonstrate the impact of thoughtful development.
            </p>
          </div>

          <div className="space-y-8">
            {projectHighlights?.map((project, index) => (
              <div
                key={project?.title}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Info */}
                <div className="flex-1 space-y-6">
                  <div className="bg-gradient-to-br from-slate-50 to-violet-50 rounded-2xl p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="gradient-primary p-3 rounded-xl text-white">
                        <Icon name={project?.icon} size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {project?.title}
                        </h3>
                        <div className="text-lg font-semibold gradient-text">
                          {project?.impact}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {project?.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project?.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <div className="absolute -inset-4 gradient-primary rounded-2xl blur-2xl opacity-20"></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-brand-lg">
                      <div className="text-center">
                        <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${coreValues?.[index % coreValues?.length]?.color} text-white mb-4`}>
                          <Icon name={project?.icon} size={48} />
                        </div>
                        <div className="text-3xl font-bold gradient-text mb-2">
                          {project?.impact?.split(' ')?.[0]}
                        </div>
                        <div className="text-slate-600">
                          {project?.impact?.split(' ')?.slice(1)?.join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Ready to Build Something Amazing Together?
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Whether you're looking for a dedicated team member or a project collaborator, 
                I'd love to discuss how we can create something meaningful together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-white font-medium rounded-xl hover:opacity-90 transition-opacity duration-200">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Start a Conversation
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors duration-200">
                  <Icon name="Download" size={20} className="mr-2" />
                  View My Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;