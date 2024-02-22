import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RatingData {
  rating: number;
  count: number;
}

interface UserSatisfactionProps {
  ratings: RatingData[];
}

const UserSatisfaction: React.FC<UserSatisfactionProps> = ({ ratings }) => {
  return (
    <div>
      <h2>User Satisfaction Ratings</h2>
      <div style={{ width: '50%', margin: 'auto' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ratings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rating" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserSatisfaction;
