import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = (props) => {
  const chartData = () => {
    return {
      labels: props.mostPopular.map((repo) => repo.name),
      datasets: [
        {
          label: "Popularity",
          data: props.mostPopular.map((repo) => repo.stargazers_count),
        },
      ],
    };
  };
  return (
    <div className="chart">
      <Bar
        data={chartData()}
        options={{
          plugins: {
            title: {
              font: {
                size: 22,
                family: "open sans",
              },
              display: true,
              text: "Most Popular repos",
            },
          },
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)",
            "rgba(255, 159, 64)",
            "rgba(255, 205, 86)",
            "rgba(75, 192, 192)",
          ],
          borderColor: ["#fff"],
          borderWidth: 2,
        }}
      />
    </div>
  );
};

export default BarChart;
