import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AchievementStory = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const stories = [
    {
      id: 1,
      title: 'AWS Solutions Architect Journey',
      certification: 'AWS Solutions Architect Professional',
      icon: 'Cloud',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      motivation: `After working on several cloud migration projects, I realized the need to deepen my understanding of AWS architectural patterns. The complexity of designing fault-tolerant, scalable systems required more than just hands-on experience.`,
      challenge: `The exam covers an incredibly broad range of services and scenarios. The most challenging aspect was understanding the nuanced differences between similar services and when to use each one in different architectural contexts.`,
      preparation: `I spent 4 months preparing with a combination of hands-on labs, practice exams, and real-world project implementations. AWS Well-Architected Framework became my bible, and I built several demo applications to test different architectural patterns.`,
      impact: `This certification transformed how I approach system design. I now consider cost optimization, security, and operational excellence from the very beginning of any project. It's helped me lead architecture discussions with confidence and credibility.`,
      resources: [
        'AWS Well-Architected Framework','A Cloud Guru Practice Labs','AWS Documentation Deep Dives','Real-world project implementations'
      ],
      timeline: '4 months intensive study',nextGoal: 'AWS DevOps Engineer Professional'
    },
    {
      id: 2,
      title: 'React Mastery Achievement',
      certification: 'React Developer Certification',icon: 'Code2',color: 'text-purple-600',bgColor: 'bg-purple-50',
      motivation: `As React evolved rapidly with hooks, concurrent features, and new patterns, I wanted to ensure my knowledge was comprehensive and up-to-date. Many developers know React basics, but mastering advanced patterns sets you apart.`,
      challenge: `The certification required deep understanding of React internals, performance optimization techniques, and advanced patterns like render props, higher-order components, and custom hooks. Testing strategies were particularly challenging.`,
      preparation: `I built a comprehensive project showcasing every React pattern, contributed to open-source React projects, and mentored junior developers. Teaching others helped solidify my own understanding of complex concepts.`,
      impact: `This certification validated my React expertise and opened doors to senior frontend roles. I now lead React architecture decisions and have become the go-to person for complex React challenges in my team.`,
      resources: [
        'React Official Documentation','Kent C. Dodds Testing Library','Open Source Contributions','Mentoring Junior Developers'
      ],
      timeline: '3 months focused learning',nextGoal: 'Next.js Expert Certification'
    },
    {
      id: 3,
      title: 'Security Mindset Development',
      certification: 'CompTIA Security+',icon: 'Shield',color: 'text-red-600',bgColor: 'bg-red-50',motivation: `Security breaches in the news made me realize that every developer needs to think like a security professional. Writing secure code isn't optional—it's a fundamental responsibility that requires formal training.`,
      challenge: `Transitioning from a development mindset to a security mindset was challenging. Learning to think like an attacker while building defensive systems required a complete shift in perspective.`,
      preparation: `I set up a home lab with vulnerable applications, practiced penetration testing techniques, and studied real-world security incidents. The hands-on approach helped me understand both offensive and defensive security.`,
      impact: `This certification changed how I write code. I now perform security reviews, implement secure coding practices by default, and can identify vulnerabilities during code reviews. It's made me a more well-rounded developer.`,
      resources: [
        'OWASP Top 10 Deep Study',
        'Vulnerable Application Labs',
        'Security Incident Case Studies',
        'Penetration Testing Practice'
      ],
      timeline: '5 months comprehensive study',
      nextGoal: 'AWS Security Specialty'
    }
  ];

  const currentStory = stories?.[selectedStory];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Achievement Stories</h3>
          <p className="text-sm text-muted-foreground">Personal journeys behind the certifications</p>
        </div>
        <div className="flex items-center space-x-2">
          {stories?.map((story, index) => (
            <Button
              key={story?.id}
              variant={selectedStory === index ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedStory(index)}
              iconName={story?.icon}
              iconPosition="left"
              iconSize={16}
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
            <h4 className="text-lg font-semibold text-foreground">{currentStory?.title}</h4>
            <p className="text-sm text-muted-foreground">{currentStory?.certification}</p>
          </div>
        </div>

        {/* Story Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Target" size={16} className="mr-2 text-primary" />
                Motivation
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{currentStory?.motivation}</p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Zap" size={16} className="mr-2 text-amber-600" />
                Challenge
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{currentStory?.challenge}</p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                <Icon name="BookOpen" size={16} className="mr-2 text-blue-600" />
                Preparation Strategy
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{currentStory?.preparation}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                <Icon name="TrendingUp" size={16} className="mr-2 text-green-600" />
                Impact & Growth
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{currentStory?.impact}</p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Library" size={16} className="mr-2 text-purple-600" />
                Key Resources
              </h5>
              <ul className="space-y-2">
                {currentStory?.resources?.map((resource, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
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
                  <span className="text-sm font-medium text-foreground">Study Timeline</span>
                </div>
                <p className="text-sm text-muted-foreground">{currentStory?.timeline}</p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="ArrowRight" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Next Goal</span>
                </div>
                <p className="text-sm text-muted-foreground">{currentStory?.nextGoal}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedStory(selectedStory > 0 ? selectedStory - 1 : stories?.length - 1)}
            iconName="ChevronLeft"
            iconPosition="left"
            iconSize={16}
          >
            Previous
          </Button>
          
          <div className="flex items-center space-x-2">
            {stories?.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedStory(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  selectedStory === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedStory(selectedStory < stories?.length - 1 ? selectedStory + 1 : 0)}
            iconName="ChevronRight"
            iconPosition="right"
            iconSize={16}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AchievementStory;