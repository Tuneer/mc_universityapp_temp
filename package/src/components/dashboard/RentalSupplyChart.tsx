import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, PointElement,BarElement,CategoryScale, LinearScale, } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend,Title,PointElement,CategoryScale, LinearScale,BarElement);

interface RentalSupplyChartProps {
  currentStock: number[];
  newStock: number[];
  heading: string
}

const labels = ['OB', '1B', '2B', '3B+'];

const RentalSupplyChart: React.FC<RentalSupplyChartProps> = ({ currentStock, newStock,heading }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'CURRENT STOCK',
        data: currentStock,
        backgroundColor: '#683733',
        borderColor: '#683733',
        borderWidth: 0,
      },
      {
        label: 'NEW STOCK ADDED',
        data: newStock,
        backgroundColor: '#C1AC7F',
        borderColor: '#C1AC7F',
        borderWidth: 0,
      },
    ],
  };

  const optionsline = {
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
          text: heading,
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
    <Box sx={{ width: '100%', height: '300px', }}>
      <Bar data={data} options={optionsline} />;
    </Box>
  );
};

export default RentalSupplyChart;