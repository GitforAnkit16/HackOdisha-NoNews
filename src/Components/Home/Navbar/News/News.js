import "./News.css";
import React, { useEffect, useState, useCallback } from 'react';

const API_KEY = "279a65d79679498fbb8074dea6abb456"; // Replace with your actual API key
const BASE_URL = "https://newsapi.org/v2/everything";

function NewsApp() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('India');
  const [curSelectedNav, setCurSelectedNav] = useState(null);

  const fetchNews = useCallback(async (searchQuery) => {
    try {
      const response = await fetch(`${BASE_URL}?q=${searchQuery}&apiKey=${API_KEY}`);
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      // You can add user-friendly error handling here
    }
  }, []);

  useEffect(() => {
    fetchNews(query);
  }, [query, fetchNews]);

  function handleSearch() {
    if (!query) return;
    fetchNews(query);
    setCurSelectedNav(null);
  }

  function onNavItemClick(id) {
    fetchNews(id);
    setCurSelectedNav(id);
  }

  return (
    <div>
      <nav>
        <div className="main-nav containerNews flex">
          <div className="nav-links">
            <ul className="flex">
              <li className={`hover-link nav-item ${curSelectedNav === 'Technology' ? 'active' : ''}`} onClick={() => onNavItemClick('Technology')}>Technology</li>
              <li className={`hover-link nav-item ${curSelectedNav === 'finance' ? 'active' : ''}`} onClick={() => onNavItemClick('finance')}>Finance</li>
              <li className={`hover-link nav-item ${curSelectedNav === 'politics' ? 'active' : ''}`} onClick={() => onNavItemClick('politics')}>Politics</li>
              <li className={`hover-link nav-item ${curSelectedNav === 'Sports' ? 'active' : ''}`} onClick={() => onNavItemClick('Sports')}>Sports</li>
            </ul>
          </div>
          <div className="search-bar flex">
            <input
              type="text"
              className="news-input"
              placeholder="e.g. Science"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="cards-container containerNews flex" id="cards-container">
          {articles.map((article, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                {article.urlToImage && <img src={article.urlToImage} alt="news" className="news-img" />}
              </div>
              <div className="card-content">
                <h3 className="news-title">{article.title}</h3>
                <h6 className="news-source">
                  {article.source.name} · {new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })}
                </h6>
                <p className="news-desc">{article.description}</p>
                <button onClick={() => window.open(article.url, "_blank")}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default NewsApp;
