import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import StreamViewer from "./pages/StreamViewer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <StreamViewer />
      </div>
    </div>
  );
}

export default App;
