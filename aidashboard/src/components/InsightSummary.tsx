import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface InsightSummaryData {
  metric: string;
  value: number;
}

interface InsightSummaryChartProps {
  insightSummaryData: InsightSummaryData[];
}

const InsightSummaryChart: React.FC<InsightSummaryChartProps> = ({ insightSummaryData }) => {
    const generateRandomColor = () => '#' + (Math.random().toString(16) + '000000').slice(2, 8);

  return (
    
    <>
    <h1>Insight Summary</h1>
    <BarChart width={600} height={400} data={insightSummaryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="metric" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill={generateRandomColor()} />
    </BarChart>
    
    </>
  );
};

export default InsightSummaryChart;
