
import "./News.css"
import React, { useEffect, useState,useCallback } from 'react';

const API_KEY = "279a65d79679498fbb8074dea6abb456";
const url = "https://newsapi.org/v2/everything?q=";
function NewsApp() {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState('India');
    const [curSelectedNav, setCurSelectedNav] = useState(null);
  
    const fetchNews = useCallback(async (query) => {
      try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        bindData(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }, []);
  
    useEffect(() => {
      fetchNews(query);
    }, [query, fetchNews]);


  function bindData(articles) {
    setArticles(articles);
  }

  function handleSearch() {
    if (!query) return;
    fetchNews(query);
    setCurSelectedNav(null);
  }

  function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    setCurSelectedNav(navItem);
    navItem?.classList.add("active");
  }

  return (
    <div>
      <nav>
        <div className="main-nav containerNews flex">
          <div className="nav-links">
            <ul className="flex">
              <li className={`hover-link nav-item ${curSelectedNav === 'Technology' ? 'active' : ''}`} id="Technology" onClick={() => onNavItemClick('Technology')}>Technology</li>
              <li className={`hover-link nav-item ${curSelectedNav === 'finance' ? 'active' : ''}`} id="finance" onClick={() => onNavItemClick('finance')}>Finance</li>
              <li className={`hover-link nav-item ${curSelectedNav === 'politics' ? 'active' : ''}`} id="politics" onClick={() => onNavItemClick('politics')}>Politics</li>
              <li className={`hover-link nav-item ${curSelectedNav === 'Sports' ? 'active' : ''}`} id="Sports" onClick={() => onNavItemClick('Sports')}>Sports</li>
            </ul>
          </div>
          <div className="search-bar flex">
            <input
              id="search-text"
              type="text"
              className="news-input"
              placeholder="e.g. Science"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button id="search-button" className="search-button" onClick={handleSearch}>Search</button>
          </div>
        </div>
      

      <main>
        <div className="cards-container containerNews flex" id="cards-container">
          {articles.map((article, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                {article.urlToImage && <img src={article.urlToImage} alt="news-image" id="news-img" />}
              </div>
              <div className="card-content">
                <h3 id="news-title">{article.title}</h3>
                <h6 className="news-source" id="news-source">
                  {article.source.name} · {new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })}
                </h6>
                <p className="news-desc" id="news-desc">{article.description}</p>
                <button onClick={() => window.open(article.url, "_blank")}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      </nav>
    </div>
  );
}



export default NewsApp;
