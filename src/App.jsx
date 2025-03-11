import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from "./Components/AppHeader";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <AppHeader />

        <div id="home"><Home /></div>  {/* Home contains all sections with IDs */}
        <div id="about"><About /></div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;