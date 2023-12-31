import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = (props) => {
  const chartData = () => {
    return {
      labels: props.languages.map((language) => language.label),
      datasets: [
        {
          label: "Popularity",
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
      <Pie
        data={chartData()}
        options={{
          plugins: {
            title: {
              font: {
                size: 22,
                family: "open sans",
              },
              display: true,
              text: "Most Popular languase",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
