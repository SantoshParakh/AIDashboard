import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface UsageStatisticsProps {
  byPlatform: { [key: string]: number };
  byCountry: { [key: string]: number };
}

const UsageStatistics: React.FC<UsageStatisticsProps> = ({ byPlatform, byCountry }) => {
  const platformData = Object.keys(byPlatform).map(platform => ({ platform, count: byPlatform[platform] }));
  const countryData = Object.keys(byCountry).map(country => ({ country, count: byCountry[country] }));

  return (
    <div>
      <h2>Usage Statistics by Platform</h2>
      <div style={{ width: '50%', margin: 'auto' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={platformData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="platform" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2>Usage Statistics by Country</h2>
      <div style={{ width: '50%', margin: 'auto' }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={countryData} dataKey="count" nameKey="country" cx="50%" cy="50%" outerRadius={100}>
              {countryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`#${index }`} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsageStatistics;
