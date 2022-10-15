import React from "react";
import book from "./book.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">
                    <h1>Dictionary</h1>
                    <img src={book} className="App-logo" alt="book" />
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
