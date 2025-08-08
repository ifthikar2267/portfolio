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
      name: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      description: 'Advanced certification for designing distributed applications and systems on AWS platform with focus on scalability, security, and cost optimization.',
      level: 'Professional',
      status: 'Active',
      category: 'Cloud',
      earnedDate: '2024-03-15',
      expiryDate: '2027-03-15',
      credentialId: 'AWS-SAP-2024-001',
      verificationUrl: 'https://aws.amazon.com/verification/AWS-SAP-2024-001',
      badgeUrl: 'https://credly.com/badges/aws-sap-badge',
      icon: 'Cloud',
      skills: ['AWS Architecture', 'System Design', 'Cost Optimization', 'Security']
    },
    {
      id: 2,
      name: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      description: 'Comprehensive certification covering advanced React patterns, hooks, performance optimization, and modern development practices.',
      level: 'Expert',
      status: 'Active',
      category: 'Frontend',
      earnedDate: '2024-01-20',
      expiryDate: '2026-01-20',
      credentialId: 'META-REACT-2024-007',
      verificationUrl: 'https://developers.facebook.com/certification/META-REACT-2024-007',
      badgeUrl: 'https://credly.com/badges/react-expert-badge',
      icon: 'Code2',
      skills: ['React', 'Hooks', 'Performance', 'Testing']
    },
    {
      id: 3,
      name: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      description: 'Professional certification for building scalable server-side applications using Node.js, Express, and related technologies.',
      level: 'Professional',
      status: 'Active',
      category: 'Backend',
      earnedDate: '2024-04-10',
      expiryDate: '2026-04-10',
      credentialId: 'NODEJS-DEV-2024-012',
      verificationUrl: 'https://openjsf.org/certification/NODEJS-DEV-2024-012',
      badgeUrl: 'https://credly.com/badges/nodejs-developer-badge',
      icon: 'Server',
      skills: ['Node.js', 'Express', 'API Design', 'Microservices']
    },
    {
      id: 4,
      name: 'MongoDB Developer Associate',
      issuer: 'MongoDB Inc.',
      description: 'Certification demonstrating proficiency in MongoDB database design, querying, indexing, and application development.',
      level: 'Associate',
      status: 'Renewal Due',
      category: 'Database',
      earnedDate: '2023-06-15',
      expiryDate: '2024-06-15',
      credentialId: 'MONGO-DEV-2023-089',
      verificationUrl: 'https://university.mongodb.com/certification/MONGO-DEV-2023-089',
      badgeUrl: 'https://credly.com/badges/mongodb-developer-badge',
      icon: 'Database',
      skills: ['MongoDB', 'Aggregation', 'Indexing', 'Schema Design']
    },
    {
      id: 5,
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      description: 'Foundational cybersecurity certification covering network security, compliance, operational security, and threats.',
      level: 'Foundational',
      status: 'Active',
      category: 'Security',
      earnedDate: '2024-02-28',
      expiryDate: '2027-02-28',
      credentialId: 'COMPTIA-SEC-2024-156',
      verificationUrl: 'https://comptia.org/certifications/security/verify/COMPTIA-SEC-2024-156',
      badgeUrl: 'https://credly.com/badges/security-plus-badge',
      icon: 'Shield',
      skills: ['Network Security', 'Risk Management', 'Cryptography', 'Compliance']
    },
    {
      id: 6,
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      description: 'Professional-level certification for designing, building, and deploying applications on Google Cloud Platform.',
      level: 'Professional',
      status: 'Active',
      category: 'Cloud',
      earnedDate: '2023-11-20',
      expiryDate: '2025-11-20',
      credentialId: 'GCP-DEV-2023-234',
      verificationUrl: 'https://cloud.google.com/certification/verify/GCP-DEV-2023-234',
      badgeUrl: 'https://credly.com/badges/gcp-developer-badge',
      icon: 'CloudCog',
      skills: ['GCP Services', 'Kubernetes', 'CI/CD', 'Monitoring']
    },
    {
      id: 7,
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      description: 'Hands-on certification for Kubernetes cluster administration, troubleshooting, and application lifecycle management.',
      level: 'Professional',
      status: 'Active',
      category: 'DevOps',
      earnedDate: '2024-05-12',
      expiryDate: '2027-05-12',
      credentialId: 'CKA-2024-445',
      verificationUrl: 'https://cncf.io/certification/verify/CKA-2024-445',
      badgeUrl: 'https://credly.com/badges/cka-badge',
      icon: 'Settings',
      skills: ['Kubernetes', 'Container Orchestration', 'Cluster Management', 'Troubleshooting']
    },
    {
      id: 8,
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      description: 'Certification validating skills in containerization, Docker fundamentals, and container orchestration basics.',
      level: 'Associate',
      status: 'Expired',
      category: 'DevOps',
      earnedDate: '2022-08-15',
      expiryDate: '2024-08-15',
      credentialId: 'DOCKER-CERT-2022-678',
      verificationUrl: 'https://docker.com/certification/verify/DOCKER-CERT-2022-678',
      badgeUrl: 'https://credly.com/badges/docker-associate-badge',
      icon: 'Container',
      skills: ['Docker', 'Containerization', 'Image Management', 'Networking']
    }
  ];

  // Filter options
  const categories = ['All', 'Cloud', 'Frontend', 'Backend', 'Database', 'Security', 'DevOps'];
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
        <title>Professional Certifications | DevPortfolio Pro</title>
        <meta name="description" content="Comprehensive display of professional certifications, technical credentials, and continuous learning achievements in cloud computing, web development, and cybersecurity." />
        <meta name="keywords" content="certifications, AWS, React, Node.js, MongoDB, security, professional development, technical credentials" />
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
              Industry-recognized credentials validating expertise in cloud computing, full-stack development, 
              and cybersecurity. Each certification represents a commitment to excellence and continuous learning.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span>8 Active Certifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} className="text-blue-600" />
                <span>3 Earned This Year</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-purple-600" />
                <span>2 Expert Level</span>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Learning Roadmaps</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic certification paths designed to build comprehensive expertise in key technology areas
              </p>
            </div>
            <CertificationRoadmap />
          </div>
        </section>

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
        <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary">
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
        </section>
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
                <span className="text-lg font-bold gradient-text">DevPortfolio Pro</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Professional certifications validate expertise and demonstrate commitment to continuous learning 
                in the ever-evolving technology landscape.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Twitter" size={20} />
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
                <li><span className="text-muted-foreground">AWS Solutions Architect</span></li>
                <li><span className="text-muted-foreground">React Developer</span></li>
                <li><span className="text-muted-foreground">Node.js Professional</span></li>
                <li><span className="text-muted-foreground">Security+ Certified</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © {new Date()?.getFullYear()} DevPortfolio Pro. All rights reserved.
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