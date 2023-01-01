import React from "react";

function TextInputSlice(props) {

    return (
        <div>
        <input
        style={props.style}
        className="text-input"
        id={props.id}
        onChange={(e) => {
            props.onChange(e)
            }}
        placeholder={props.placeholder}
        />
        </div>
    );
}

export default TextInputSlice;