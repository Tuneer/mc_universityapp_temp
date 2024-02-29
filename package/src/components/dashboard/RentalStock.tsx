import React from 'react';
import { Pie } from 'react-chartjs-2';

interface DataProps {
  affordable: number;
  total: number;
  unaffordable: number;
}

interface Props {
  data: DataProps;
}

const PieChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: ['Affordable', 'Unaffordable'],
    datasets: [
      {
        data: [data.affordable, data.unaffordable],
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  return (
    <div>
      <h2>Affordability Overview</h2>
      <Pie data={chartData} />
      <p>
        Out of a total supply of {data.total} units, {data.affordable} are
        affordable.
      </p>
      <p>
        Affordable: {data.affordable} units (55%)
      </p>
      <p>
        Unaffordable: {data.unaffordable} units (45%)
      </p>
    </div>
  );
};

export default PieChart;