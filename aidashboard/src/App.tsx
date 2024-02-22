import React from 'react';
import './App.css';
import AIDashboard from './components/AIDashboard';
import InsightSummaryChart from './components/InsightSummary'
import CategoryDistributionChart from './components/CategoryDistribution';
import UserSatisfaction from './components/UserSatisfaction';

function App() {
 

  const insightSummaryData = [
    {
      metric: 'Total Queries',
      value: 1500
    },
    {
      metric: 'Successful Queries',
      value: 1350
    },
    {
      metric: 'Failed Queries',
      value: 150
    },
    {
      metric: 'Average Response Time',
      value: 0.45
    }
  ];

  const categoryDistributionData = [
    {
      metric: "small_talk",
      value: 300
    },
    {
      metric:"technical_support",
      value:450
    },
    
    {
      metric:"sales_inquiries",
      value:350
    },
    {
      metric:"customer_service",
      value:444
    }
  ]

  const userSatisfactionData = [
    { rating: 1, count: 15 },
    { rating: 2, count: 35 },
    { rating: 3, count: 200 },
    { rating: 4, count: 500 },
    { rating: 5, count: 600 }
  ];
  return (
    <>
     
       <AIDashboard /> 
      <InsightSummaryChart insightSummaryData={insightSummaryData} />
      <CategoryDistributionChart categoryDistributionData={categoryDistributionData}/>
      <UserSatisfaction  ratings= {userSatisfactionData}/>
    </>
  );
}

export default App;
