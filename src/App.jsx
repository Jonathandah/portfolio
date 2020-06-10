import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";
import Home from "./Views/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App__header"></header>
        <aside className="App__sidebar">
          <span className="material-icons">home</span>
          <span className="material-icons">face</span>
          <span className="material-icons">work</span>
          <span className="material-icons">alternate_email</span>
        </aside>
        <main className="App__main">
          <Route exact path="/" component={Home} />
        </main>
        <footer className="App__footer"></footer>
      </div>
    </Router>
  );
}

export default App;
