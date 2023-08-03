import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
// const [labels, setLabels] = useState(["html", "css", "javascript"]);

const PieChart = (props) => {
  const [repos, setRepos] = useState([]);
  const [languageurlData, setLanguageurlData] = useState([]);
  const [summarizedData, setSummarizedData] = useState({});
  useEffect(() => {
    fetchData();
  }, [props.username]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${props.username}/repos?per_page=100`
      );
      if (response.status === 200) {
        setRepos(response.data);

        const dataPromises = response.data.map((item) =>
          fetch(item.languages_url)
        );
        const responses = await Promise.all(dataPromises);

        const languageDataArray = await Promise.all(
          responses.map(async (response) => {
            if (response.ok) {
              return await response.json();
            } else {
              console.log("Error fetching data:", response.status);
              return null;
            }
          })
        );

        setLanguageurlData(languageDataArray);
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    if (languageurlData.length === repos.length) {
      setSummarizedData(summarizeLanguages(languageurlData));
    }
  }, [languageurlData, repos.length]);
  const summarizeLanguages = (dataArray) => {
    const summarizedObject = {};

    dataArray.forEach((data) => {
      for (const language in data) {
        if (data.hasOwnProperty(language)) {
          summarizedObject[language] =
            (summarizedObject[language] || 0) + data[language];
        }
      }
    });

    return summarizedObject;
  };

  const chartData = () => {
    return {
      labels: Object.getOwnPropertyNames(summarizedData),
      datasets: [
        {
          label: "languages",
          data: Object.values(summarizedData),
        },
      ],
    };
  };
  return (
    <div className="chart">
      {Object.keys(summarizedData).length > 0 && <Pie data={chartData()} />}
    </div>
  );
};

export default PieChart;
