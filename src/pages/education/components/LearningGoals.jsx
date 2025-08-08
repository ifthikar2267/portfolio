import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningGoals = ({ goals }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Learning Goals & Roadmap</h3>
        <div className="text-sm text-muted-foreground">
          {new Date()?.getFullYear()} - {new Date()?.getFullYear() + 1}
        </div>
      </div>
      <div className="space-y-4">
        {goals?.map((goal, index) => (
          <div 
            key={goal?.id}
            className="border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start space-x-4">
              {/* Priority Indicator */}
              <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                goal?.priority === 'high' ? 'bg-error' :
                goal?.priority === 'medium'? 'bg-warning' : 'bg-accent'
              }`}></div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">
                    {goal?.title}
                  </h4>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    goal?.status === 'completed' ? 'bg-success/10 text-success' :
                    goal?.status === 'in-progress'? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                  }`}>
                    {goal?.status === 'completed' ? 'Completed' :
                     goal?.status === 'in-progress'? 'In Progress' : 'Planned'}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {goal?.description}
                </p>
                
                {/* Timeline */}
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>Target: {goal?.targetDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>Est. {goal?.estimatedHours}h</span>
                  </div>
                </div>
                
                {/* Progress */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{goal?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        goal?.status === 'completed' ? 'bg-success' :
                        goal?.status === 'in-progress'? 'bg-warning' : 'bg-muted-foreground'
                      }`}
                      style={{ width: `${goal?.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Resources */}
                {goal?.resources && goal?.resources?.length > 0 && (
                  <div>
                    <h5 className="text-xs font-semibold text-foreground mb-2">Resources:</h5>
                    <div className="flex flex-wrap gap-2">
                      {goal?.resources?.map((resource, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded flex items-center space-x-1"
                        >
                          <Icon name="ExternalLink" size={10} />
                          <span>{resource}</span>
                        </span>
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

export default LearningGoals;