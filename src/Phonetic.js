import React from "react";
import "./Phonetic.css";


export default function Phonetic(props) {

    const audio = new Audio(props.phonetic.audio)

    function playSound() {
        audio.play();
    }

    return (
        <div className="Phonetic">

            <i className="far fa-play-circle" onClick={playSound} ></i>

            <span className="Text">
                {props.phonetic.text}</span>
        </div>
    )
}