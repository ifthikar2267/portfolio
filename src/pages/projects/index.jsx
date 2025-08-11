import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilters from './components/ProjectFilters';
//import FeaturedProject from './components/FeaturedProject';
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
      title: "AI Powered E-Commerce Platform",
      description: "SkinSaviour is an AI-powered e-commerce platform specializing in homemade, toxin-free, vegan, and cruelty-free skincare products. Built with the MERN stack, it features personalized product recommendations, a chatbot for skincare advice, secure payments, real-time inventory tracking, and an intuitive admin dashboard for product and order management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "AI", "Razorpay"],
      type: "web-app",
      status: "completed",
      featured: true,
      liveDemo: "https://skinsaviour-store.web.app/",
      github: "https://github.com/ifthikar2267",
      duration: "6 months",
      year: 2025,
      features: [
        "AI-powered skincare recommendations",
        "Personalized product suggestions based on skin type",
        "Toxin-free, vegan, and cruelty-free products",
        "Secure checkout with multiple payment options",
        "Customer reviews & ratings for every product",
        "Mobile-friendly and fast-loading design"
      ],
      metrics: {
        users: "1K+",
        performance: "98%",
        uptime: "99.9%"
      }
    }
  ];

  // Mock data for technologies
  const technologies = [
    { name: "React", category: "frontend", level: 5, icon: "Code2", description: "Modern UI library for building interactive interfaces" },
     { name: "HTML5", category: "frontend", level: 5, icon: "FileCode", description: "Markup language for structuring and presenting content on the web" },
     { name: "CSS3", category: "frontend", level: 5, icon: "Palette", description: "Style sheet language used to design and enhance the visual presentation of web pages" },
    { name: "Node.js", category: "backend", level: 5, icon: "Server", description: "JavaScript runtime for server-side development" },
    { name: "MongoDB", category: "database", level: 4, icon: "Database", description: "NoSQL document database" },
    { name: "Express", category: "backend", level: 4, icon: "Server", description: "Fast, unopinionated web framework for Node.js" },
    { name: "Git", category: "tools", level: 4, icon: "GitBranch", description: "Distributed version control system for tracking changes in source code" },
    { name: "GitHub", category: "tools", level: 4, icon: "Github", description: "Cloud-based platform for hosting and collaborating on Git repositories" },
    { name: "Visual Studio Code", category: "tools", level: 5, icon: "Code", description: "Lightweight yet powerful source code editor with extensions and debugging tools" },
    { name: "MySQL", category: "database", level: 4, icon: "Database", description: "Open-source relational database management system for structured data storage" }


  ];

  // Mock stats
  const stats = {
    totalProjects: projects?.length,
    linesOfCode: "10K+",
    githubStars: projects?.reduce((sum, project) => sum + (project?.stars || 10), 0),
    activeUsers: "1K+"
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

  const handleDownload = () => {
    const fileUrl =
      "/assets/images/Ifthikar - Full Stack Developer Resume.pdf";

    // Create a hidden link and trigger click
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Ifthikar_Resume.pdf"); // This suggests a filename
    document.body.appendChild(link);
    link.click();
    link.remove();
  };


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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Explore my portfolio of full-stack development projects, featuring modern web applications, APIs, and mobile solutions built with cutting-edge technologies." />
        <meta name="keywords" content="portfolio, projects, web development, full-stack, React, Node.js, mobile apps" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-5 lg:py-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-[#0077FF] rounded-xl flex items-center justify-center">
                  <Icon name="FolderOpen" size={24} color="white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold font-worksans">
                  <span className="text-black">My Projects</span>
                </h1>
              </div>
              
              <p className="text-lg text-muted-foreground  max-w-lg lg:max-w-6xl mx-auto leading-relaxed font-worksans text-justify break-normal">
                Explore my portfolio of full-stack development projects, featuring modern web applications, 
                APIs, and mobile solutions built with cutting-edge technologies and best practices.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                 <a 
                    href="https://github.com/ifthikar2267" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                  className="bg-[#0077FF] text-white hover:bg-white hover:text-[#0077FF] border border-[#0077FF] rounded-full font-worksans"
                >
                  View GitHub Profile
                </Button>
                </a>
                <Button
                  variant="outline"
                  className='bg-white text-[#0077FF] hover:bg-[#0077FF] hover:text-white border border-[#0077FF] rounded-full font-worksansfont-worksans'
                  onClick={handleDownload}
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
        {/* {featuredProject && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeaturedProject project={featuredProject} />
            </div>
          </section>
        )} */}

        {/* Technology Showcase */}
        <section className="py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TechnologyShowcase technologies={technologies} />
          </div>
        </section>

        {/* Projects Grid */}
        <section>
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
              <div className="grid md:grid-cols-2 mb-5 xl:grid-cols-1 gap-8">
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
        {/* <section className="py-16 lg:py-24">
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
        </section> */}
      </main>
      {/* Footer */}
      <footer className="bg-[#0077FF] border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={20} color="black" />
              </div>
              <span className="text-lg font-bold text-white font-worksans">Ifthikar Portfolio</span>
            </div>
            <div className="text-sm text-white font-worksans">
              © {new Date()?.getFullYear()} Ifthikar. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;