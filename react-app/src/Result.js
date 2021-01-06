import React from 'react';

function Result(props){
    let message = 'Input a message to see the magic!';
    let emoji = '🤔';

    if(props.type === 'ham'){
        message = 'This is HAM aka not spam!';
        emoji = '🤩';
    }else if(props.type === 'spam'){
        message = 'This is SPAM, please be careful!!';
        emoji = '😡';
    }

    return (
        <div className="result">
            <h2>What type of message is this?</h2>
            <p className="emoji">{emoji}</p>
            <p className="message">{message}</p>
        </div>
    );
}

export default Result;