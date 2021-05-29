import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
    let [keyword, setKeyword] = useState("")

    function Search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function KeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={Search} >
                <input type="search" autofocus={true} onChange={KeywordChange} />
            </form>
        </div>
    );
}