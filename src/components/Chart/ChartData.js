import axios from "axios";
import { useEffect, useState } from "react";

const LanguageData = (props) => {
  const [repos, setRepos] = useState([]);
  const [languageurlData, setLanguageurlData] = useState([]);
  const [summarizedData, setSummarizedData] = useState({});
  useEffect(() => {
    if (languageurlData.length === repos.length) {
      setSummarizedData(summarizeLanguages());
    }
  });
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

  useEffect(() => {
    fetchData();
  }, []);

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
  props.summarizedData(summarizedData);
  props.completeData(languageurlData);
};

export default LanguageData;
