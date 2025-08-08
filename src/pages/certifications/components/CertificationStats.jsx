import React from 'react';
import Icon from '../../../components/AppIcon';

const CertificationStats = ({ certifications }) => {
  const stats = {
    total: certifications?.length,
    active: certifications?.filter(cert => cert?.status === 'Active')?.length,
    expert: certifications?.filter(cert => cert?.level === 'Expert')?.length,
    thisYear: certifications?.filter(cert => {
      const earnedYear = new Date(cert.earnedDate)?.getFullYear();
      return earnedYear === new Date()?.getFullYear();
    })?.length
  };

  const statItems = [
    {
      label: 'Total Certifications',
      value: stats?.total,
      icon: 'Award',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Active Certifications',
      value: stats?.active,
      icon: 'CheckCircle',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Expert Level',
      value: stats?.expert,
      icon: 'Star',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Earned This Year',
      value: stats?.thisYear,
      icon: 'TrendingUp',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems?.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl p-4 hover:shadow-brand transition-all duration-200"
        >
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg ${stat?.bgColor} flex items-center justify-center`}>
              <Icon name={stat?.icon} size={20} className={stat?.color} />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{stat?.value}</div>
              <div className="text-xs text-muted-foreground">{stat?.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationStats;