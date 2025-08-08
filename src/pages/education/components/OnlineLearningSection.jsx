import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OnlineLearningSection = ({ courses }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Courses', icon: 'BookOpen' },
    { id: 'frontend', name: 'Frontend', icon: 'Monitor' },
    { id: 'backend', name: 'Backend', icon: 'Server' },
    { id: 'fullstack', name: 'Full Stack', icon: 'Layers' },
    { id: 'devops', name: 'DevOps', icon: 'Settings' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses?.filter(course => course?.category === selectedCategory);

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Online Learning Journey</h3>
        <div className="text-sm text-muted-foreground">
          {courses?.length} courses completed
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category?.id
                ? 'bg-primary text-white shadow-sm'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.name}</span>
          </button>
        ))}
      </div>
      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCourses?.map((course, index) => (
          <div 
            key={course?.id}
            className="border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">
                  {course?.title}
                </h4>
                <p className="text-sm text-primary font-medium mb-2">
                  {course?.platform}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{course?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>{course?.completedDate}</span>
                  </div>
                </div>
              </div>
              
              {/* Certificate Badge */}
              {course?.hasCertificate && (
                <div className="flex-shrink-0 ml-3">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={16} className="text-success" />
                  </div>
                </div>
              )}
            </div>

            {/* Skills Learned */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {course?.skills?.slice(0, 3)?.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
                {course?.skills?.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                    +{course?.skills?.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span>Progress</span>
                <span>{course?.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${course?.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-warning" />
                  <span className="text-sm text-muted-foreground">{course?.rating}</span>
                </div>
              </div>
              
              {course?.hasCertificate && (
                <Button variant="outline" size="xs">
                  <Icon name="ExternalLink" size={12} className="mr-1" />
                  View Certificate
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      {filteredCourses?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="BookOpen" size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No courses found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default OnlineLearningSection;