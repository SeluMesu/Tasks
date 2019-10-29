import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Routes from "./config/Routes";

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes />
            </div>
        </Router>
    );
}
export default App;
