import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import ShowResults from "./ShowResults";

export default function DictionarySearch() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0])
    }

    function Search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function KeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={Search} >
                <input type="search" onChange={KeywordChange} />
            </form>

            <ShowResults results={results} />

        </div>
    );
}