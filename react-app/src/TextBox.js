import React from 'react';

function TextBox(){
    return (
        <div className="textbox">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Start typing here"/>
                <input type="submit" value="Check for Spam" />
            </form>
        </div>
    );
}

export default TextBox;

// Need to create state for TextBox
// On submit in TextBox, we call fetch with the inputted message
// With output from Flask, we call Results with message to display