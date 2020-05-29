import React, {Component, useState, useEffect} from 'react';

function Kantegas () {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])
    return (
        <div>
        
            <h1 className="App-title">{message}</h1>
        
        </div>
    )
}

export default Kantegas;