import React from 'react';
import Icon from '../../../components/AppIcon';

const JourneySection = () => {
  const journeySteps = [
    {
      year: "2019",
      title: "The Spark",
      description: "Discovered programming through a college computer science course. Built my first \'Hello World\' program and was instantly hooked by the logical beauty of code.",
      icon: "Zap",
      color: "bg-yellow-500"
    },
    {
      year: "2020",
      title: "First Project",
      description: "Created a personal expense tracker using vanilla JavaScript. Learned the importance of user experience when my friends actually started using it daily.",
      icon: "Rocket",
      color: "bg-blue-500"
    },
    {
      year: "2021",
      title: "React Revolution",
      description: "Dove deep into React and modern JavaScript. Built my first full-stack application—a task management tool that taught me about state management and API design.",
      icon: "Atom",
      color: "bg-cyan-500"
    },
    {
      year: "2022",
      title: "Professional Growth",
      description: "Joined my first development team. Learned about code reviews, testing, and collaborative development. Contributed to projects serving thousands of users.",
      icon: "Users",
      color: "bg-green-500"
    },
    {
      year: "2023",
      title: "Full-Stack Mastery",
      description: "Expanded into backend development with Node.js and databases. Built complete applications from database design to deployment and monitoring.",
      icon: "Database",
      color: "bg-purple-500"
    },
    {
      year: "2024",
      title: "Innovation Focus",
      description: "Currently exploring AI integration, performance optimization, and mentoring junior developers. Always learning, always building, always improving.",
      icon: "Brain",
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            My Development Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From curious beginner to passionate full-stack developer—here's how my love for coding evolved into a career dedicated to building meaningful digital experiences.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 to-pink-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {journeySteps?.map((step, index) => (
              <div
                key={step?.year}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-slate-50 rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${step?.color} text-white p-2 rounded-lg`}>
                        <Icon name={step?.icon} size={20} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold gradient-text">{step?.year}</div>
                        <div className="text-lg font-semibold text-slate-900">{step?.title}</div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{step?.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative hidden lg:block">
                  <div className="w-4 h-4 bg-white border-4 border-violet-500 rounded-full shadow-lg"></div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;