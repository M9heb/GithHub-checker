import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = (props) => {
  const chartData = () => {
    return {
      labels: props.languages.map((language) => language.label),
      datasets: [
        {
          label: "Stars per Language",
          data: getData(),
        },
      ],
    };
    function getData() {
      const languageArray = Object.values(props.languages);
      return languageArray.map((language) => language.stars);
    }
  };
  return (
    <div className="chart">
      <Doughnut
        data={chartData()}
        options={{
          plugins: {
            title: {
              font: {
                size: 22,
                family: "open sans",
              },
              display: true,
              text: "Stars per language",
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
