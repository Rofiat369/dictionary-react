import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import ShowResults from "./ShowResults";
import Photos from "./Photos";

export default function DictionarySearch(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0])
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function Search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001f9cf9f9ae1154d35a24690e883de9da8";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        Search();
    }

    function KeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        Search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1> What word do you want to look up? </h1>
                    <form onSubmit={handleSubmit} >
                        <input type="search" onChange={KeywordChange} defaultValue={props.defaultKeyword} />
                    </form>
                </section>
                <ShowResults results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "loading";
    }
}