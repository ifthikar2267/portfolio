import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InternshipSection = ({ internships }) => {
  const [expandedId, setExpandedId] = useState(internships?.[0]?.id ?? null);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-[#0077FF] rounded-xl flex items-center justify-center">
              <Icon name="Briefcase" size={24} color="white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-black font-worksans">
              Internship <span className="text-black">Experience</span>
            </h2>
          </div>
          <p className="text-lg text-black font-opensans max-w-3xl mx-auto leading-relaxed">
            Hands-on industry experience building real products, contributing to production systems,
            and delivering projects for leading organizations in the UAE and beyond.
          </p>
        </div>

        <div className="space-y-6">
          {internships?.map((internship) => (
            <div
              key={internship.id}
              className="bg-card shadow-brand border border-border rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() =>
                  setExpandedId(expandedId === internship.id ? null : internship.id)
                }
                className="w-full text-left p-6 hover:bg-muted/30 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#0077FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={internship.icon} size={28} className="text-[#0077FF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black font-worksans mb-1">
                        {internship.name}
                      </h3>
                      <p className="text-[#0077FF] font-semibold font-worksans mb-2">
                        {internship.issuer} · {internship.role}
                      </p>
                      <p className="text-sm text-muted-foreground font-worksans line-clamp-2">
                        {internship.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2 text-sm text-muted-foreground font-worksans flex-shrink-0">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{internship.location}</span>
                    </div>
                    <Icon
                      name={expandedId === internship.id ? 'ChevronUp' : 'ChevronDown'}
                      size={20}
                      className="text-muted-foreground mt-1"
                    />
                  </div>
                </div>
              </button>

              {expandedId === internship.id && (
                <div className="px-6 pb-6 border-t border-border pt-4">
                  <h4 className="text-sm font-semibold text-black font-worksans mb-3 flex items-center">
                    <Icon name="FolderOpen" size={16} className="mr-2 text-[#0077FF]" />
                    Key Contributions
                  </h4>
                  <ul className="space-y-3 mb-4">
                    {internship.highlights?.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-muted-foreground font-worksans"
                      >
                        <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {internship.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#0077FF]/10 text-[#0077FF] text-xs rounded-full font-worksans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {internship.verificationUrl && (
                    <a
                      href={internship.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 mt-4 text-sm font-medium text-[#0077FF] hover:underline font-worksans"
                    >
                      <span>View Certificate</span>
                      <Icon name="ExternalLink" size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
