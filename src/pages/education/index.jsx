import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import EducationTimeline from './components/EducationTimeline';
import LearningStats from './components/LearningStats';
import SkillProgressChart from './components/SkillProgressChart';
import OnlineLearningSection from './components/OnlineLearningSection';
import LearningGoals from './components/LearningGoals';

const Education = () => {
  // Mock education data
  const educationData = [
    {
      id: 1,
      type: 'degree',
      title: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      duration: '2018 - 2022',
      location: 'Stanford, CA',
      gpa: '3.8/4.0',
      status: 'completed',
      isCompleted: true,
      description: `Comprehensive computer science program focusing on software engineering, algorithms, and system design. Gained strong foundation in programming languages, data structures, and software development methodologies.`,
      keyLearnings: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Computer Networks', 'Machine Learning', 'Web Development'],
      projects: [
        'E-commerce Platform - Full-stack web application using React and Node.js',
        'Machine Learning Classifier - Python-based image recognition system',
        'Distributed Chat System - Real-time messaging application with WebSocket'
      ],
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'Outstanding Student in Computer Science Award 2022',
        'President of Computer Science Student Association'
      ]
    },
    {
      id: 2,
      type: 'bootcamp',
      title: 'Full Stack Web Development Bootcamp',
      institution: 'General Assembly',
      duration: '6 months intensive',
      location: 'San Francisco, CA',
      status: 'completed',
      isCompleted: true,
      description: `Intensive hands-on bootcamp focusing on modern web development technologies and industry best practices. Built multiple real-world projects and collaborated with cross-functional teams.`,
      keyLearnings: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git/GitHub', 'Agile Methodology'],
      projects: [
        'Social Media Dashboard - React-based analytics platform',
        'RESTful API Development - Node.js backend with authentication',
        'Team Project - Collaborative e-learning platform'
      ],
      achievements: [
        'Top 10% of cohort performance',
        'Best Team Project Award',
        'Mentored 5 junior students'
      ]
    },
    {
      id: 3,
      type: 'certification',
      title: 'AWS Solutions Architect Associate',
      institution: 'Amazon Web Services',
      duration: '3 months preparation',
      location: 'Online',
      status: 'completed',
      isCompleted: true,
      description: `Comprehensive cloud architecture certification covering AWS services, security, and best practices for designing scalable and reliable systems.`,
      keyLearnings: ['Cloud Architecture', 'AWS Services', 'Security Best Practices', 'Cost Optimization', 'High Availability', 'Disaster Recovery'],
      achievements: [
        'Passed with 850/1000 score',
        'Implemented 3 production AWS architectures'
      ]
    },
    {
      id: 4,
      type: 'course',
      title: 'Advanced React & Redux Masterclass',
      institution: 'Udemy',
      duration: 'Ongoing',
      location: 'Online',
      status: 'in-progress',
      isCompleted: false,
      description: `Deep dive into advanced React patterns, state management with Redux, and performance optimization techniques for large-scale applications.`,
      keyLearnings: ['Advanced React Patterns', 'Redux Toolkit', 'Performance Optimization', 'Testing Strategies', 'TypeScript Integration']
    }
  ];

  // Mock learning statistics
  const learningStats = [
    {
      icon: 'GraduationCap',
      value: '4',
      label: 'Degrees & Certifications',
      description: 'Formal education milestones',
      bgColor: 'gradient-primary'
    },
    {
      icon: 'BookOpen',
      value: '47',
      label: 'Courses Completed',
      description: 'Online learning achievements',
      bgColor: 'bg-secondary'
    },
    {
      icon: 'Clock',
      value: '1,200+',
      label: 'Learning Hours',
      description: 'Dedicated study time',
      bgColor: 'bg-accent'
    },
    {
      icon: 'Trophy',
      value: '15',
      label: 'Achievements',
      description: 'Awards and recognitions',
      bgColor: 'bg-warning'
    }
  ];

  // Mock skill progress data
  const skillProgressData = [
    { name: 'JavaScript', proficiency: 95 },
    { name: 'React', proficiency: 92 },
    { name: 'Node.js', proficiency: 88 },
    { name: 'Python', proficiency: 85 },
    { name: 'AWS', proficiency: 82 },
    { name: 'MongoDB', proficiency: 80 },
    { name: 'TypeScript', proficiency: 78 },
    { name: 'Docker', proficiency: 75 }
  ];

  // Mock online courses data
  const onlineCoursesData = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      platform: 'Udemy',
      category: 'frontend',
      duration: '40 hours',
      completedDate: 'Dec 2024',
      progress: 100,
      rating: 4.8,
      hasCertificate: true,
      skills: ['React', 'Redux', 'Hooks', 'Context API', 'Testing']
    },
    {
      id: 2,
      title: 'Node.js Masterclass',
      platform: 'Pluralsight',
      category: 'backend',
      duration: '35 hours',
      completedDate: 'Nov 2024',
      progress: 100,
      rating: 4.9,
      hasCertificate: true,
      skills: ['Node.js', 'Express', 'MongoDB', 'Authentication', 'API Design']
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      platform: 'A Cloud Guru',
      category: 'devops',
      duration: '25 hours',
      completedDate: 'Oct 2024',
      progress: 100,
      rating: 4.7,
      hasCertificate: true,
      skills: ['AWS Services', 'Cloud Architecture', 'Security', 'Cost Management']
    },
    {
      id: 4,
      title: 'Full Stack Development',
      platform: 'Coursera',
      category: 'fullstack',
      duration: '60 hours',
      completedDate: 'Sep 2024',
      progress: 100,
      rating: 4.6,
      hasCertificate: true,
      skills: ['MERN Stack', 'GraphQL', 'Docker', 'CI/CD', 'Testing']
    },
    {
      id: 5,
      title: 'Advanced JavaScript Concepts',
      platform: 'Frontend Masters',
      category: 'frontend',
      duration: '20 hours',
      completedDate: 'In Progress',
      progress: 75,
      rating: 4.9,
      hasCertificate: false,
      skills: ['Closures', 'Prototypes', 'Async Programming', 'ES6+']
    },
    {
      id: 6,
      title: 'Microservices Architecture',
      platform: 'Udemy',
      category: 'backend',
      duration: '45 hours',
      completedDate: 'In Progress',
      progress: 60,
      rating: 4.5,
      hasCertificate: false,
      skills: ['Microservices', 'Docker', 'Kubernetes', 'API Gateway']
    }
  ];

  // Mock learning goals data
  const learningGoalsData = [
    {
      id: 1,
      title: 'Master Kubernetes & Container Orchestration',
      description: 'Deep dive into Kubernetes for container orchestration, including deployment strategies, scaling, and monitoring.',
      priority: 'high',
      status: 'in-progress',
      progress: 40,
      targetDate: 'March 2025',
      estimatedHours: 80,
      resources: ['Kubernetes Documentation', 'CNCF Training', 'Hands-on Labs']
    },
    {
      id: 2,
      title: 'Advanced System Design Patterns',
      description: 'Study scalable system architecture patterns for high-traffic applications and distributed systems.',
      priority: 'high',
      status: 'planned',
      progress: 0,
      targetDate: 'June 2025',
      estimatedHours: 120,
      resources: ['System Design Primer', 'High Scalability Blog', 'Architecture Courses']
    },
    {
      id: 3,
      title: 'Machine Learning for Web Applications',
      description: 'Integrate ML models into web applications using TensorFlow.js and Python backends.',
      priority: 'medium',
      status: 'planned',
      progress: 0,
      targetDate: 'August 2025',
      estimatedHours: 100,
      resources: ['TensorFlow.js Docs', 'ML Coursera', 'Kaggle Competitions']
    },
    {
      id: 4,
      title: 'GraphQL Advanced Implementation',
      description: 'Master GraphQL subscriptions, federation, and performance optimization techniques.',
      priority: 'medium',
      status: 'in-progress',
      progress: 65,
      targetDate: 'February 2025',
      estimatedHours: 60,
      resources: ['GraphQL Spec', 'Apollo Documentation', 'Community Forums']
    },
    {
      id: 5,
      title: 'Blockchain Development Fundamentals',
      description: 'Learn smart contract development and decentralized application (DApp) creation.',
      priority: 'low',
      status: 'planned',
      progress: 0,
      targetDate: 'December 2025',
      estimatedHours: 150,
      resources: ['Ethereum Docs', 'Solidity Tutorials', 'Web3 Bootcamp']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="GraduationCap" size={16} />
              <span>Educational Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Learning &{' '}
              <span className="gradient-text">Growth</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A continuous journey of formal education, professional development, and self-directed learning 
              that shapes my expertise and drives innovation in every project.
            </p>
          </div>

          {/* Learning Statistics */}
          <LearningStats stats={learningStats} />
        </div>
      </section>
      {/* Education Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educational Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From foundational computer science education to specialized certifications, 
              each milestone has contributed to my technical expertise and professional growth.
            </p>
          </div>

          <EducationTimeline educationData={educationData} />
        </div>
      </section>
      {/* Skills Progress Chart */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SkillProgressChart skillData={skillProgressData} />
        </div>
      </section>
      {/* Online Learning Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Continuous Learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Staying current with technology through online courses, certifications, 
              and hands-on practice across multiple platforms and learning resources.
            </p>
          </div>

          <OnlineLearningSection courses={onlineCoursesData} />
        </div>
      </section>
      {/* Learning Goals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Future Learning Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planned learning objectives and skill development roadmap to stay ahead 
              of industry trends and emerging technologies.
            </p>
          </div>

          <LearningGoals goals={learningGoalsData} />
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-brand-lg">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Lightbulb" size={24} color="white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Learn Together
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in collaborating on learning projects, sharing knowledge, or discussing 
              the latest technologies? I'm always excited to connect with fellow learners and innovators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Start a Conversation</span>
              </button>
              
              <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="BookOpen" size={20} />
                <span>View Learning Resources</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date()?.getFullYear()} DevPortfolio Pro. Committed to lifelong learning and growth.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Education;