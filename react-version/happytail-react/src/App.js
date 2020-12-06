import React from 'react';
import {     BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import HomePage from "./pages/home";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div>
      <Router>
      <Navigation/>
      <Switch>
        <Route path="/"><HomePage/></Route>
        <Route path="/services"></Route>
        <Route path="/pricing"></Route>
        <Route path="/blog"></Route>
        <Route path="/about"></Route>
        <Route path="/contact"></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
