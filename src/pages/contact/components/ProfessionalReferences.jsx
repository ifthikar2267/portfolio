import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProfessionalReferences = () => {
  const [expandedReference, setExpandedReference] = useState(null);

  const references = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Product Manager",
      company: "TechCorp Solutions",
      relationship: "Direct Manager (2022-2024)",
      email: "sarah.johnson@techcorp.com",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      phone: "+1 (555) 987-6543",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimonial: `Alex consistently delivered exceptional full-stack solutions during our 2-year collaboration. His ability to translate complex business requirements into elegant technical solutions was remarkable. He led the development of our customer portal that increased user engagement by 40% and reduced support tickets by 60%. Alex's proactive communication and mentorship of junior developers made him an invaluable team member.`,
      projects: ["Customer Portal Redesign", "API Integration Platform", "Mobile App Backend"],
      skills: ["React", "Node.js", "PostgreSQL", "AWS", "Team Leadership"],
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CTO & Co-founder",
      company: "StartupXYZ",
      relationship: "Client (Contract Work 2023)",
      email: "michael@startupxyz.com",
      linkedin: "https://linkedin.com/in/michaelchen",
      phone: "+1 (555) 456-7890",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: `Working with Alex was a game-changer for our startup. He took our MVP from concept to production in just 8 weeks, delivering a scalable architecture that handled our rapid user growth. His expertise in modern web technologies and DevOps practices saved us months of development time. Alex's ability to work independently while keeping us informed throughout the process was exactly what we needed as a fast-moving startup.`,
      projects: ["MVP Development", "Scalable Architecture", "DevOps Setup"],
      skills: ["Next.js", "TypeScript", "MongoDB", "Docker", "CI/CD"],
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Lead Designer",
      company: "Creative Agency Pro",
      relationship: "Collaboration Partner (2023-2024)",
      email: "emily@creativeagency.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      phone: "+1 (555) 321-0987",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: `Alex is the rare developer who truly understands design. Our collaboration on multiple client projects was seamless - he could take my Figma designs and not only implement them pixel-perfectly but also suggest improvements for better user experience and performance. His attention to detail and commitment to responsive design made our clients extremely happy. I recommend him without hesitation.`,
      projects: ["E-commerce Platform", "Portfolio Websites", "SaaS Dashboard"],
      skills: ["Frontend Development", "UI/UX Implementation", "Responsive Design", "Performance Optimization"],
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Senior Software Engineer",
      company: "Enterprise Solutions Inc",
      relationship: "Former Colleague (2021-2022)",
      email: "david.thompson@enterprise.com",
      linkedin: "https://linkedin.com/in/davidthompson",
      phone: "+1 (555) 654-3210",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: `Alex and I worked together on several enterprise-level applications. His code quality is exceptional - clean, well-documented, and maintainable. He has a deep understanding of software architecture patterns and always considers scalability and security from the start. Alex is also an excellent team player who's always willing to help others and share his knowledge. Any team would be lucky to have him.`,
      projects: ["Enterprise CRM System", "Data Analytics Platform", "Microservices Architecture"],
      skills: ["Java", "Spring Boot", "Microservices", "System Design", "Code Review"],
      rating: 5
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedReference(expandedReference === id ? null : id);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">Professional References</h3>
        <p className="text-muted-foreground mb-6">
          Connect with colleagues and clients who can speak to my work quality and collaboration style.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {references?.map((reference) => (
          <div
            key={reference?.id}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-brand-lg transition-all duration-200"
          >
            {/* Header */}
            <div className="flex items-start space-x-4 mb-4">
              <img
                src={reference?.avatar}
                alt={reference?.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-border"
                onError={(e) => {
                  e.target.src = '/assets/images/no_image.png';
                }}
              />
              <div className="flex-1">
                <h4 className="font-bold text-foreground text-lg">{reference?.name}</h4>
                <p className="text-sm text-muted-foreground">{reference?.title}</p>
                <p className="text-sm font-medium text-primary">{reference?.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{reference?.relationship}</p>
              </div>
              <div className="flex space-x-1">
                {renderStars(reference?.rating)}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-wrap gap-2 mb-4">
              <a
                href={`mailto:${reference?.email}`}
                className="flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs hover:bg-blue-100 transition-colors duration-200"
              >
                <Icon name="Mail" size={12} />
                <span>Email</span>
              </a>
              <a
                href={reference?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs hover:bg-blue-100 transition-colors duration-200"
              >
                <Icon name="Linkedin" size={12} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`tel:${reference?.phone}`}
                className="flex items-center space-x-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs hover:bg-green-100 transition-colors duration-200"
              >
                <Icon name="Phone" size={12} />
                <span>Call</span>
              </a>
            </div>

            {/* Testimonial Preview */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {expandedReference === reference?.id 
                  ? reference?.testimonial
                  : `${reference?.testimonial?.substring(0, 150)}...`
                }
              </p>
              <button
                onClick={() => toggleExpanded(reference?.id)}
                className="text-sm text-primary hover:text-primary/80 font-medium mt-2 transition-colors duration-200"
              >
                {expandedReference === reference?.id ? 'Show Less' : 'Read More'}
              </button>
            </div>

            {/* Expanded Content */}
            {expandedReference === reference?.id && (
              <div className="space-y-4 border-t border-border pt-4">
                {/* Projects Worked On */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">Projects Collaborated On:</h5>
                  <div className="flex flex-wrap gap-2">
                    {reference?.projects?.map((project, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills Highlighted */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">Skills Highlighted:</h5>
                  <div className="flex flex-wrap gap-2">
                    {reference?.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Reference Request Notice */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <Icon name="Shield" size={24} className="text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Reference Verification</h4>
            <p className="text-sm text-muted-foreground mb-4">
              All references have given permission to be contacted. For additional references or 
              specific project details, please feel free to reach out directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                iconName="UserCheck"
                iconPosition="left"
              >
                Request Additional References
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="FileText"
                iconPosition="left"
              >
                Download Reference Letters
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact for References */}
      <div className="text-center p-6 bg-muted/30 rounded-xl">
        <Icon name="Users" size={32} className="text-primary mx-auto mb-4" />
        <h4 className="text-lg font-semibold text-foreground mb-2">Need to Speak with References?</h4>
        <p className="text-sm text-muted-foreground mb-4">
          I'm happy to facilitate introductions with any of my professional references. 
          Just let me know what specific aspects of our collaboration you'd like to discuss.
        </p>
        <Button
          variant="default"
          size="sm"
          className="gradient-primary hover:opacity-90"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Request Reference Introduction
        </Button>
      </div>
    </div>
  );
};

export default ProfessionalReferences;