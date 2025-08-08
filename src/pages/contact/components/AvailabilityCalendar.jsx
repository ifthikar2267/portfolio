import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Mock availability data
  const currentDate = new Date();
  const availabilityData = {
    '2025-01-08': { status: 'busy', slots: [] },
    '2025-01-09': { status: 'available', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
    '2025-01-10': { status: 'available', slots: ['9:00 AM', '11:00 AM', '3:00 PM'] },
    '2025-01-11': { status: 'busy', slots: [] },
    '2025-01-12': { status: 'busy', slots: [] },
    '2025-01-13': { status: 'available', slots: ['10:00 AM', '1:00 PM'] },
    '2025-01-14': { status: 'available', slots: ['9:00 AM', '2:00 PM', '4:00 PM'] },
    '2025-01-15': { status: 'available', slots: ['11:00 AM', '3:00 PM'] },
    '2025-01-16': { status: 'busy', slots: [] },
    '2025-01-17': { status: 'available', slots: ['10:00 AM', '2:00 PM'] }
  };

  const projectStatus = {
    current: 'Building E-commerce Platform for TechCorp',
    nextAvailable: 'February 15, 2025',
    workload: 85
  };

  const generateCalendarDays = () => {
    const days = [];
    const startDate = new Date(2025, 0, 6); // January 6, 2025 (Monday)
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(startDate);
      date?.setDate(startDate?.getDate() + i);
      
      const dateStr = date?.toISOString()?.split('T')?.[0];
      const dayName = date?.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNum = date?.getDate();
      const availability = availabilityData?.[dateStr] || { status: 'unavailable', slots: [] };
      
      days?.push({
        date: dateStr,
        dayName,
        dayNum,
        ...availability
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleDateSelect = (date, availability) => {
    if (availability?.status === 'available') {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookConsultation = () => {
    if (selectedDate && selectedTime) {
      // Simulate booking
      alert(`Consultation booked for ${selectedDate} at ${selectedTime}. You'll receive a confirmation email shortly.`);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 border-green-200 text-green-800 hover:bg-green-200';
      case 'busy':
        return 'bg-red-100 border-red-200 text-red-800';
      default:
        return 'bg-gray-100 border-gray-200 text-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available':
        return 'CheckCircle';
      case 'busy':
        return 'X';
      default:
        return 'Minus';
    }
  };

  return (
    <div className="space-y-8">
      {/* Current Project Status */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start space-x-4 mb-6">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <Icon name="Briefcase" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Current Availability</h3>
            <p className="text-muted-foreground">
              Here's my current project status and availability for new engagements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">{projectStatus?.workload}%</div>
            <div className="text-sm text-muted-foreground">Current Workload</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-sm font-semibold text-foreground mb-1">Current Project</div>
            <div className="text-xs text-muted-foreground">{projectStatus?.current}</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-sm font-semibold text-foreground mb-1">Next Available</div>
            <div className="text-xs text-muted-foreground">{projectStatus?.nextAvailable}</div>
          </div>
        </div>
      </div>
      {/* Consultation Booking */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-6">Book a Consultation</h3>
        
        {/* Calendar */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-foreground mb-4">Select a Date</h4>
          <div className="grid grid-cols-7 gap-2">
            {calendarDays?.map((day) => (
              <button
                key={day?.date}
                onClick={() => handleDateSelect(day?.date, day)}
                disabled={day?.status !== 'available'}
                className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                  selectedDate === day?.date
                    ? 'bg-primary text-white border-primary'
                    : getStatusColor(day?.status)
                } ${day?.status === 'available' ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              >
                <div className="text-xs font-medium">{day?.dayName}</div>
                <div className="text-lg font-bold">{day?.dayNum}</div>
                <Icon 
                  name={getStatusIcon(day?.status)} 
                  size={12} 
                  className="mx-auto mt-1" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Available Times for {new Date(selectedDate)?.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availabilityData?.[selectedDate]?.slots?.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                    selectedTime === time
                      ? 'bg-primary text-white border-primary' :'bg-background border-border hover:bg-muted/50 text-foreground'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Book Button */}
        {selectedDate && selectedTime && (
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">
                  {new Date(selectedDate)?.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })} at {selectedTime}
                </p>
                <p className="text-sm text-muted-foreground">30-minute consultation call</p>
              </div>
              <Button
                variant="default"
                onClick={handleBookConsultation}
                className="gradient-primary hover:opacity-90"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
            <span className="text-muted-foreground">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
            <span className="text-muted-foreground">Busy</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded"></div>
            <span className="text-muted-foreground">Unavailable</span>
          </div>
        </div>
      </div>
      {/* Consultation Types */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h4 className="text-lg font-semibold text-foreground mb-4">Consultation Types</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h5 className="font-semibold text-foreground mb-2">Technical Consultation</h5>
            <p className="text-sm text-muted-foreground mb-2">
              Architecture review, technology stack discussion, and technical planning.
            </p>
            <p className="text-sm font-medium text-primary">30 minutes - Free</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h5 className="font-semibold text-foreground mb-2">Project Discovery</h5>
            <p className="text-sm text-muted-foreground mb-2">
              Detailed project scoping, timeline estimation, and proposal preparation.
            </p>
            <p className="text-sm font-medium text-primary">60 minutes - Free</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;