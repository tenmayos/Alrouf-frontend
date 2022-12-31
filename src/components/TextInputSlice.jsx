import React from "react";

function TextInputSlice(props) {

    const [textValue, setTextValue] = React.useState("");

    function HandleChange(event) {
        const newTextValue = event.target.value;
        setTextValue(newTextValue);
    }

    return (
        <div>
        <input
        style={props.style}
        className="text-input"
        type="text" onChange={HandleChange}
        placeholder={props.placeholder} value={textValue}
        />
        </div>
    );
}

export default TextInputSlice;