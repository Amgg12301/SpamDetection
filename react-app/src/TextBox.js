import React, { useState } from "react";
import Result from './Result.js';
import { Form, Button} from 'react-bootstrap';

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
        <div className="inner">
            <div className="textbox">
                {/*<form onSubmit={handleSubmit}>
                    <input type="text" value={input} onChange={event => setInput(event.target.value)} placeholder="Start typing here"/>
                    <input type="submit" value="Check for Spam"/>
                </form>*/}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <h3>Enter your message:</h3>
                        <Form.Control 
                            as="textarea"
                            rows={10}
                            value={input} 
                            placeholder="Start typing here..."
                            onChange={event => setInput(event.target.value)}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Check it out!
                    </Button>
                </Form>
            </div>
            <div className = "result">
                <Result type={type} />
            </div>
        </div>
    );
}

export default TextBox;

// Need to create state for TextBox
// On submit in TextBox, we call fetch with the inputted message
// With output from Flask, we call Results with message to display