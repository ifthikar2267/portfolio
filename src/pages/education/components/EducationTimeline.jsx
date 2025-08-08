import React from 'react';
import Icon from '../../../components/AppIcon';

const EducationTimeline = ({ educationData }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
      <div className="space-y-12">
        {educationData?.map((item, index) => (
          <div key={item?.id} className="relative flex items-start space-x-6">
            {/* Timeline Node */}
            <div className="relative z-10 flex-shrink-0">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-brand-lg ${
                item?.type === 'degree' ? 'gradient-primary' :
                item?.type === 'bootcamp' ? 'bg-secondary' :
                item?.type === 'certification'? 'bg-accent' : 'bg-warning'
              }`}>
                <Icon 
                  name={
                    item?.type === 'degree' ? 'GraduationCap' :
                    item?.type === 'bootcamp' ? 'Code2' :
                    item?.type === 'certification'? 'Award' : 'BookOpen'
                  } 
                  size={24} 
                  color="white" 
                />
              </div>
              
              {/* Achievement Badge */}
              {item?.isCompleted && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} color="white" strokeWidth={3} />
                </div>
              )}
            </div>

            {/* Content Card */}
            <div className="flex-1 min-w-0">
              <div className="bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 animate-fade-in">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {item?.title}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {item?.institution}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{item?.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} />
                        <span>{item?.location}</span>
                      </div>
                      {item?.gpa && (
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} />
                          <span>GPA: {item?.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item?.status === 'completed' ? 'bg-success/10 text-success' :
                    item?.status === 'in-progress'? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                  }`}>
                    {item?.status === 'completed' ? 'Completed' :
                     item?.status === 'in-progress'? 'In Progress' : 'Planned'}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item?.description}
                </p>

                {/* Key Learnings */}
                {item?.keyLearnings && item?.keyLearnings?.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                      <Icon name="Lightbulb" size={16} className="mr-2" />
                      Key Learnings
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item?.keyLearnings?.map((learning, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {learning}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {item?.projects && item?.projects?.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                      <Icon name="FolderOpen" size={16} className="mr-2" />
                      Notable Projects
                    </h4>
                    <div className="space-y-2">
                      {item?.projects?.map((project, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Icon name="ArrowRight" size={14} className="mt-0.5 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {item?.achievements && item?.achievements?.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                      <Icon name="Trophy" size={16} className="mr-2" />
                      Achievements
                    </h4>
                    <div className="space-y-1">
                      {item?.achievements?.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="Medal" size={14} className="text-accent" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;