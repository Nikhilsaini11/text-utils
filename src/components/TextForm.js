import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");

    }
    const handleCopyText = () => {
        let text = document.getElementById("textForm");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success");
    }
    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Enter your text below</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'#f6f6f6':'#4c555c', color:props.mode==='light'?'black':'white'}} onChange={handleChange} value={text} id="textForm" rows="8"></textarea>
            </div>
            <button type="button" className={`btn btn-${props.mode==='light'?'primary':'success'} mx-1 my-1`} disabled={text.length===0} onClick={handleUpperCase}>Convert to Upppercase</button>
            <button type="button" className={`btn btn-${props.mode==='light'?'primary':'success'} mx-1 my-1`} disabled={text.length===0} onClick={handleLowerCase}>Convert to Lowercase</button>
            <button type="button" className={`btn btn-${props.mode==='light'?'primary':'success'} mx-1 my-1`} disabled={text.length===0} onClick={handleCopyText}>Copy Text</button>
            <button type="button" className={`btn btn-${props.mode==='light'?'primary':'success'} mx-1 my-1`} disabled={text.length===0} onClick={handleClearText}>Clear Text</button>
            <div className='container'>
                <h2 className='my-3'>Your text summary</h2>
                <p>{ text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h2 className='my-3'>Preview</h2>
                <p>{text.length>0?text:"Enter text to preview"}</p>
            </div>
        </div>
    )
}
