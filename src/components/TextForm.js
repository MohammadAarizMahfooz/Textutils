import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text", "success");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }

    const handleCapClick = ()=>{
        const arr = text.split(" ");

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        let newText = arr.join(" ");
        setText(newText);
        props.showAlert("Capitalized the text", "success");
    }

    const handleOnChange = (event)=>{
        console.log("changed");
        setText(event.target.value);
    }

    return (
        <>
        <div className="my-3 container">
            <h3>{props.heading}:</h3>
            <div className="mb-3 container">
                <textarea className="form-control" style={{backgroundColor:props.mode.backgroundColor, color:props.mode.color}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-warning m-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-success m-1" onClick={handleCapClick}>Convert to Capitalize First</button>
            <button disabled={text.length===0} className="btn btn-info m-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-secondary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-danger m-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview."}</p>
        </div>
        </>
    )
}