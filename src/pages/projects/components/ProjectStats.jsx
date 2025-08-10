import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: stats?.totalProjects,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20'
    },
    {
      icon: 'Code2',
      label: 'Lines of Code',
      value: stats?.linesOfCode,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20'
    },
    {
      icon: 'Star',
      label: 'GitHub Stars',
      value: stats?.githubStars,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20'
    },
    {
      icon: 'Users',
      label: 'Active Users',
      value: stats?.activeUsers,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems?.map((stat, index) => (
        <div
          key={index}
          className={`bg-card border ${stat?.borderColor} rounded-xl p-1 text-center shadow-lg hover:shadow-brand transition-shadow duration-200`}
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 ${stat?.bgColor} rounded-lg mb-3`}>
            <Icon name={stat?.icon} size={24} className={stat?.color} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">
            {stat?.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;