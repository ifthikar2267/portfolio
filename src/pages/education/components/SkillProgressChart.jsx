import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SkillProgressChart = ({ skillData }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-brand-lg">
          <p className="font-semibold text-foreground">{label}</p>
          <p className="text-primary">
            Proficiency: {payload?.[0]?.value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-bold text-black font-worksans">Skill Development Progress</h3>
        {/* <div className="text-sm text-muted-foreground">
          Based on education & practice
        </div> */}
      </div>
      
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={skillData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="name" 
              stroke="var(--color-muted-foreground)"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="proficiency" 
              fill="url(#skillGradient)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
             <linearGradient id="skillGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0077FF" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#005FCC" stopOpacity={0.7} />
            </linearGradient>

            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SkillProgressChart;