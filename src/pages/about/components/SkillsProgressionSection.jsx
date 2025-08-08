import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsProgressionSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      skills: [
        { name: "React/Next.js", level: 95, years: "4+ years", description: "Advanced component architecture, hooks, performance optimization" },
        { name: "TypeScript", level: 90, years: "3+ years", description: "Type-safe development, complex type definitions, generic programming" },
        { name: "Tailwind CSS", level: 88, years: "3+ years", description: "Utility-first styling, custom design systems, responsive design" },
        { name: "JavaScript ES6+", level: 92, years: "5+ years", description: "Modern JS features, async programming, functional programming" },
        { name: "HTML5/CSS3", level: 95, years: "5+ years", description: "Semantic markup, CSS Grid/Flexbox, animations, accessibility" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 85, years: "3+ years", description: "RESTful APIs, middleware, authentication, real-time applications" },
        { name: "Python", level: 80, years: "2+ years", description: "Django, Flask, data processing, automation scripts" },
        { name: "PostgreSQL", level: 82, years: "3+ years", description: "Database design, complex queries, performance optimization" },
        { name: "MongoDB", level: 78, years: "2+ years", description: "Document databases, aggregation pipelines, indexing strategies" },
        { name: "GraphQL", level: 75, years: "2+ years", description: "Schema design, resolvers, query optimization, Apollo Server" }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      icon: "Settings",
      skills: [
        { name: "Git/GitHub", level: 90, years: "5+ years", description: "Version control, branching strategies, collaborative workflows" },
        { name: "Docker", level: 80, years: "2+ years", description: "Containerization, multi-stage builds, orchestration basics" },
        { name: "AWS", level: 75, years: "2+ years", description: "EC2, S3, Lambda, RDS, deployment automation" },
        { name: "Jest/Testing", level: 85, years: "3+ years", description: "Unit testing, integration testing, TDD practices" },
        { name: "Webpack/Vite", level: 82, years: "3+ years", description: "Build optimization, code splitting, development tooling" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Skills Progression Timeline
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My technical expertise has grown through hands-on experience, continuous learning, and real-world project challenges.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => {
            const categoryData = skillCategories?.[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon name={categoryData?.icon} size={18} />
                <span>{categoryData?.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="bg-gradient-to-br from-slate-50 to-violet-50 rounded-3xl p-8 lg:p-12">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="gradient-primary p-3 rounded-xl text-white">
                <Icon name={skillCategories?.[activeCategory]?.icon} size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {skillCategories?.[activeCategory]?.title}
              </h3>
            </div>
          </div>

          <div className="grid gap-6">
            {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
              <div
                key={skill?.name}
                className="bg-white rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-2 lg:mb-0">
                    <h4 className="text-lg font-bold text-slate-900">{skill?.name}</h4>
                    <span className="text-sm font-medium text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                      {skill?.years}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold gradient-text">{skill?.level}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill?.level}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {skill?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-brand max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="TrendingUp" size={24} className="text-violet-600" />
              <h3 className="text-xl font-bold text-slate-900">Continuous Growth Mindset</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              These percentages represent my current proficiency, but I believe in continuous improvement. 
              Every project teaches me something new, and I'm always exploring emerging technologies and best practices. The goal isn't perfection—it's progress and the ability to solve real problems effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProgressionSection;