import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            <span className="text">{props.phonetic.text}</span> <br />
            <a
                href={props.phonetic.audio}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fa-regular fa-circle-play"></i> Play
            </a>
        </div>
    );
}
