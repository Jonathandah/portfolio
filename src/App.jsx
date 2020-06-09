import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";
import Home from "./Views/Home/Home";
import "@fortawesome/fontawesome-free";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App__header"></header>

        <main className="App__main">
          <aside className="App__sidebar">
            <span class="material-icons">home</span>
            <span class="material-icons">face</span>
            <span class="material-icons">work</span>
            <span class="material-icons">alternate_email</span>
          </aside>
          <Route exact path="/" component={Home} />
        </main>
        <footer className="App__footer"></footer>
      </div>
    </Router>
  );
}

export default App;
