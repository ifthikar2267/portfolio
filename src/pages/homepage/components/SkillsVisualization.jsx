import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { skillCategories } from '../../../data/skills';

const SkillsVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState([]);

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

  const totalSkills = Object.values(skillCategories).reduce(
    (sum, category) => sum + category.skills.length,
    0
  );

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2 mb-5"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-worksans">
            Tools & <span className="text-3xl sm:text-4xl font-bold text-black">Technologies</span>
          </h2>
         <p className="text-lg text-black font-opensans
  text-center sm:text-justify 
  max-w-sm sm:max-w-2xl lg:max-w-6xl lg:px-2
  leading-relaxed [overflow-wrap:normal]">
Continuously evolving technical skills through the integration of modern tools, frameworks, AI technologies, and real-world projects.
</p>

        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-5 font-worksans">
          {Object.entries(skillCategories)?.map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center justify-center text-center rounded-full space-x-2 px-6 py-3 font-medium w-80 transition-all duration-200 ${
                selectedCategory === key
                  ? 'bg-[#0077ff] text-white shadow-brand'
                  : 'bg-white text-[#0077ff] border border-[#0077FF]'
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
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-0"
>
  {skillCategories?.[selectedCategory]?.skills?.map((skill, index) => (
    <motion.div
      key={skill?.name}
      variants={skillVariants}
      className="p-2 mt-2"
    >
      {/* Skill Name and Level with Icon */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Icon name={skill?.icon} size={20} />
          <h3 className="font-semibold text-foreground">{skill?.name}</h3>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            className="h-2 bg-[#0077FF] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill?.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>


        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 mb-5 bg-card border border-border rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-black mb-2">{totalSkills}+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 mb-5 bg-card border border-border rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-black mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 mb-5 bg-card border border-border rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-black mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center p-6 mb-5 bg-card border border-border rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-black mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsVisualization;
