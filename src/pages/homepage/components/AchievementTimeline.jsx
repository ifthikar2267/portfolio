import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AchievementTimeline = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      id: 1,
      date: "2024-03-11",
      title: "The MERN Fullstack",
      category: "Certification",
      description: "A certification course on Udemy covering full-stack web development using MongoDB, Express.js, React, and Node.js (MERN stack).",
      icon: "Award",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      details: {
        provider: "udemy",
        skills: ["MongoDB", "Express.js", "React", "Node.js"]
      }
    },
    {
      id: 2,
      date: "2023-08-15",
      title: "Artificial Intelligence",
      category: "Certification",
      description: "A certification course from Guvi on the fundamentals and applications of Artificial Intelligence.",
      icon: "Award",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      details: {
        provider: "Guvi",
        technologies: ["AI"]
      }
    },
    {
      id: 3,
      date: "2023-08-15",
      title: "Python",
      category: "Certification",
      description: "A certification course from Guvi covering Python programming fundamentals and practical applications.",
      icon: "Award",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: {
        provider: "Guvi",
        skills: ["Python"]
      }
    },
    {
      id: 4,
      date: "2024-03-24",
      title: "Oracle Certified Foundations Associate",
      category: "Certification",
      description: "An Oracle certification validating foundational knowledge of databases, SQL, and Oracle Cloud concepts.",
      icon: "Award",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      details: {
         provider: "Oracle",
        skills: ["Cloud"]
      }
    },
    {
      id: 5,
      date: "2023-07-03",
      title: "Full Stack-Java with Angular",
      category: "Internship",
      description: "An internship at ZohoTech focused on full-stack development using Java for the backend and Angular for the frontend.",
      icon: "Laptop",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      details: {
        provider: "Zoho Tech's",
        duration: "40 hours",
        topics: ["HTML", "CSS", "Angular", "Java"],
      }
    },
    {
      id: 6,
      date: "2024-11-04",
      title: "Website Design and Development",
      category: "Internship",
      description: "An internship at Internship Studio focused on designing and developing responsive and user-friendly websites.",
      icon: "ClipboardList",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      details: {
        topic: "Modern Full-Stack Development",
         provider: "Internship studio",
          topics: ["HTML", "CSS", "React", "NodeJS", "MongoDB"],


      }
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Certification': return 'Award';
      case 'Project': return 'Rocket';
      case 'Achievement': return 'Trophy';
      case 'Learning': return 'BookOpen';
      case 'Speaking': return 'Mic';
      default: return 'Star';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recent <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional growth through certifications, 
            project milestones, and community contributions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {achievements?.map((achievement, index) => (
              <motion.div
                key={achievement?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-card border-4 border-primary shadow-brand flex items-center justify-center z-10">
                  <Icon name={getCategoryIcon(achievement?.category)} size={16} className="text-primary" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'
                } md:w-1/2`}>
                  <motion.div
                    className={`bg-card border ${achievement?.borderColor} rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300 cursor-pointer ${
                      selectedAchievement === achievement?.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedAchievement(
                      selectedAchievement === achievement?.id ? null : achievement?.id
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${achievement?.bgColor}`}>
                          <Icon name={achievement?.icon} size={20} className={achievement?.color} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">
                            {achievement?.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-muted-foreground">
                              {formatDate(achievement?.date)}
                            </span>
                            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                              {achievement?.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <Icon 
                        name={selectedAchievement === achievement?.id ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-muted-foreground" 
                      />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {achievement?.description}
                    </p>

                    {/* Expanded Details */}
                    {selectedAchievement === achievement?.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border pt-4 mt-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          {Object.entries(achievement?.details)?.map(([key, value]) => (
                            <div key={key} className="flex flex-col">
                              <span className="font-medium text-foreground capitalize mb-1">
                                {key?.replace(/([A-Z])/g, ' $1')?.trim()}:
                              </span>
                              <span className="text-muted-foreground">
                                {Array.isArray(value) ? value?.join(', ') : value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Date Badge for Desktop */}
                <div className={`hidden md:block ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                } md:w-1/2`}>
                  <div className={`text-right ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      {formatDate(achievement?.date)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <Icon name="Award" size={24} className="text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold gradient-text mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <Icon name="Rocket" size={24} className="text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold gradient-text mb-1">1+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          {/* <div className="text-center p-6 bg-card border border-border rounded-xl">
            <Icon name="GitBranch" size={24} className="text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold gradient-text mb-1">1K+</div>
            <div className="text-sm text-muted-foreground">GitHub Stars</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <Icon name="Users" size={24} className="text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold gradient-text mb-1">25K+</div>
            <div className="text-sm text-muted-foreground">Users Served</div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementTimeline;