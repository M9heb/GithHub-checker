import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = (props) => {
  const chartData = () => {
    return {
      labels: props.mostPopular.map((repo) => repo.name),
      datasets: [
        {
          label: "MostPopular repos",
          data: props.mostPopular.map((repo) => repo.stargazers_count),
        },
      ],
    };
  };
  return (
    <div className="chart">
      <Bar data={chartData()} />
    </div>
  );
};

export default BarChart;
