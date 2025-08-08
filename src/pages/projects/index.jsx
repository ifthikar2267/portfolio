import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilters from './components/ProjectFilters';
import FeaturedProject from './components/FeaturedProject';
import ProjectStats from './components/ProjectStats';
import TechnologyShowcase from './components/TechnologyShowcase';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSort, setActiveSort] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced inventory management, payment processing, and real-time analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
      type: "web-app",
      status: "completed",
      featured: true,
      liveDemo: "https://demo-ecommerce.com",
      github: "https://github.com/user/ecommerce",
      stars: 245,
      forks: 67,
      duration: "6 months",
      year: 2024,
      features: [
        "Advanced product filtering",
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin analytics dashboard",
        "Mobile-responsive design",
        "SEO optimized"
      ],
      metrics: {
        users: "10K+",
        performance: "98%",
        uptime: "99.9%"
      }
    },
    {
      id: 2,
      title: "Task Management API",
      description: "RESTful API for project management with team collaboration features, real-time notifications, and comprehensive reporting.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800&h=600&fit=crop",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
      type: "api",
      status: "completed",
      featured: false,
      liveDemo: null,
      github: "https://github.com/user/task-api",
      stars: 156,
      forks: 34,
      duration: "3 months",
      year: 2024
    },
    {
      id: 3,
      title: "Weather Mobile App",
      description: "Cross-platform mobile application providing detailed weather forecasts with location-based services and offline capabilities.",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/clouds-1867908_1280.jpg?w=800&h=600&fit=crop",
      technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
      type: "mobile",
      status: "in-progress",
      featured: false,
      liveDemo: null,
      github: "https://github.com/user/weather-app",
      stars: 89,
      forks: 23,
      duration: "4 months",
      year: 2024
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence with real-time data visualization, custom reporting, and export capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      type: "web-app",
      status: "completed",
      featured: false,
      liveDemo: "https://analytics-demo.com",
      github: "https://github.com/user/analytics",
      stars: 198,
      forks: 45,
      duration: "5 months",
      year: 2023
    },
    {
      id: 5,
      title: "Desktop Code Editor",
      description: "Lightweight code editor with syntax highlighting, plugin system, and integrated terminal for multiple programming languages.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?w=800&h=600&fit=crop",
      technologies: ["Electron", "JavaScript", "Monaco Editor", "Node.js"],
      type: "desktop",
      status: "completed",
      featured: false,
      liveDemo: null,
      github: "https://github.com/user/code-editor",
      stars: 312,
      forks: 78,
      duration: "8 months",
      year: 2023
    },
    {
      id: 6,
      title: "Social Media API",
      description: "Scalable social media backend with user authentication, post management, real-time messaging, and content moderation.",
      image: "https://images.pixabay.com/photo/2017/06/23/10/48/network-2432406_1280.jpg?w=800&h=600&fit=crop",
      technologies: ["Node.js", "GraphQL", "MongoDB", "Socket.io", "AWS"],
      type: "api",
      status: "completed",
      featured: false,
      liveDemo: null,
      github: "https://github.com/user/social-api",
      stars: 167,
      forks: 41,
      duration: "7 months",
      year: 2023
    }
  ];

  // Mock data for technologies
  const technologies = [
    { name: "React", category: "frontend", level: 5, projectCount: 8, icon: "Code2", description: "Modern UI library for building interactive interfaces" },
    { name: "Node.js", category: "backend", level: 5, projectCount: 12, icon: "Server", description: "JavaScript runtime for server-side development" },
    { name: "TypeScript", category: "frontend", level: 4, projectCount: 6, icon: "FileCode", description: "Typed superset of JavaScript" },
    { name: "Python", category: "backend", level: 4, projectCount: 5, icon: "Code", description: "Versatile programming language for backend and data science" },
    { name: "MongoDB", category: "database", level: 4, projectCount: 7, icon: "Database", description: "NoSQL document database" },
    { name: "PostgreSQL", category: "database", level: 4, projectCount: 5, icon: "Database", description: "Advanced open-source relational database" },
    { name: "AWS", category: "tools", level: 3, projectCount: 9, icon: "Cloud", description: "Amazon Web Services cloud platform" },
    { name: "Docker", category: "tools", level: 4, projectCount: 8, icon: "Package", description: "Containerization platform" },
    { name: "Next.js", category: "frontend", level: 4, projectCount: 4, icon: "Zap", description: "React framework for production" },
    { name: "Express", category: "backend", level: 5, projectCount: 10, icon: "Server", description: "Fast, unopinionated web framework for Node.js" },
    { name: "GraphQL", category: "backend", level: 3, projectCount: 3, icon: "GitBranch", description: "Query language for APIs" },
    { name: "Redis", category: "database", level: 3, projectCount: 4, icon: "Zap", description: "In-memory data structure store" }
  ];

  // Mock stats
  const stats = {
    totalProjects: projects?.length,
    linesOfCode: "50K+",
    githubStars: projects?.reduce((sum, project) => sum + (project?.stars || 0), 0),
    activeUsers: "25K+"
  };

  // Featured project
  const featuredProject = projects?.find(p => p?.featured);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects?.filter(project => {
      // Filter by type
      if (activeFilter !== 'all' && project?.type !== activeFilter) {
        return false;
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery?.toLowerCase();
        return (project?.title?.toLowerCase()?.includes(query) ||
        project?.description?.toLowerCase()?.includes(query) || project?.technologies?.some(tech => tech?.toLowerCase()?.includes(query)));
      }

      return true;
    });

    // Sort projects
    filtered?.sort((a, b) => {
      switch (activeSort) {
        case 'newest':
          return b?.year - a?.year || b?.id - a?.id;
        case 'oldest':
          return a?.year - b?.year || a?.id - b?.id;
        case 'featured':
          return (b?.featured ? 1 : 0) - (a?.featured ? 1 : 0);
        case 'popular':
          return (b?.stars || 0) - (a?.stars || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeFilter, activeSort, searchQuery]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Projects - DevPortfolio Pro</title>
        <meta name="description" content="Explore my portfolio of full-stack development projects, featuring modern web applications, APIs, and mobile solutions built with cutting-edge technologies." />
        <meta name="keywords" content="portfolio, projects, web development, full-stack, React, Node.js, mobile apps" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                  <Icon name="FolderOpen" size={24} color="white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold">
                  <span className="gradient-text">My Projects</span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore my portfolio of full-stack development projects, featuring modern web applications, 
                APIs, and mobile solutions built with cutting-edge technologies and best practices.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                  className="gradient-primary text-white hover:opacity-90"
                >
                  View GitHub Profile
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Project Stats */}
            <ProjectStats stats={stats} />
          </div>
        </section>

        {/* Featured Project */}
        {featuredProject && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeaturedProject project={featuredProject} />
            </div>
          </section>
        )}

        {/* Technology Showcase */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TechnologyShowcase technologies={technologies} />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <ProjectFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              activeSort={activeSort}
              onSortChange={setActiveSort}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              totalProjects={projects?.length}
              filteredCount={filteredAndSortedProjects?.length}
            />

            {/* Projects Grid */}
            {filteredAndSortedProjects?.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredAndSortedProjects?.map((project) => (
                  <ProjectCard key={project?.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or filters to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life. I'm available for freelance projects, 
                consulting, and full-time opportunities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Mail"
                  iconPosition="left"
                  className="gradient-primary text-white hover:opacity-90"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={18} color="white" />
              </div>
              <span className="text-lg font-bold gradient-text">DevPortfolio Pro</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} DevPortfolio Pro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;