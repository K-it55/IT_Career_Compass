import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ResultScores = {
    frontend: number;
    backend: number;
    infra: number;
    security: number;
    data: number;
    pm: number;
};

interface ChartProps {
  scores: ResultScores;
}

const ChartComponent: React.FC<ChartProps> = ({ scores }) => {
  const data = {
    labels: ['フロントエンド', 'バックエンド', 'インフラ', 'セキュリティ', 'データサイエンス', 'PM/コンサル'],
    datasets: [
      {
        label: 'スコア',
        data: Object.values(scores),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'あなたの適職スコア',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 75, // 15問 x 5点満点 = 最大75点
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;