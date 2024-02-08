import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Box, Typography } from '@mui/material';

Chart.register(CategoryScale, LinearScale,BarElement);

interface Props {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
}

const BarChart: React.FC<Props> = ({ data }) => {
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'square',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Bar Chart Example',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <Box sx={{ width: '100%', height: '300px',display:'flex' }}>
      <Bar data={data} options={chartOptions} />
    </Box>
  );
};

export default BarChart;