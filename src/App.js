import React from "react";
import "./App.css";
import Clusters from "./components/clusters";
import Articles from "./components/articles";
import Websites from "./components/websites";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>All News</h2>
      </header>
      <main>
        <Clusters />
        <Articles />
        <Websites />
      </main>
    </div>
  );
}

export default App;
