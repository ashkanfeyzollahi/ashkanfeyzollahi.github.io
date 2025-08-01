import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import NavigationBar from "./components/navigationbar";
import Projects from "./components/projects";
import Talents from "./components/talents";

function App() {
    return (
        <div className="app">
            <NavigationBar />
            <Header />
            <Talents />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
