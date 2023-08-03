import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import LanguageData from "./ChartData";
const PieChart = (props) => {
  const [summaryData, setSummaryData] = useState({});
  const [dataset, setDataset] = useState({});
  const datalabels = [];
  useEffect(() => {
    datalabels = Object.keys(summaryData);
  }, [summaryData]);
  const onSetdata = (data) => {
    setSummaryData(data);
  };
  const onSetDataset = (data) => {
    setDataset(data);
  };
  return (
    <React.Fragment>
      {/* <LanguageData
        username={props.username}
        summarizedData={onSetdata}
        completeData={onSetDataset}
      />
      <Pie data={{ labels: datalabels, data: summaryData }} /> */}
    </React.Fragment>
  );
};
// const PieChart = new Chart(ctx, {
//   type: "line",
//   data: data,
//   options: {
//     onClick: (e) => {
//       const canvasPosition = getRelativePosition(e, chart);

//       // Substitute the appropriate scale IDs
//       const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
//       const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
//     },
//   },
// });
export default PieChart;
