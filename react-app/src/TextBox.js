import React, { useState } from "react";
import Result from './Result.js';
import { Form, Button} from 'react-bootstrap';

function TextBox(){
    const [input, setInput] = useState('');
    const [type, setType] = useState('');
    const [score, setScore] = useState(0);

   const validateInput = () => {
       if(input === ''){
            alert('Must be a non-empty message!');
       }
   }

   const handleSubmit = (event) => {
        event.preventDefault();
        validateInput();
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
            setScore(data.accuracy_score);
        });
    }

    return (
        <div className="inner">
            <div className="textbox">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <h2>Enter your message:</h2>
                        <Form.Control 
                            as="textarea"
                            rows={20}
                            value={input} 
                            placeholder="Start typing here..."
                            onChange={event => setInput(event.target.value)}></Form.Control>
                    </Form.Group>
                    <Button className="submitButton" size="lg" variant="primary" type="submit">
                        Check it out!
                    </Button>
                </Form>
            </div>
            <div className = "result">
                <Result type={type} />
            </div>
            <div className="score">
                <p>Spam Classification Model Accuracy Score: {score}%</p>
            </div>
        </div>
    );
}

export default TextBox;