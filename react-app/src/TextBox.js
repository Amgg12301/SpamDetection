import React, { useState } from "react";

function TextBox(){
    const [input, setInput] = useState('');

    const onChange = (event) => {
        setInput(event.target.value);
    };

   /* const onSubmit = () => {
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
    }*/


    return (
        <div className="textbox">
            <form>
                <input type="text" value={input} onChange={onChange} placeholder="Start typing here"/>
                <input type="submit" value="Check for Spam" /*onSubmit={onSubmit}*//>
            </form>
        </div>
    );
}

export default TextBox;

// Need to create state for TextBox
// On submit in TextBox, we call fetch with the inputted message
// With output from Flask, we call Results with message to display