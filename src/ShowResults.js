import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./ShowResults.css";


export default function ShowResults(props) {

    if (props.results) {
        return (
            <div className="Results">


                {props.results.phonetics.map(function (phonetic, index) {
                    return (
                        <span className="playButton" key={index}>
                            <Phonetic phonetic={phonetic} />
                        </span>
                    )
                })}

                <h2 className="word">
                    {props.results.word}
                </h2>
                <hr />

                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section key={index}>
                            <Meaning meaning={meaning} />
                        </section>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }

}