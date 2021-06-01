import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from 'react-audio-player';


export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <ReactAudioPlayer src={props.phonetic.audio} controls preload="metadata" />

            <span className="Text">
                {props.phonetic.text}</span>
        </div>
    )
}