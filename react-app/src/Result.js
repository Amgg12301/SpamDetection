import React from 'react';

function Result(props){
    const message = 'Input a message to see magic!';
    if(props.type == 'ham'){
        message = 'This is HAM aka not spam :)';
    }else if(props.type == 'spam'){
        message = 'This is SPAM, please be careful :(';
    }

    return (
        <div className="result">
            <h2>What type of message is this?</h2>
            <p>{message}</p>
        </div>
    );
}

export default Result;