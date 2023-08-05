import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = (props) => {
  const chartData = () => {
    return {
      labels: Object.getOwnPropertyNames(props.languages),
      datasets: [
        {
          label: "languages",
          data: getData(),
        },
      ],
    };
    function getData() {
      const languageArray = Object.values(props.languages);
      return languageArray.map((language) => language.value);
    }
  };
  return (
    <div className="chart">
      <Pie data={chartData()} />
    </div>
  );
};

export default PieChart;
