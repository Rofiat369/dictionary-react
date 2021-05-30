import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import ShowResults from "./ShowResults";

export default function DictionarySearch(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0])
    }

    function Search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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

            </div>
        );
    } else {
        load();
        return "loading";
    }
}