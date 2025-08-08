import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-surface">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay with Quick Actions */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {project?.liveDemo && (
            <Button
              variant="secondary"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              className="bg-white/90 text-foreground hover:bg-white"
            >
              Live Demo
            </Button>
          )}
          {project?.github && (
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Code
            </Button>
          )}
        </div>

        {/* Status Badge */}
        {project?.status && (
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              project?.status === 'completed' 
                ? 'bg-success/20 text-success border border-success/30' 
                : project?.status === 'in-progress' ?'bg-warning/20 text-warning border border-warning/30' :'bg-primary/20 text-primary border border-primary/30'
            }`}>
              {project?.status === 'completed' ? 'Completed' : 
               project?.status === 'in-progress' ? 'In Progress' : 'Planning'}
            </span>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
              {project?.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project?.description}
            </p>
          </div>
          {project?.featured && (
            <div className="ml-3">
              <Icon name="Star" size={16} className="text-warning fill-warning" />
            </div>
          )}
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            {project?.github && (
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={14} />
                <span>{project?.stars || 0}</span>
              </div>
            )}
            {project?.duration && (
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>{project?.duration}</span>
              </div>
            )}
          </div>
          <div className="text-xs">
            {project?.year}
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          className="group-hover:border-primary group-hover:text-primary transition-colors duration-200"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;