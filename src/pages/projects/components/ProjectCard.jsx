import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const liveUrl = project?.liveUrl || project?.liveDemo;
  const githubUrl = project?.githubUrl || project?.github;
  const galleryImages = project?.galleryImages || [];

  return (
    <div 
      className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-70 overflow-hidden bg-surface">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <Image
              src={project?.image}
              alt={project?.imageAlt || project?.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        ) : (
          <Image
            src={project?.image}
            alt={project?.imageAlt || project?.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        
        {/* Overlay with Quick Actions */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="sm"
                iconName="ExternalLink"
                iconPosition="right"
                className="bg-white/90 text-foreground hover:bg-white rounded-full"
              >
                Live Demo
              </Button>
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Button
                variant="outline"
                size="sm"
                iconName="Github"
                className="border-white/30 text-white hover:bg-white/10 rounded-full"
              >
                Code
              </Button>
            </a>
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

      {galleryImages.length > 0 && (
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 mb-4 pt-4 px-4 border-t border-border">
          {galleryImages.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden">
              {liveUrl ? (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={img}
                    alt={`${project?.imageAlt || project?.title} screenshot ${index + 1}`}
                    className="w-full h-50 object-cover"
                  />
                </a>
              ) : (
                <Image
                  src={img}
                  alt={`${project?.imageAlt || project?.title} screenshot ${index + 1}`}
                  className="w-full h-50 object-cover"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-black font-worksans mb-1 group-hover:text-primary transition-colors duration-200">
              {project?.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 font-worksans">
              {project?.shortDescription || project?.description}
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-xl font-worksans"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-xl">
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            {project?.duration && (
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>{project?.duration}</span>
              </div>
            )}
            {project?.category && (
              <div className="flex items-center space-x-1">
                <Icon name="Tag" size={14} />
                <span className="text-xs">{project?.category}</span>
              </div>
            )}
          </div>
          <div className="text-xs">
            {project?.year}
          </div>
        </div>

        {/* Action Button */}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Button
              variant="outline"
              size="sm"
              fullWidth
              iconName="ExternalLink"
              iconPosition="right"
              className="text-white bg-[#0077FF] group-hover:border-[#0077FF] group-hover:text-[#0077FF] group-hover:bg-white transition-colors duration-200 rounded-full"
            >
              Visit Live Site
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
