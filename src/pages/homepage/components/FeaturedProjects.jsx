import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { projects } from '../../../data/projects';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-7 bg-[#0077FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-worksans">
            Recent <span className="text-white">Work</span>
          </h2>
          <p className="text-lg text-white max-w-lg lg:max-w-4xl mx-auto mb-8 font-worksans">
            Showcasing real-world applications built with modern technologies, 
            delivering measurable business results and exceptional user experiences.
          </p>
          
          <Link to="/projects">
            <Button variant="outline" iconName="ArrowRight" iconPosition="right" className='rounded-full bg-white text-[#0077FF] font-worksans'>
              View All Projects
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-1 gap-8"
        >
          {projects?.map((project, index) => {
            const liveUrl = project?.liveUrl || project?.liveDemo;
            const githubUrl = project?.githubUrl || project?.github;
            const galleryImages = project?.galleryImages || [];

            return (
              <motion.div
                key={project?.id}
                variants={projectVariants}
                className={`group relative bg-white border border-border rounded-xl overflow-hidden hover:shadow-brand-lg transition-all bg-primary duration-300 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project?.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-70 overflow-hidden">
                  {liveUrl ? (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <Image
                        src={project?.image}
                        alt={project?.imageAlt || project?.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </a>
                  ) : (
                    <Image
                      src={project?.image}
                      alt={project?.imageAlt || project?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success text-white">
                      <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                      Live
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project?.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium gradient-primary text-white">
                        <Icon name="Star" size={12} className="mr-1" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Overlay with Quick Actions */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                    hoveredProject === project?.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <Icon name="ExternalLink" size={20} color="white" />
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <Icon name="Github" size={20} color="white" />
                      </a>
                    )}
                  </div>
                </div>

                {galleryImages.length > 0 && (
                  <div className="hidden lg:grid lg:grid-cols-4 gap-4 mb-4 pt-4 px-4 border-t border-border">
                    {galleryImages.map((img, imgIndex) => (
                      <div key={imgIndex} className="rounded-xl overflow-hidden">
                        {liveUrl ? (
                          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                            <Image
                              src={img}
                              alt={`${project?.imageAlt || project?.title} screenshot ${imgIndex + 1}`}
                              className="w-full h-50 object-cover"
                            />
                          </a>
                        ) : (
                          <Image
                            src={img}
                            alt={`${project?.imageAlt || project?.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-50 object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground text-black mb-2 group-hover:text-[#002B5C] transition-colors duration-200 font-worksans">
                      {project?.title}
                    </h3>
                    <p className="text-black-foreground text-sm leading-relaxed font-semibold font-worksans">
                      {project?.shortDescription || project?.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-xl font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  {project?.metrics && (
                    <div className="grid grid-cols-3 gap-4 mb-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-black font-worksans">{project?.metrics?.users}</div>
                        <div className="text-xs text-black-foreground font-semibold font-worksans">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-black font-worksans">{project?.metrics?.performance}</div>
                        <div className="text-xs text-black-foreground font-semibold font-worksans">Performance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-black font-worksans">{project?.metrics?.uptime}</div>
                        <div className="text-xs text-black-foreground font-semibold font-worksans">Uptime</div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button 
                          variant="outline" 
                          className='rounded-full bg-white text-[#0077FF] border border-[#0077FF]'
                          size="sm" 
                          fullWidth
                          iconName="ExternalLink"
                          iconPosition="right"
                        >
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="outline" 
                          className='rounded-full bg-white text-[#0077FF] border border-[#0077FF]'
                          size="sm"
                          iconName="Github"
                        >
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4 font-worksans">
              Ready to build something amazing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-worksans">
              Let's discuss your project requirements and create a solution that drives real business results.
            </p>
            <Link to="/contact">
              <Button 
                variant="default" 
                size="lg"
                className="bg-[#0077FF] text-white rounded-full hover:bg-white hover:text-[#0077FF] border border-[#0077FF]"
                iconName="MessageCircle"
                iconPosition="right"
              >
                Start a Project
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
