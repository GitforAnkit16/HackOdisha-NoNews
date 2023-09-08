

import  Home from "./Components/Home/Home";

import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    
    
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/home" element = { <Home />}></Route>
        <Route path="/" component={Post} />
      </Routes>
      </BrowserRouter>
      </div>
   
    
  );
}

export default App;
