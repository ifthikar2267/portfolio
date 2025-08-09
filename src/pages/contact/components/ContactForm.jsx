import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    services: [],
    hasNDA: false,
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: 'full-time', label: 'Full-time Position' },
    { value: 'contract', label: 'Contract Work' },
    { value: 'collaboration', label: 'Open Source Collaboration' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const serviceOptions = [
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'backend', label: 'Backend Development' },
    { value: 'fullstack', label: 'Full-Stack Development' },
    { value: 'web', label: 'Website Development' }
    
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceChange = (service, checked) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev?.services, service]
        : prev?.services?.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        description: formData.description,
        services: formData.services.join(', '),
        preferredContact: formData.preferredContact
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_nfdbnnk',     // ⬅ Replace with EmailJS service ID
        'template_tjba5yp',    // ⬅ Replace with EmailJS template ID
        templateParams,
        'niJWn9ljVu12-Vojb'      // ⬅ Replace with EmailJS public key
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 shadow-brand-lg border border-border text-center">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} color="white" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out! I'll review your project details and get back to you within 24 hours. 
          You should receive a confirmation email shortly.
        </p>
        <Button 
          variant="outline" 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              projectType: '',
              budget: '',
              timeline: '',
              description: '',
              services: [],
              hasNDA: false,
              preferredContact: 'email'
            });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 shadow-brand-lg border border-border">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Let's Build Something Amazing</h3>
        <p className="text-muted-foreground">
          Tell me about your project and let's discuss how we can bring your vision to life.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Your Name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="Email"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
          />
        </div>

        {/* <Input
          label="Company/Organization"
          type="text"
          placeholder="Your Company Name (Optional)"
          value={formData?.company}
          onChange={(e) => handleInputChange('company', e?.target?.value)}
        /> */}

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Project Type"
            placeholder="Select project type"
            options={projectTypes}
            value={formData?.projectType}
            onChange={(value) => handleInputChange('projectType', value)}
            required
          />
          <Select
            label="Budget Range"
            placeholder="Select budget range"
            options={budgetRanges}
            value={formData?.budget}
            onChange={(value) => handleInputChange('budget', value)}
            required
          />
        </div>

        <Select
          label="Timeline"
          placeholder="When do you need this completed?"
          options={timelineOptions}
          value={formData?.timeline}
          onChange={(value) => handleInputChange('timeline', value)}
          required
        />

        {/* Services Needed */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Services Needed <span className="text-error">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {serviceOptions?.map((service) => (
              <Checkbox
                key={service?.value}
                label={service?.label}
                checked={formData?.services?.includes(service?.value)}
                onChange={(e) => handleServiceChange(service?.value, e?.target?.checked)}
              />
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Description <span className="text-error">*</span>
          </label>
          <textarea
            className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none bg-background text-foreground placeholder:text-muted-foreground"
            rows={6}
            placeholder="Please describe your project in detail. Include any specific requirements, technologies you prefer, and what success looks like for you..."
            value={formData?.description}
            onChange={(e) => handleInputChange('description', e?.target?.value)}
            required
          />
        </div>

        {/* Additional Options */}
        {/* <div className="space-y-4">
          <Checkbox
            label="I have an NDA that needs to be signed before discussing details"
            checked={formData?.hasNDA}
            onChange={(e) => handleInputChange('hasNDA', e?.target?.checked)}
          />
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Preferred Contact Method
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData?.preferredContact === 'email'}
                  onChange={(e) => handleInputChange('preferredContact', e?.target?.value)}
                  className="w-4 h-4 text-primary border-input focus:ring-2 focus:ring-ring"
                />
                <span className="text-sm text-foreground">Email</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData?.preferredContact === 'phone'}
                  onChange={(e) => handleInputChange('preferredContact', e?.target?.value)}
                  className="w-4 h-4 text-primary border-input focus:ring-2 focus:ring-ring"
                />
                <span className="text-sm text-foreground">Phone Call</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="video"
                  checked={formData?.preferredContact === 'video'}
                  onChange={(e) => handleInputChange('preferredContact', e?.target?.value)}
                  className="w-4 h-4 text-primary border-input focus:ring-2 focus:ring-ring"
                />
                <span className="text-sm text-foreground">Video Call</span>
              </label>
            </div>
          </div>
        </div> */}

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            className="gradient-primary hover:opacity-90 transition-opacity duration-200 rounded-xl"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Project Brief'}
          </Button>
        </div>
      </form>
      {/* Response Time Notice */}
      <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={20} className="text-accent mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Response Time</p>
            <p className="text-sm text-muted-foreground">
              I typically respond to project inquiries within 24 hours. For urgent matters, 
              feel free to reach out via LinkedIn or email directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;