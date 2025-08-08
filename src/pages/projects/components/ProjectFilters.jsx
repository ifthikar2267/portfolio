import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilters = ({ 
  activeFilter, 
  onFilterChange, 
  activeSort, 
  onSortChange,
  searchQuery,
  onSearchChange,
  totalProjects,
  filteredCount 
}) => {
  const filterOptions = [
    { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
    { id: 'web-app', label: 'Web Apps', icon: 'Globe' },
    { id: 'api', label: 'APIs', icon: 'Server' },
    { id: 'mobile', label: 'Mobile', icon: 'Smartphone' },
    { id: 'desktop', label: 'Desktop', icon: 'Monitor' }
  ];

  const sortOptions = [
    { id: 'newest', label: 'Newest First', icon: 'ArrowDown' },
    { id: 'oldest', label: 'Oldest First', icon: 'ArrowUp' }
  ];

  const technologyFilters = [
    'React', 'Node.js', 'Python', 'TypeScript', 'Next.js', 
    'Express', 'MongoDB', 'MySQL', 'HTML5', 'Talwind CSS'
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon name="Search" size={18} className="text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder="Search projects by name, technology, or description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Icon name="X" size={18} />
          </button>
        )}
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterOptions?.map((filter) => (
          <Button
            key={filter?.id}
            variant={activeFilter === filter?.id ? 'default' : 'outline'}
            size="sm"
            iconName={filter?.icon}
            iconPosition="left"
            onClick={() => onFilterChange(filter?.id)}
            className={activeFilter === filter?.id ? 'gradient-primary text-white rounded-xl' : 'rounded-xl'}
          >
            {filter?.label}
          </Button>
        ))}
      </div>
      {/* Technology Tags */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Filter by Technology:</h4>
        <div className="flex flex-wrap gap-2">
          {technologyFilters?.map((tech) => (
            <button
              key={tech}
              onClick={() => onSearchChange(tech)}
              className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-200 rounded-xl"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      {/* Sort and Results */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Sort Options */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <div className="flex space-x-1">
            {sortOptions?.map((sort) => (
              <Button
                key={sort?.id}
                variant={activeSort === sort?.id ? 'secondary' : 'ghost'}
                size="sm"
                iconName={sort?.icon}
                iconPosition="left"
                onClick={() => onSortChange(sort?.id)}
                className='rounded-xl'
              >
                {sort?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Filter" size={16} />
          <span>
            Showing {filteredCount} of {totalProjects} projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;