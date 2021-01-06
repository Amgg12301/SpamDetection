import React from 'react';

function Result(props){
    let message = 'Input a message to see magic!';
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
            <p><u>{message}</u></p>
            <p font-size="150%">{emoji}</p>
        </div>
    );
}

export default Result;