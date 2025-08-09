import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import CertificationCard from './components/CertificationCard';
import CertificationStats from './components/CertificationStats';
import CertificationFilters from './components/CertificationFilters';
import CertificationRoadmap from './components/CertificationRoadmap';
import AchievementStory from './components/AchievementStory';

const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock certifications data
  const certifications = [
    {
      id: 1,
      name: 'The MERN Fullstack',
      issuer: 'udemy',
      description: 'A certification course on Udemy covering full-stack web development using MongoDB, Express.js, React, and Node.js (MERN stack).',
      category: 'Fullstack',
      earnedDate: '2024-03-11',
      verificationUrl: 'https://www.udemy.com/certificate/UC-20a64cb5-be20-4132-bab2-a465ba040255/',
      icon: 'Code2',
      skills: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      id: 2,
      name: 'MongoDB',
      issuer: 'Great Learning',
      description: 'A certification course from Great Learning covering MongoDB developer fundamentals and practical applications.',
      category: 'Database',
      earnedDate: '2024-12-10',
      verificationUrl: 'https://drive.google.com/file/d/1PPnPhO4xSAt8V-GBsoKrMnMJzny3rgDT/view?usp=drivesdk',
      icon: 'Database',
      skills: ['MongoDB']
    },
    {
      id: 3,
      name: 'Blockchain',
      issuer: 'Kerala Blockchain Academy',
      description: 'Gained hands-on knowledge of blockchain fundamentals, consensus algorithms, smart contracts, and industry applications through practical learning and projects.',
      category: 'Backend',
      earnedDate: '2024-10-05',
      verificationUrl: 'https://drive.google.com/file/d/1P-Md0xy8LlDMdrCfF0zFPkg29A100Ro-/view?usp=drivesdk',
      icon: 'Server'
    },
    {
      id: 4,
      name: 'Python',
      issuer: 'Guvi',
      description: 'A certification course from Guvi covering Python programming fundamentals and practical applications.',
      category: 'Server',
      earnedDate: '2023-08-15',
      verificationUrl: 'https://drive.google.com/file/d/1P1Wnq2JW4gt8ZQi_sK6EGSnFZgFnvbY-/view?usp=drivesdk',
      icon: 'Code2',
      skills: ['Python']
    },
    {
      id: 5,
      name: 'Oracle Cloud',
      issuer: 'Oracle',
      description: 'An Oracle certification validating foundational knowledge of databases, SQL, and Oracle Cloud concepts.',
      category: 'Cloud',
      earnedDate: '2024-03-28',
      verificationUrl: 'https://drive.google.com/file/d/1PT0X0XoflrdppIB6ydc3eL4yumCv1ITT/view?usp=drivesdk',
      icon: 'Cloud',
      skills: ['Cloud']
    },
    {
      id: 6,
      name: 'AI',
      issuer: 'Guvi',
      description: 'A certification course from Guvi on the fundamentals and applications of Artificial Intelligence.',
      category: 'Backend',
      earnedDate: '2023-18-15',
      verificationUrl: 'https://drive.google.com/file/d/1P1xWi5AT0gcuanWK3630KsuiVZTp5HCv/view?usp=drivesdk',
      icon: 'Brain',
      skills: ['Artificial Intelligence']
    }
  ];

  // Filter options
  const categories = ['All', 'Cloud', 'Frontend', 'Backend', 'Database', 'Fullstack'];
  const levels = ['All', 'Foundational', 'Associate', 'Professional', 'Expert'];
  const statuses = ['All', 'Active', 'Renewal Due', 'Expired'];

  // Filtered certifications
  const filteredCertifications = useMemo(() => {
    return certifications?.filter(cert => {
      const matchesCategory = selectedCategory === 'All' || cert?.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || cert?.level === selectedLevel;
      const matchesStatus = selectedStatus === 'All' || cert?.status === selectedStatus;
      const matchesSearch = searchTerm === '' || 
        cert?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        cert?.issuer?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        cert?.skills?.some(skill => skill?.toLowerCase()?.includes(searchTerm?.toLowerCase()));

      return matchesCategory && matchesLevel && matchesStatus && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, selectedStatus, searchTerm]);

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSelectedStatus('All');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Certifications</title>
        <meta name="description" content="Comprehensive display of professional certifications, technical credentials, and continuous learning achievements in Fullstac development, web development and cloud." />
        <meta name="keywords" content="certifications, Oracle, React, Node.js, MongoDB, professional development, technical credentials" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-5"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                <Icon name="Award" size={32} color="white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional <span className="gradient-text">Certifications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Industry-recognized credentials validating expertise in web development, full-stack development, cloud computing. Each certification represents a commitment to excellence and continuous learning.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span>6 Active Certifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} className="text-blue-600" />
                <span>4 Earned Last Year</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-purple-600" />
                <span>1 Expert Level</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <CertificationStats certifications={certifications} />
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <CertificationFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              levels={levels}
              selectedLevel={selectedLevel}
              onLevelChange={setSelectedLevel}
              statuses={statuses}
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onClearFilters={handleClearFilters}
            />
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {filteredCertifications?.length === certifications?.length 
                    ? 'All Certifications' 
                    : `Filtered Results (${filteredCertifications?.length})`
                  }
                </h2>
                <p className="text-sm text-muted-foreground">
                  Click on verification links to validate credentials with issuing organizations
                </p>
              </div>
              {filteredCertifications?.length !== certifications?.length && (
                <div className="text-sm text-muted-foreground">
                  Showing {filteredCertifications?.length} of {certifications?.length} certifications
                </div>
              )}
            </div>

            {filteredCertifications?.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredCertifications?.map((certification) => (
                  <CertificationCard key={certification?.id} certification={certification} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={24} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No certifications found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms to find relevant certifications.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Certification Roadmap */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Learning Roadmaps</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic certification paths designed to build comprehensive expertise in key technology areas
              </p>
            </div>
            <CertificationRoadmap />
          </div>
        </section> */}

        {/* Achievement Stories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Achievement Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Personal journeys behind each certification, including challenges overcome and lessons learned
              </p>
            </div>
            <AchievementStory />
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with a Certified Professional?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              These certifications represent proven expertise and commitment to excellence. 
              Let's discuss how this knowledge can benefit your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Start a Conversation
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
              >
                <Icon name="FolderOpen" size={20} className="mr-2" />
                View My Work
              </a>
            </div>
          </div>
        </section> */}
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={18} color="white" />
                </div>
                <span className="text-lg font-bold gradient-text">Ifthikar-Portfolio</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Professional certifications validate expertise and demonstrate commitment to continuous learning 
                in the ever-evolving technology landscape.
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/ifthikar2267" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ifthikar-mj-59b8a8250" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="/homepage" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="/education" className="text-muted-foreground hover:text-primary transition-colors">Education</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Certifications</h4>
              <ul className="space-y-2">
                <li><span className="text-muted-foreground">MERN Fullstack Development</span></li>
                <li><span className="text-muted-foreground">MongoDB</span></li>
                <li><span className="text-muted-foreground">Python</span></li>
                <li><span className="text-muted-foreground">Blockchain</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © {new Date()?.getFullYear()} Ifthikar. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CertificationsPage;