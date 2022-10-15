import React from "react";

import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">
                    <h1>Dictionary</h1>
                </header>
                <main>
                    <Dictionary />
                </main>
                <br />
                <footer className="App-footer">
                    <small>Coded by Sasha Baxendale</small>
                </footer>
            </div>
        </div>
    );
}
