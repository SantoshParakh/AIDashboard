import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AIDashboard: React.FC = () => {
  const [aiData, setAIData] = useState<any>(null);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(res=>console.log(res))
      .then(data => setAIData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
    
        {aiData && (
        <div>
          <h2>Category Distribution</h2>
          <BarChart width={600} height={300} data={aiData.category_distributio}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      )} 
    </div>
  );
};

export default AIDashboard;
