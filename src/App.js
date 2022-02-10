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

//STYLES
import "./Styles/About.css"
import "./Styles/BackButton.css"
import "./Styles/Intro.css"
import "./Styles/ListBooks.css"
import "./Styles/ListCategories.css"
import "./Styles/ListMoods.css"
import "./Styles/Nav.css"

function App() {

  const [category, setCategory] = useState("");
  const [moody, setMoody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(category)
  }

  const moodsObj = {
    "Unpleasant-Energized" : ["fearful", "angry"],
    "Unpleasant-Calm" : ["sad", "ominous"],
    "Pleasant-Energized" : ["cheerful", "humorous", "idylic", "adventurous"],
    "Pleasant-Calm" : ["hopeful", "whimsical", "reflective", "romantic"]
  } 

  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path = '/' exact element={<Intro/>} />
          <Route path = '/about' exact element={<About/>} />
          <Route path = '/categories' exact element={<ListCategories handleSubmit={handleSubmit} setCategory={setCategory}/>} />
          <Route path = '/moods' exact element={ category ? <ListMoods handleSubmit={handleSubmit} category={category} moodsObj={moodsObj} moody={moody} setMoody={setMoody}/> : <Intro/>} />
          <Route path = '/books' exact element={ category ? <ListBooks moody={moody}/> : <Intro/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
