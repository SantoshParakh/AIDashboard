import React from 'react';
import { PieChart, Cell, Pie, Legend, Tooltip } from 'recharts';

interface CategoryDistributionProps {
  categoryDistributionData: { metric: string; value: number }[];
}

const CategoryDistributionChart: React.FC<CategoryDistributionProps> = ({categoryDistributionData}) => {
    const generateRandomColor = () => '#' + (Math.random().toString(16) + '000000').slice(2, 8);


   
  return (
    <>
    <h1> Category Dashboard</h1>
    <PieChart width={400} height={400}>
      <Pie
        data={categoryDistributionData}
        dataKey="value"
        nameKey="metric"  
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
         {categoryDistributionData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={generateRandomColor() } />
        ))} 
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
   
    </>
  );
};

export default CategoryDistributionChart;
