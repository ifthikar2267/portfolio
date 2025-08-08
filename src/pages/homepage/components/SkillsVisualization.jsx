import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState([]);

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React', level: 95, icon: 'Atom', color: 'text-blue-500' },
        { name: 'HTML/CSS', level: 96, icon: 'Layout', color: 'text-orange-500' },
        { name: 'JavaScript', level: 95, icon: 'FileCode', color: 'text-yellow-500' },
        { name: 'Bootstrap', level: 92, icon: 'Layout', color: 'text-cyan-500' },
        { name: 'Tailwind CSS', level: 92, icon: 'Wind', color: 'text-cyan-500' },

        
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 90, icon: 'Cpu', color: 'text-green-600' },
        { name: 'Express.js', level: 85, icon: 'Layers', color: 'text-gray-700' },
        { name: 'MongoDB', level: 90, icon: 'Leaf', color: 'text-green-600' },
        { name: 'MySQL', level: 90, icon: 'Database', color: 'text-green-600' },
        { name: 'Rest APIs', level: 80, icon: 'Network', color: 'text-green-600' }
      ]
    },
    tools: {
      title: 'Tools',
      icon: 'Settings',
      skills: [
        { name: 'Git', level: 93, icon: 'GitBranch', color: 'text-orange-600' },
         { name: 'GitHub', level: 93, icon: 'Github', color: 'text-orange-600' },
        { name: 'Visual Studio', level: 90, icon: 'Code', color: 'text-blue-400' },
         { name: 'Postman', level: 85, icon: 'Send', color: 'text-red-500' },
        { name: 'Vercel', level: 85, icon: 'Triangle', color: 'text-gray-900' },
        { name: 'Firebase', level: 85, icon: 'Flame', color: 'text-red-500' }
       
      ]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skillCategories?.[selectedCategory]?.skills);
    }, 100);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
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
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficiency levels across modern technologies and frameworks, 
            continuously updated through hands-on projects and learning.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories)?.map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center rounded-xl space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === key
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories?.[selectedCategory]?.skills?.map((skill, index) => (
            <motion.div
              key={skill?.name}
              variants={skillVariants}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-200 ${skill?.color}`}>
                    <Icon name={skill?.icon} size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">{skill?.name}</h3>
                </div>
                <span className="text-sm font-medium text-primary">{skill?.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="h-2 gradient-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill?.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                
                {/* Skill Level Indicator */}
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>

              {/* Proficiency Description */}
              {/* <div className="mt-3 text-sm text-muted-foreground">
                {skill?.level >= 90 && "Expert level with extensive project experience"}
                {skill?.level >= 80 && skill?.level < 90 && "Advanced proficiency with solid understanding"}
                {skill?.level >= 70 && skill?.level < 80 && "Intermediate level with growing expertise"}
                {skill?.level < 70 && "Learning and developing proficiency"}
              </div> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-2xl font-bold gradient-text mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-2xl font-bold gradient-text mb-2">1+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-2xl font-bold gradient-text mb-2">1+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-2xl font-bold gradient-text mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsVisualization;