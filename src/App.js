import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/navbar/Navbar";
import Foot from "./Components/Footer/Foot";
import MyProfile from "./Components/MyProfile/MyProfile";
import Test1 from "./Components/Test/Test";

function App() {
  return (
    <Router>
      <Navbar />
     <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/myprofile" component={MyProfile} />
     <Route path="/test1" component={Test1} />
     </Switch>
     <Foot />
    </Router>
   
  );
}



export default App;
