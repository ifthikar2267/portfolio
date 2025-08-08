import React from 'react';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophies = [
    {
      title: "User-First Development",
      description: "Every line of code I write starts with a simple question: 'How will this improve the user's experience?' Technology should serve people, not the other way around.",
      icon: "Heart",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Clean Code Principles",
      description: "Code is read more often than it's written. I believe in writing self-documenting, maintainable code that future developers (including myself) will thank me for.",
      icon: "Code2",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Continuous Learning",
      description: "The tech industry evolves rapidly, and so do I. I dedicate time weekly to learning new technologies, patterns, and best practices to stay at the forefront of development.",
      icon: "BookOpen",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Collaborative Growth",
      description: "The best solutions emerge from diverse perspectives. I thrive in collaborative environments where ideas are shared freely and everyone\'s voice is valued.",
      icon: "Users",
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  const workingStyles = [
    {
      aspect: "Communication",
      approach: "Clear, frequent, and transparent",
      details: "I believe in over-communication rather than under-communication. Regular updates, clear documentation, and open feedback loops."
    },
    {
      aspect: "Problem Solving",
      approach: "Analytical yet creative",
      details: "I break down complex problems into manageable pieces, then explore multiple solutions before choosing the most elegant and maintainable approach."
    },
    {
      aspect: "Code Quality",
      approach: "Test-driven and review-focused",
      details: "I write tests first, conduct thorough code reviews, and believe that quality code is an investment in the project's future success."
    },
    {
      aspect: "Project Management",
      approach: "Agile and adaptive",
      details: "I prefer iterative development with regular feedback cycles, allowing for course corrections and continuous improvement throughout the project lifecycle."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Philosophy Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              My Development Philosophy
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These core principles guide every project I work on and every line of code I write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophies?.map((philosophy, index) => (
              <div
                key={philosophy?.title}
                className="bg-white rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${philosophy?.gradient} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={philosophy?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {philosophy?.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {philosophy?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Working Style Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How I Work
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding my working style helps ensure smooth collaboration and successful project outcomes.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-brand-lg">
            <div className="grid lg:grid-cols-2 gap-8">
              {workingStyles?.map((style, index) => (
                <div
                  key={style?.aspect}
                  className="border-l-4 border-violet-500 pl-6 py-4"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      {style?.aspect}
                    </h3>
                    <span className="text-sm font-medium text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                      {style?.approach}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {style?.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;