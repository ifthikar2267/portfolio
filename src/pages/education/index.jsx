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
      title: 'B-Tech Information Technology',
      institution: 'Mohamed Sathak AJ College of Engineering',
      duration: '2021 - 2025',
      location: 'Chennai, TN',
      gpa: '8.0',
      status: 'completed',
      isCompleted: true,
      description: `Pursued a comprehensive curriculum in Information Technology covering software development, database management, and emerging technologies. Developed strong problem-solving skills through academic projects, and hands-on experience, building a solid foundation for a career in modern IT solutions.`,
      keyLearnings: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Computer Networks', 'Machine Learning', 'Web Development'],
      projects: [
        'E-commerce Platform - Full-stack web application using React and Node.js',
      ],
    },
    {
        id: 2,
        type: 'education',
        title: 'Higher Secondary Certificate (HSC)',
        institution: 'LK Higher Secondary School',
        duration: '2020 - 2021',
        location: 'Tamil Nadu, India',
        status: 'completed',
        isCompleted: true,
        description: `Completed higher secondary education with a focus on Mathematics, Physics, and Computer Science. Developed strong analytical and problem-solving skills, laying a solid academic foundation for pursuing Information Technology in higher education.`,
        keyLearnings: ['Mathematics', 'Physics', 'Computer Science', 'Analytical Thinking', 'Problem Solving'],
},

    {
      id: 3,
      type: 'education',
      title: 'SSLC - Secondary School Leaving Certificate',
      institution: 'LK Higher Secondary School',
      duration: '2018 - 2019',
      location: 'Tamil Nadu, India',
      status: 'completed',
      isCompleted: true,
      description: `Successfully completed secondary education under the Tamil Nadu State Board curriculum, building a strong academic foundation in core subjects such as Mathematics, Science, and English, which fostered analytical thinking and problem-solving skills.`,
      keyLearnings: ['Mathematics', 'Science', 'English', 'Social Science', 'Tamil'],
    },
    {
      id: 4,
      type: 'certification',
      title: 'MERN Fullstack Development',
      institution: 'Udemy',
      duration: '19hrs',
      location: 'Online',
      status: 'completed',
      isCompleted: true,
      description: `Completed an online course on MERN (MongoDB, Express.js, React.js, Node.js) stack, learning to build and deploy full-stack web applications.`,
      keyLearnings: ['MongoDB', 'Express.js', 'React', 'Node.js']
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
    { name: 'MongoDB', proficiency: 85 },
    { name: 'MySQL', proficiency: 80 },
    { name: 'Dart', proficiency: 78 },
    { name: 'Flutter', proficiency: 65 }
  ];

  // Mock online courses data
  const onlineCoursesData = [
    {
      id: 1,
      title: 'MERN Fullstack Guide',
      platform: 'Udemy',
      category: 'fullstack',
      duration: '19 hours',
      completedDate: 'Mar 2024',
      progress: 100,
      hasCertificate: true,
      certificateLink: 'https://www.udemy.com/certificate/UC-20a64cb5-be20-4132-bab2-a465ba040255/',
      skills: ['React', 'MongoDB', 'Node.js', 'Express.js']
    },
    {
      id: 2,
      title: 'MongoDB',
      platform: 'Great Learning',
      category: 'backend',
      duration: '2 hours',
      completedDate: 'Dec 2024',
      progress: 100,
      rating: 4.5,
      hasCertificate: true,
      certificateLink: 'https://drive.google.com/file/d/1PPnPhO4xSAt8V-GBsoKrMnMJzny3rgDT/view?usp=drivesdk',
      skills: ['MongoDB']
    },
    {
      id: 3,
      title: 'Blockchain',
      platform: 'Kerala Blockchain Academy',
      category: 'backend',
      duration: '25 hours',
      completedDate: 'Oct 2024',
      progress: 100,
      rating: 4.7,
      hasCertificate: true,
      certificateLink: 'https://drive.google.com/file/d/1P-Md0xy8LlDMdrCfF0zFPkg29A100Ro-/view?usp=drivesdk',
    },
    {
      id: 4,
      title: 'Python',
      platform: 'Guvi',
      category: 'backend',
      duration: '10 hours',
      completedDate: 'Aug 2023',
      progress: 100,
      rating: 4.5,
      hasCertificate: true,
      certificateLink: 'https://drive.google.com/file/d/1P1Wnq2JW4gt8ZQi_sK6EGSnFZgFnvbY-/view?usp=drivesdk',
      skills: ['Python']
    },
    {
      id: 5,
      title: 'Oracle Cloud',
      platform: 'Oracle',
      category: 'backend',
      duration: '20 hours',
      completedDate: 'Mar 2024',
      progress: 100,
      rating: 4.0,
      hasCertificate: true,
      certificateLink: 'https://drive.google.com/file/d/1PT0X0XoflrdppIB6ydc3eL4yumCv1ITT/view?usp=drivesdk',
      skills: ['Cloud']
    },
    {
      id: 6,
      title: 'AI',
      platform: 'Guvi',
      category: 'backend',
      duration: '10 hours',
      completedDate: 'Aug 2023',
      progress: 100,
      rating: 4.5,
      hasCertificate: true,
      certificateLink: 'https://drive.google.com/file/d/1P1xWi5AT0gcuanWK3630KsuiVZTp5HCv/view?usp=drivesdk',
      skills: ['Artificial Intelligence']
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
          {/* <div className="text-center mb-16"> */}
            {/* <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="GraduationCap" size={16} />
              <span>Educational Journey</span>
            </div> */}
            
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Learning &{' '}
              <span className="gradient-text">Growth</span>
            </h1> */}
            
            {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A continuous journey of formal education, professional development, and self-directed learning 
              that shapes my expertise and drives innovation in every project.
            </p> */}
          {/* </div> */}

          {/* Learning Statistics */}
          {/* <LearningStats stats={learningStats} /> */}
        </div>
      </section>
      {/* Education Timeline */}
      <section className="py-0 px-4 sm:px-6 lg:px-8 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educational Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I pursued my studies in Information Technology, gaining a strong foundation in programming, database management, and software development. Throughout my coursework, I developed problem-solving skills, hands-on project experience, and a solid understanding of modern technologies, preparing me for real-world IT challenges.
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
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Future Learning Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planned learning objectives and skill development roadmap to stay ahead 
              of industry trends and emerging technologies.
            </p>
          </div> */}

          {/* <LearningGoals goals={learningGoalsData} /> */}
        </div>
      </section>
      {/* Call to Action */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/50">
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
      </section> */}
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date()?.getFullYear()} Ifthikar. Committed to lifelong learning and growth.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Education;