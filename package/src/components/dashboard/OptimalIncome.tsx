import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { Box, Typography } from '@mui/material';

Chart.register(ArcElement);

interface Props {
  optimalIncome: number;
  populationBelowOptimalIncome: number;
}

const OptimalIncomeChart: React.FC<Props> = ({ optimalIncome, populationBelowOptimalIncome }) => {
  const chartData = {
    labels: ['Optimal Income', 'Remaining Optimal Income'],
    datasets: [
      {
        data: [populationBelowOptimalIncome, 100 - populationBelowOptimalIncome],
        backgroundColor: ['#f44336', '#000000'],
        hoverBackgroundColor: ['#ff7043', '#000000'],
        borderColor: ['#fff', '#fff'],
        fontFamily:'adamina',
      },
    ],
  };

  const chartOptions = {
    cutout: '75%',
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const,
        labels: {
          usePointStyle: false,
          pointStyle: 'circle',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: `Population below optimal income of $${optimalIncome}`,
        font: {
          size: 16,
        },
        fontFamily:'adamina',
      },
    },
  };

  return (
    <Box sx={{ width: '300px', height: '200px' }}>
      <Doughnut data={chartData} options={chartOptions} />
    </Box>
  );
};

export default OptimalIncomeChart;