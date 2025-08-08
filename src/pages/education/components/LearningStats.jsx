import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat, index) => (
        <div 
          key={index}
          className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-brand-lg transition-all duration-300 animate-fade-in group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${stat?.bgColor} group-hover:scale-110 transition-transform duration-300`}>
            <Icon name={stat?.icon} size={24} color="white" />
          </div>
          
          <div className="mb-2">
            <div className="text-3xl font-bold text-foreground mb-1">
              {stat?.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat?.label}
            </div>
          </div>
          
          {stat?.description && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {stat?.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningStats;