import axios from "axios";
import { useEffect, useState } from "react";
import PieChart from "./PieChart";

const ChartContainer = (props) => {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState(null);
  const [mostUsed, setMostUsed] = useState(null);
  const [mostPopular, setMostPopular] = useState(null);
  const [stars, setStars] = useState(null);
  const [forks, setForks] = useState(null);
  useEffect(() => {
    console.log(repos);
    console.log(languages, "lanugages");
    console.log(mostUsed);
    console.log(mostPopular);
    console.log(stars);
    console.log(forks);
  }, [repos, languages, mostPopular, mostUsed, stars, forks]);

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

      const mostPopularLanguages = Object.values(languages)
        .sort((a, b) => b.stars - a.stars)
        .map((item) => ({ ...item, value: item.stars }))
        .slice(0, 5);
      setMostPopular(mostPopularLanguages);

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
      {languages && <PieChart languages={languages} />}
    </div>
  );
};

export default ChartContainer;
