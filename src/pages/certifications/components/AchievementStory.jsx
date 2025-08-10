import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AchievementStory = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const stories = [
    {
        id: 1,
        title: 'MERN Stack Development Journey',
        certification: 'MERN Full Stack Developer',
        icon: 'Code',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        motivation: `While building my Skin Saviour e-commerce project, I realized I needed an end-to-end skill set to handle both frontend and backend seamlessly. I wanted the ability to design, develop, and deploy a complete application without depending on multiple tech stacks.`,
        challenge: `The most challenging aspect was mastering how each MERN component interacts — React for dynamic UI, Node.js and Express for API handling, and MongoDB for flexible data modeling — and ensuring smooth communication between them.`,
        preparation: `Over 3 months, I followed a structured learning plan combining Udemy courses, official documentation, and practical projects. I built multiple applications, including a product recommendation system with AI integration, to reinforce my understanding.`,
        impact: `This journey completely changed how I approach web development. I can now take an idea from concept to deployment independently, optimize performance, and integrate advanced features like authentication, payment gateways, and AI-based recommendations.`,
        resources: [
          'Udemy MERN Full Stack Bootcamp',
          'MongoDB & Express Documentation',
          'React.js Official Docs',
          'Node.js Crash Courses',
          'Real-world MERN Projects'
        ],
        timeline: '3 months focused learning and project building',
        nextGoal: 'Master Next.js for server-side rendering and advanced performance optimization'
      },

      {
      id: 3,
      title: 'MongoDB Mastery Achievement',
      certification: 'MongoDB Developer Certification',
      icon: 'Database',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      motivation: `Working on multiple MERN stack projects made me realize how crucial a deep understanding of MongoDB is for designing scalable and efficient data models. I wanted to move beyond basic CRUD and master indexing, aggregation, and performance optimization.`,
      challenge: `The certification required mastery over MongoDB schema design, complex aggregation pipelines, indexing strategies, replication, and sharding. Understanding how to optimize queries for large datasets while ensuring data integrity was particularly challenging.`,
      preparation: `I dedicated 3 months to hands-on practice, building real-world database architectures for e-commerce, analytics, and AI-based recommendation systems. I explored advanced aggregation stages, experimented with replica sets, and simulated sharded cluster environments.`,
      impact: `This achievement significantly improved how I approach backend design. I now create MongoDB schemas that are optimized for both performance and scalability, making my applications faster and more reliable.`,
      resources: [
        'MongoDB University Courses',
        'MongoDB Documentation',
        'MERN Stack Real-world Projects',
        'Performance Tuning Guides',
        'Hands-on Practice with Aggregation Pipelines'
      ],
      timeline: '3 months focused learning',
      nextGoal: 'Build a full-stack project integrating MySQL with Node.js and React'
    }
  ];

  const currentStory = stories?.[selectedStory];

  return (
    <div className="bg-card shadow-brand border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-black mb-2">Achievement Stories</h3>
          {/* <p className="text-sm text-muted-foreground">Personal journeys behind the certifications</p> */}
        </div>
        <div className="flex flex-wrap items-center gap-2">

          {stories?.map((story, index) => (
            <Button
  key={story?.id}
  variant="default" // keep this static, we'll control colors via className
  size="sm"
  onClick={() => setSelectedStory(index)}
  iconName={story?.icon}
  iconPosition="left"
  iconSize={16}
  className={`rounded-full
    ${selectedStory === index 
      ? 'bg-[#0077FF] text-white border border-[#0077FF]' 
      : 'bg-white text-[#0077FF] border border-[#0077FF] hover:bg-[#0077FF] hover:text-white'
    }`}
>
  {story?.title?.split(' ')?.[0]}
</Button>

          ))}
        </div>
      </div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-xl ${currentStory?.bgColor} flex items-center justify-center`}>
            <Icon name={currentStory?.icon} size={24} className={currentStory?.color} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black font-worksans">{currentStory?.title}</h4>
            <p className="text-sm text-muted-foreground font-worksans">{currentStory?.certification}</p>
          </div>
        </div>

        {/* Story Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h5 className="text-sm font-semibold text-black font-worksans mb-3 flex items-center">
                <Icon name="Target" size={16} className="mr-2 text-primary" />
                Motivation
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed font-worksans">{currentStory?.motivation}</p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-black font-worksans mb-3 flex items-center">
                <Icon name="Zap" size={16} className="mr-2 text-amber-600" />
                Challenge
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed font-worksans">{currentStory?.challenge}</p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-black font-worksans mb-3 flex items-center">
                <Icon name="BookOpen" size={16} className="mr-2 text-blue-600" />
                Preparation Strategy
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed font-worksans">{currentStory?.preparation}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h5 className="text-sm font-semibold text-black font-worksans mb-3 flex items-center">
                <Icon name="TrendingUp" size={16} className="mr-2 text-green-600" />
                Impact & Growth
              </h5>
              <p className="text-sm text-muted-foreground font-worksans leading-relaxed">{currentStory?.impact}</p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-black font-worksans mb-3 flex items-center">
                <Icon name="Library" size={16} className="mr-2 text-purple-600" />
                Key Resources
              </h5>
              <ul className="space-y-2">
                {currentStory?.resources?.map((resource, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground font-worksans">
                    <Icon name="CheckCircle" size={14} className="mr-2 text-green-600 flex-shrink-0" />
                    {resource}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Clock" size={16} className="text-blue-600" />
                  <span className="text-sm font-medium text-black font-worksans">Study Timeline</span>
                </div>
                <p className="text-sm text-muted-foreground font-worksans">{currentStory?.timeline}</p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="ArrowRight" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-black font-worksans">Next Goal</span>
                </div>
                <p className="text-sm text-muted-foreground font-worksans">{currentStory?.nextGoal}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <Button
            size="sm"
            onClick={() => setSelectedStory(selectedStory > 0 ? selectedStory - 1 : stories?.length - 1)}
            iconName="ChevronLeft"
            iconPosition="left"
            iconSize={16}
            className={`rounded-full transition-colors duration-200
              ${selectedStory === 0
                ? 'bg-[#0077FF] text-white border border-[#0077FF]'
                : 'bg-white text-[#0077FF] border border-[#0077FF] hover:bg-[#0077FF] hover:text-white'
              }`}
          >
            Previous
          </Button>
          
          <div className="flex items-center space-x-2">
            {stories?.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedStory(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  selectedStory === index ? 'bg-[#0077FF] w-6' : 'bg-muted-foreground/30 border'
                }`}
              />
            ))}
          </div>

         <Button
            size="sm"
            onClick={() => setSelectedStory(selectedStory < stories?.length - 1 ? selectedStory + 1 : 0)}
            iconName="ChevronRight"
            iconPosition="right"
            iconSize={16}
            className={`rounded-full transition-colors duration-200
              ${selectedStory === stories?.length - 1
                ? 'bg-[#0077FF] text-white border border-[#0077FF]'
                : 'bg-white text-[#0077FF] border border-[#0077FF] hover:bg-[#0077FF] hover:text-white'
              }`}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AchievementStory;