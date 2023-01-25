import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/components/header/Header";
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path='/'>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
