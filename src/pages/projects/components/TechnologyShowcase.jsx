import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyShowcase = ({ technologies }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: 'Grid3X3' },
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'database', label: 'Database', icon: 'Database' },
    { id: 'tools', label: 'Tools', icon: 'Settings' }
  ];

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies?.filter(tech => tech?.category === selectedCategory);

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Layers" size={24} className="text-primary" />
        <h3 className="text-xl font-semibold text-black font-worksans">Technology Stack</h3>
      </div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category?.id
                ? 'bg-[#0077FF] text-white shadow-sm'
                : 'bg-white text-[#0077FF] border border-[#0077FF] hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Technology Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
        {filteredTechnologies?.map((tech, index) => (
          <div
            key={index}
            className="group relative bg-[#0077FF] border border-border rounded-lg p-2 text-center hover:border-primary/30 hover:shadow-brand transition-all duration-200 cursor-pointer rounded-xl"
          >
            {/* Technology Icon/Logo */}
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              {tech?.icon ? (
                <Icon name={tech?.icon} size={32} className="text-white group-hover:scale-110 transition-transform duration-200" />
              ) : (
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {tech?.name?.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Technology Name */}
            <h4 className="text-sm font-medium text-white mb-1 font-worksans">
              {tech?.name}
            </h4>

            {/* Experience Level */}
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)]?.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i < tech?.level ? 'bg-white' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            {/* Project Count */}
            <div className="text-xs text-white font-worksans">
              {tech?.projectCount} project{tech?.projectCount !== 1 ? 's' : ''}
            </div>

            {/* Hover Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              {tech?.description}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
            </div>
          </div>
        ))}
      </div>
      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-primary">
              {technologies?.filter(t => t?.category === 'frontend')?.length}
            </div>
            <div className="text-sm text-muted-foreground">Frontend</div>
          </div>
          <div>
            <div className="text-lg font-bold text-secondary">
              {technologies?.filter(t => t?.category === 'backend')?.length}
            </div>
            <div className="text-sm text-muted-foreground">Backend</div>
          </div>
          <div>
            <div className="text-lg font-bold text-accent">
              {technologies?.filter(t => t?.category === 'database')?.length}
            </div>
            <div className="text-sm text-muted-foreground">Database</div>
          </div>
          <div>
            <div className="text-lg font-bold text-warning">
              {technologies?.filter(t => t?.category === 'tools')?.length}
            </div>
            <div className="text-sm text-muted-foreground">Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyShowcase;