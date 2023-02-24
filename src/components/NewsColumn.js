import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsColumn.css';

const NewsColumn = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c4206027ac8d48cd833ee74d4c4e6afa');
      setArticles(response.data.articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="news-column">
      {articles.map((article, index) => (
        <div className="news-item" key={index}>
          <img src={article.urlToImage} alt="Article thumbnail" />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsColumn;
