import React, { useState } from "react";
import Result from './Result.js';

function TextBox(){
    const [input, setInput] = useState('');
    const [type, setType] = useState('');

   const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        fetch("/results", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content_type":"application/json",
            },
            body: JSON.stringify(input)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setType(data.result);
        });
    }

    return (
        <div className="textbox">
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={event => setInput(event.target.value)} placeholder="Start typing here"/>
                <input type="submit" value="Check for Spam"/>
            </form>
            <Result type={type} />
        </div>
    );
}

export default TextBox;

// Need to create state for TextBox
// On submit in TextBox, we call fetch with the inputted message
// With output from Flask, we call Results with message to display