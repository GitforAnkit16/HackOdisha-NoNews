import React from "react";
import "./TopBar.css";
import {Route,Routes,useNavigate} from "react-router-dom";
import NewsSection from "../News/News.js"
import FeedSection from "../Feed/Feed.js"
import NewsgroundSection from "../NewsGround/Newsground.js";

const TopBar = () => {
    const navigate = useNavigate();
  
    const navigateToNews = () => {
      navigate("/News");
    };
  
    const navigateFeed = () => {
      navigate("/Feed");
    };
    const navigateNewsground = () => {
        navigate("/Newsground")
    }
    return <div className = "top">
          <button onClick={navigateToNews} className="topNews">News</button>
          <button onClick={navigateFeed}>Feed</button>
          <button onClick={navigateNewsground}>Newsground</button>
          <Routes>
            <Route path="/News" element={<News />} />
            <Route path="/Feed" element={<Feed />} />
            <Route path="/Newsground" element={<Newsground />} />

          </Routes>
       
    </div>
};
export default TopBar;


function News() {
    return <NewsSection />;
  }
  
function Feed() {
    return (
      <FeedSection />
    );
  }

  function Newsground() {
    return <NewsgroundSection />;
  }