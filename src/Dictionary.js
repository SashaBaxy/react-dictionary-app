import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    function search() {
        //documentation:  https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey =
            "563492ad6f917000010000016f6302d49e10489cba44d41b88b0e100";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios
            .get(pexelsApiUrl, { headers: headers })
            .then(handlePexelsResponse);
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

                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}
