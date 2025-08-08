import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 rounded-2xl overflow-hidden mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative p-8 lg:p-12">
        {/* Featured Badge */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
            <Icon name="Star" size={16} className="fill-primary" />
            <span className="text-sm font-medium">Featured Project</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-success/10 text-success rounded-full border border-success/20">
            <Icon name="TrendingUp" size={16} />
            <span className="text-sm font-medium">Most Popular</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {project?.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project?.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Key Features:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Technology Stack:</h3>
              <div className="flex flex-wrap gap-2">
                {project?.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm font-medium bg-background border border-border rounded-lg text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{project?.metrics?.users}</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{project?.metrics?.performance}</div>
                <div className="text-sm text-muted-foreground">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{project?.metrics?.uptime}</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
                className="gradient-primary text-white hover:opacity-90"
              >
                View Live Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Github"
                iconPosition="left"
              >
                View Source Code
              </Button>
              <Button
                variant="ghost"
                size="lg"
                iconName="FileText"
                iconPosition="left"
              >
                Case Study
              </Button>
            </div>
          </div>

          {/* Project Preview */}
          <div className="relative">
            <div className="relative bg-background border border-border rounded-xl overflow-hidden shadow-brand-lg">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-64 lg:h-80 object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Icon name="Play" size={24} className="text-primary ml-1" />
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-brand-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 text-sm">
                  <Icon name="Star" size={16} className="text-warning fill-warning" />
                  <span className="font-medium text-foreground">{project?.stars}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <Icon name="GitFork" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{project?.forks}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;