import React from "react";

function TextInputSlice(props) {
    return (
        <div>
        <input type="text" placeholder={props.placeholder} />
        <span>{props.identifierText}</span>
        </div>
    );
}

export default TextInputSlice;