import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }
    function search() {
        //documentation:  https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="search"
                            onChange={handleKeywordChange}
                            placeholder="Search a word..."
                            className="form-control form-control-lg"
                            defaultValue={props.defaultKeyword}
                        />
                    </form>
                    <div className="hint">
                        Suggested words: sunset, wine, yoga, plants...
                    </div>
                </section>

                <Results results={results} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}
