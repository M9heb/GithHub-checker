import axios from "axios";
import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import BarVChart from "./BarVChart";
const ChartContainer = (props) => {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState(null);
  const [mostPopularLanguages, setMostPopularLanguages] = useState(null);
  const [mostUsed, setMostUsed] = useState(null);
  const [mostPopular, setMostPopular] = useState(null);
  const [stars, setStars] = useState(null);
  const [forks, setForks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${props.username}/repos?per_page=100`
        );

        if (response.status === 200) {
          setRepos(response.data);
        }
      } catch (error) {
        console.log("Error fetching repos: ", error);
      }
    };

    fetchData();
  }, [props.username]);

  useEffect(() => {
    if (repos.length > 0) {
      const languageData = repos.reduce((total, item) => {
        const { language, stargazers_count } = item;
        if (!language) return total;
        if (!total[language]) {
          total[language] = {
            label: language,
            value: 1,
            stars: stargazers_count,
          };
        } else {
          total[language] = {
            ...total[language],
            value: total[language].value + 1,
            stars: total[language].stars + stargazers_count,
          };
        }
        return total;
      }, {});

      setLanguages(languageData);
    }
  }, [repos]);

  useEffect(() => {
    if (languages) {
      const mostUsedLanguages = Object.values(languages)
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);
      setMostUsed(mostUsedLanguages);

      const mPopularLanguages = Object.values(languages)
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 5);
      setMostPopularLanguages(mPopularLanguages);
      const mostPopularRepos = repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map((item) => ({ ...item, value: item.stars }))
        .slice(0, 5);
      setMostPopular(mostPopularRepos);

      const { stars, forks } = repos.reduce(
        (total, item) => {
          const { stargazers_count, name, forks } = item;
          total.stars[stargazers_count] = {
            label: name,
            value: stargazers_count,
          };
          total.forks[forks] = { label: name, value: forks };
          return total;
        },
        {
          stars: {},
          forks: {},
        }
      );

      const sortedStars = Object.values(stars)
        .slice(-5)
        .sort((a, b) => a.value - b.value);
      setStars(sortedStars);

      const sortedForks = Object.values(forks)
        .slice(-5)
        .sort((a, b) => a.value - b.value);
      setForks(sortedForks);
    }
  }, [languages, repos]);

  return (
    <div className="container--chart">
      {mostPopularLanguages && <PieChart languages={mostPopularLanguages} />}
      {mostPopular && <BarChart mostPopular={mostPopular} />}
      {mostUsed && <DoughnutChart languages={mostUsed} />}
      {forks && <BarVChart forks={forks} />}
    </div>
  );
};

export default ChartContainer;
