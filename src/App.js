import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./components/Home/Home";
import NewItem from "./components/NewItem/NewItem";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div >
          <header>
            <nav className="nav">
              <Link to="/">
                <button>Home</button>
              </Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewItem />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
