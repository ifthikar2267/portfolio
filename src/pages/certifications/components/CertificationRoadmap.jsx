import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationRoadmap = () => {
  const [selectedPath, setSelectedPath] = useState('cloud');

  const roadmaps = {
    cloud: {
      title: 'Cloud Architecture Path',
      description: 'Journey to becoming a certified cloud solutions architect',
      icon: 'Cloud',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      steps: [
        {
          id: 1,
          title: 'AWS Cloud Practitioner',
          status: 'completed',
          description: 'Foundation level understanding of AWS services',
          timeframe: 'Completed Dec 2023',
          nextStep: 'Build foundational cloud knowledge'
        },
        {
          id: 2,
          title: 'AWS Solutions Architect Associate',
          status: 'completed',
          description: 'Design and deploy scalable systems on AWS',
          timeframe: 'Completed Mar 2024',
          nextStep: 'Advanced architectural patterns'
        },
        {
          id: 3,
          title: 'AWS Solutions Architect Professional',
          status: 'in-progress',
          description: 'Advanced cloud architecture and migration strategies',
          timeframe: 'Target: Sep 2024',
          nextStep: 'Complex multi-tier applications'
        },
        {
          id: 4,
          title: 'AWS DevOps Engineer Professional',
          status: 'planned',
          description: 'Implement and manage continuous delivery systems',
          timeframe: 'Target: Jan 2025',
          nextStep: 'CI/CD and automation mastery'
        }
      ]
    },
    development: {
      title: 'Full-Stack Development Path',
      description: 'Comprehensive web development certification journey',
      icon: 'Code2',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      steps: [
        {
          id: 1,
          title: 'React Developer Certification',
          status: 'completed',
          description: 'Advanced React patterns and best practices',
          timeframe: 'Completed Jan 2024',
          nextStep: 'Component architecture mastery'
        },
        {
          id: 2,
          title: 'Node.js Application Developer',
          status: 'completed',
          description: 'Server-side JavaScript and API development',
          timeframe: 'Completed Apr 2024',
          nextStep: 'Backend system design'
        },
        {
          id: 3,
          title: 'MongoDB Developer Associate',
          status: 'in-progress',
          description: 'NoSQL database design and optimization',
          timeframe: 'Target: Aug 2024',
          nextStep: 'Database performance tuning'
        },
        {
          id: 4,
          title: 'GraphQL Foundation',
          status: 'planned',
          description: 'Modern API design and implementation',
          timeframe: 'Target: Nov 2024',
          nextStep: 'API architecture patterns'
        }
      ]
    },
    security: {
      title: 'Security & Compliance Path',
      description: 'Building expertise in application and cloud security',
      icon: 'Shield',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      steps: [
        {
          id: 1,
          title: 'CompTIA Security+',
          status: 'completed',
          description: 'Foundational cybersecurity principles',
          timeframe: 'Completed Feb 2024',
          nextStep: 'Security fundamentals'
        },
        {
          id: 2,
          title: 'AWS Security Specialty',
          status: 'in-progress',
          description: 'Cloud security architecture and implementation',
          timeframe: 'Target: Oct 2024',
          nextStep: 'Cloud security patterns'
        },
        {
          id: 3,
          title: 'CISSP Associate',
          status: 'planned',
          description: 'Information security management principles',
          timeframe: 'Target: Mar 2025',
          nextStep: 'Security governance'
        },
        {
          id: 4,
          title: 'Certified Ethical Hacker',
          status: 'planned',
          description: 'Penetration testing and vulnerability assessment',
          timeframe: 'Target: Jun 2025',
          nextStep: 'Offensive security skills'
        }
      ]
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return { icon: 'CheckCircle', color: 'text-green-600' };
      case 'in-progress':
        return { icon: 'Clock', color: 'text-blue-600' };
      case 'planned':
        return { icon: 'Circle', color: 'text-gray-400' };
      default:
        return { icon: 'Circle', color: 'text-gray-400' };
    }
  };

  const currentRoadmap = roadmaps?.[selectedPath];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Certification Roadmaps</h3>
          <p className="text-sm text-muted-foreground">Strategic learning paths for professional growth</p>
        </div>
        <div className="flex items-center space-x-2">
          {Object.entries(roadmaps)?.map(([key, roadmap]) => (
            <Button
              key={key}
              variant={selectedPath === key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPath(key)}
              iconName={roadmap?.icon}
              iconPosition="left"
              iconSize={16}
            >
              {roadmap?.title?.split(' ')?.[0]}
            </Button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className={`w-10 h-10 rounded-lg ${currentRoadmap?.bgColor} flex items-center justify-center`}>
            <Icon name={currentRoadmap?.icon} size={20} className={currentRoadmap?.color} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground">{currentRoadmap?.title}</h4>
            <p className="text-sm text-muted-foreground">{currentRoadmap?.description}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {currentRoadmap?.steps?.map((step, index) => {
          const statusInfo = getStatusIcon(step?.status);
          const isLast = index === currentRoadmap?.steps?.length - 1;

          return (
            <div key={step?.id} className="relative">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full border-2 ${
                    step?.status === 'completed' 
                      ? 'bg-green-50 border-green-200' 
                      : step?.status === 'in-progress' ?'bg-blue-50 border-blue-200' :'bg-gray-50 border-gray-200'
                  } flex items-center justify-center`}>
                    <Icon name={statusInfo?.icon} size={16} className={statusInfo?.color} />
                  </div>
                  {!isLast && (
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-border"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0 pb-8">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-base font-medium text-foreground">{step?.title}</h5>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      step?.status === 'completed' 
                        ? 'bg-green-50 text-green-700'
                        : step?.status === 'in-progress' ?'bg-blue-50 text-blue-700' :'bg-gray-50 text-gray-700'
                    }`}>
                      {step?.status?.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{step?.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{step?.timeframe}</span>
                    <span className="italic">{step?.nextStep}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Progress: {currentRoadmap?.steps?.filter(s => s?.status === 'completed')?.length} of {currentRoadmap?.steps?.length} completed
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ 
                  width: `${(currentRoadmap?.steps?.filter(s => s?.status === 'completed')?.length / currentRoadmap?.steps?.length) * 100}%` 
                }}
              ></div>
            </div>
            <span className="text-sm font-medium text-foreground">
              {Math.round((currentRoadmap?.steps?.filter(s => s?.status === 'completed')?.length / currentRoadmap?.steps?.length) * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationRoadmap;