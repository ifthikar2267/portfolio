import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email',
      description: 'Best for detailed project discussions',
      value: 'meetifthikarhere@gmail.com',
      action: 'Send Email',
      href: 'mailto:meetifthikarhere@gmail.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn',
      description: 'Professional networking and quick connections',
      value: '/in/ifthikar-mj',
      action: 'Connect',
      href: 'https://www.linkedin.com/in/ifthikar-mj-59b8a8250',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'github',
      icon: 'Github',
      title: 'GitHub',
      description: 'Code collaboration and technical discussions',
      value: '@ifthikar2267',
      action: 'Follow',
      href: 'https://github.com/ifthikar2267',
      color: 'text-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      icon: 'Twitter',
      href: 'https://twitter.com/alexdev',
      color: 'text-blue-500 hover:text-blue-600'
    },
    {
      name: 'Discord',
      icon: 'MessageCircle',
      href: 'https://discord.gg/alexdev',
      color: 'text-indigo-500 hover:text-indigo-600'
    },
    {
      name: 'Telegram',
      icon: 'Send',
      href: 'https://t.me/alexdeveloper',
      color: 'text-blue-400 hover:text-blue-500'
    },
    {
      name: 'WhatsApp',
      icon: 'MessageSquare',
      href: 'https://wa.me/15551234567',
      color: 'text-green-500 hover:text-green-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Primary Contact Methods */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`p-6 rounded-xl border ${method?.borderColor} ${method?.bgColor} hover:shadow-md transition-all duration-200 group`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${method?.bgColor} border ${method?.borderColor} group-hover:scale-105 transition-transform duration-200`}>
                  <Icon name={method?.icon} size={24} className={method?.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-1">{method?.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{method?.description}</p>
                  <p className="text-sm font-mono text-foreground mb-3 break-all">{method?.value}</p>
                  <a
                    href={method?.href}
                    target={method?.id === 'email' || method?.id === 'phone' ? '_self' : '_blank'}
                    rel={method?.id === 'email' || method?.id === 'phone' ? '' : 'noopener noreferrer'}
                    className={`inline-flex items-center space-x-2 text-sm font-medium ${method?.color} hover:underline transition-colors duration-200`}
                  >
                    <span>{method?.action}</span>
                    <Icon name="ExternalLink" size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Media Links */}
      {/* <div>
        <h4 className="text-lg font-semibold text-foreground mb-4">Connect on Social</h4>
        <div className="flex flex-wrap gap-3">
          {socialLinks?.map((social) => (
            <a
              key={social?.name}
              href={social?.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors duration-200 ${social?.color}`}
            >
              <Icon name={social?.icon} size={18} />
              <span className="text-sm font-medium">{social?.name}</span>
            </a>
          ))}
        </div>
      </div> */}
      {/* Quick Actions */}
      {/* <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
        <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="justify-start"
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.open('https://calendly.com/alexdeveloper/consultation', '_blank')}
          >
            Schedule Consultation
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            iconName="Download"
            iconPosition="left"
            onClick={() => {
              // Simulate resume download
              const link = document.createElement('a');
              link.href = '/assets/resume/Alex_Developer_Resume.pdf';
              link.download = 'Alex_Developer_Resume.pdf';
              link?.click();
            }}
          >
            Download Resume
          </Button>
        </div>
      </div> */}
      {/* Response Time & Availability */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
            <Icon name="Clock" size={24} className="text-accent" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Response Time & Availability</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Email responses: Within 24 hours</p>
              <p>• LinkedIn messages: Within 12 hours</p>
              <p>• Currently accepting new projects starting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;