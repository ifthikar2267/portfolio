import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationCard = ({ certification }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-green-600 bg-green-50';
      case 'Expired':
        return 'text-red-600 bg-red-50';
      case 'Renewal Due':
        return 'text-amber-600 bg-amber-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'Professional':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Associate':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Foundational':
        return 'text-gray-600 bg-gray-50 border-gray-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <Icon name={certification?.icon} size={32} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{certification?.name}</h3>
            <p className="text-sm text-muted-foreground">{certification?.issuer}</p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(certification?.status)}`}>
            {certification?.status}
          </span>
          <span className={`px-2 py-1 rounded border text-xs font-medium ${getLevelColor(certification?.level)}`}>
            {certification?.level}
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {certification?.description}
      </p>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={14} />
            <span>Earned: {certification?.earnedDate}</span>
          </div>
          {certification?.expiryDate && (
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>Expires: {certification?.expiryDate}</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {certification?.skills?.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Icon name="Award" size={14} />
          <span>ID: {certification?.credentialId}</span>
        </div>
        <div className="flex items-center space-x-2">
          {certification?.verificationUrl && (
            <Button
              variant="outline"
              size="xs"
              onClick={() => window.open(certification?.verificationUrl, '_blank')}
              iconName="ExternalLink"
              iconPosition="right"
              iconSize={12}
            >
              Verify
            </Button>
          )}
          {certification?.badgeUrl && (
            <Button
              variant="ghost"
              size="xs"
              onClick={() => window.open(certification?.badgeUrl, '_blank')}
              iconName="Shield"
              iconSize={12}
            >
              Badge
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;