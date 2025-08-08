import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechStart Inc.",
      company: "TechStart Inc.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: `Working with this developer was exceptional. The e-commerce platform delivered exceeded our expectations with clean code, excellent performance, and seamless user experience. The project was completed on time and within budget.`,
      rating: 5,
      project: "E-Commerce Platform",
      metrics: "40% increase in conversion rate"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager at InnovateLab",
      company: "InnovateLab",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: `Outstanding technical expertise and communication skills. The task management application built for our team has significantly improved our productivity. The real-time features work flawlessly and the UI is intuitive.`,
      rating: 5,
      project: "Task Management App",
      metrics: "60% improvement in team productivity"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder at CreativeAgency",
      company: "CreativeAgency",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: `The AI content generator has revolutionized our content creation process. The integration with OpenAI API is seamless, and the custom features perfectly match our workflow. Highly recommend for complex projects.`,
      rating: 5,
      project: "AI Content Generator",
      metrics: "300% faster content creation"
    }
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect",
      provider: "Amazon Web Services",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
      validUntil: "2028",
      credentialId: "AWS-SAA-2025"
    },
    {
      name: "Google Cloud Professional",
      provider: "Google Cloud",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      validUntil: "2027",
      credentialId: "GCP-PD-2024"
    },
    {
      name: "Microsoft Azure Developer",
      provider: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
      validUntil: "2026",
      credentialId: "AZ-204-2024"
    },
    {
      name: "React Advanced Certification",
      provider: "React Training",
      logo: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=100&h=100&fit=crop",
      validUntil: "2026",
      credentialId: "RT-ADV-2024"
    }
  ];

  const githubStats = {
    contributions: 1247,
    repositories: 25,
    stars: 1089,
    followers: 342,
    streak: 89
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Client testimonials, professional certifications, and community recognition 
            that validate expertise and reliability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Client Testimonials
            </h3>

            {/* Active Testimonial */}
            <div className="bg-card border border-border rounded-xl p-8 relative">
              <div className="flex items-start space-x-4 mb-6">
                <Image
                  src={testimonials?.[activeTestimonial]?.avatar}
                  alt={testimonials?.[activeTestimonial]?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonials?.[activeTestimonial]?.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials?.[activeTestimonial]?.role}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonials?.[activeTestimonial]?.company}
                  </p>
                </div>
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonials?.[activeTestimonial]?.content}"
              </blockquote>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={16} className="text-primary" />
                  <span className="text-muted-foreground">
                    Project: {testimonials?.[activeTestimonial]?.project}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} className="text-success" />
                  <span className="text-success font-medium">
                    {testimonials?.[activeTestimonial]?.metrics}
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
                </button>

                <div className="flex space-x-2">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === activeTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* GitHub Stats */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                GitHub Activity
              </h3>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">{githubStats?.contributions}</div>
                    <div className="text-sm text-muted-foreground">Contributions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">{githubStats?.repositories}</div>
                    <div className="text-sm text-muted-foreground">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">{githubStats?.stars}</div>
                    <div className="text-sm text-muted-foreground">Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">{githubStats?.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Icon name="Flame" size={16} className="text-orange-500" />
                  <span className="text-muted-foreground">
                    {githubStats?.streak} day contribution streak
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Professional Certifications
              </h3>
              <div className="space-y-4">
                {certifications?.map((cert, index) => (
                  <motion.div
                    key={cert?.credentialId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-brand transition-shadow duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <Image
                        src={cert?.logo}
                        alt={cert?.provider}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {cert?.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert?.provider}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">
                          Valid until {cert?.validUntil}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ID: {cert?.credentialId}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <Icon name="Users" size={32} className="text-primary mb-2" />
                <div className="text-2xl font-bold gradient-text">25K+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="Clock" size={32} className="text-primary mb-2" />
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="Zap" size={32} className="text-primary mb-2" />
                <div className="text-2xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground">Performance</div>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="Shield" size={32} className="text-primary mb-2" />
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Security</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;