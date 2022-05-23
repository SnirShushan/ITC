import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Order from "./components/Order";
import Icon from "./components/Icon";


function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Route path="/Home" exact component={Home} />
        <Route path="/Products" exact component={Products} />
        <Route path="/Order" exact component={Order}/>
        <Route path="/Icon" exact component={Icon}/>
      </Router>
      
      <div className="footer-copyright text-center text-light bg-dark mt-4 p-2 fixed-absolute">
      <h5>All rights reserved © ITC - International Trade-in Company</h5>
     </div>
    </div>
  );
}

export default App;
