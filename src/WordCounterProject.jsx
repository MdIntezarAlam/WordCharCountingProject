import React from 'react'
import { useState } from 'react';
const WordCounterProject = (props) => {
    const [text, setText] = useState("");

    //This is UpperCase Fun
    const uppperHandler = (e) => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    //This is LowerHandlerCase Fun
    const lowerHandler = (e) => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    //This is for delete Word
    const clear = (e) => {
        let newText = "";
        setText(newText);
    }

    //This is Change Word Fun
    const UpperChange = (e) => {
        setText(e.target.value)
    }
  

    return (
        <>
            <div className="container">
                <h1>{props.title}</h1>
                <div>
                    <textarea className="form-control mx-2" id="myBox" value={text} rows="6" onChange={UpperChange} />
                </div>
                <button className="btn btn-sm my-3 mx-3 btn-primary" onClick={uppperHandler}>Convert in to UpperCase</button>
                <button className="btn btn-sm my-3 mx-3 btn-primary" onClick={lowerHandler}>Convert in to LowerCase</button>
                <button className="btn btn-sm my-3 mx-3 btn-primary" onClick={clear}>Clear</button>
            </div>
                  <div className="container">
                       <h1>Your Revew</h1>
                       <p>{text.split(" ").length}</p>
                       <h2>Preview</h2>
                       <h3>{text}</h3>
                  </div>
        </>
    )
}

export default WordCounterProject