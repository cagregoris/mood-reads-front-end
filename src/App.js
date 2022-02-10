import React, {useState, useEffect} from "react";
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//COMPONENTS
import About from "./Components/About";
import BackButton from "./Components/BackButton";
import Intro from "./Components/Intro";
import ListBooks from "./Components/ListBooks";
import ListCategories from "./Components/ListCategories";
import ListMoods from "./Components/ListMoods";
import Nav from "./Components/Nav";

//STYLES
import "./Styles/About.css"
import "./Styles/BackButton.css"
import "./Styles/Intro.css"
import "./Styles/ListBooks.css"
import "./Styles/ListCategories.css"
import "./Styles/ListMoods.css"
import "./Styles/Nav.css"

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path = '/' exact element={<Intro/>} />
          <Route path = '/about' exact element={<About/>} />
          <Route path = '/categories' exact element={<ListCategories/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
