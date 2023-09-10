import React from "react";
import "./Home.css";
import Topbar from "./Navbar/TopBar/TopBar.js"
import Navbar from "./Navbar/Navbar.js";

import {Route,Routes} from "react-router-dom";
const Home = () => {

    return <div className = "Home">
        <Navbar />
        <Topbar />
       
    </div>
}

export default Home; 