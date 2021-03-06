import React from 'react'
import { useState } from 'react'

export default function Input(props) {
    const [currentTextValue, newText] = useState("")
    const onchangeMethod = (event) => {
        let newValue = event.target.value;
        newText(newValue)
    }
    const capHandler = () => {
        let splittedTextArray = currentTextValue.split(" ")
        let capitalizedTextArray = splittedTextArray.map((i) => {
            let capitalizedWord = i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()
            return capitalizedWord
        })
        let capitalizedText = capitalizedTextArray.join(" ")
        newText(capitalizedText)
    }
    const upperHandler = () => {
        let capitalizedText = currentTextValue.toUpperCase()
        newText(capitalizedText)
    }
    const lowerHandler = () => {
        let capitalizedText = currentTextValue.toLowerCase()
        newText(capitalizedText)
    }
    const clearTextHandler = () => {
        newText("")
    }
    // copyText Functions 
    const copyTextHandler = () => {
        navigator.clipboard.writeText(currentTextValue)
        document.getSelection().removeAllRanges()
        props.callAlert("Text Copied To Clipboard")
    }
    // extraspaces Functions
    const extraSpacesHandler = () => {
        let modifiedText = currentTextValue.split(/[ ]+/).join(" ")
        newText(modifiedText)
    }
    //show info functions
    const showInfo = () => {
        const infoTag = document.getElementById("info")
        infoTag.innerText = "( Extra spaces auto-removed for readability )"
    }
    const hideInfo = () => {
        const infoTag = document.getElementById("info")
        infoTag.innerText = ""
    }
    return (
        <div className="main-div py-3 px-5" style={{}}>
            <div className="input-group input-group-lg my-4 input-flex">
                <span className="input-group-text" id="inputGroup-sizing-lg">{props.textValue}</span>

                <input type="text" value={currentTextValue} onChange={onchangeMethod} itemID="disabledTextInput" className="form-control disabled width100" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="input-text" />
                <button className="nav-item btn-primary" disabled={currentTextValue.length<=0} onClick={copyTextHandler}>Copy</button>
            </div>
            <div className="btn-group button-flex" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-primary mx-2 my-2" disabled={currentTextValue.length<=0} onClick={capHandler}>Capitalize</button>
                <button type="button" className="btn btn-warning mx-2 my-2" disabled={currentTextValue.length<=0}  onClick={upperHandler}>UpperCase</button>
                <button type="button" className="btn btn-success mx-2 my-2" disabled={currentTextValue.length<=0}  onClick={lowerHandler}>LowerCase</button>
                <button type="button" className="btn btn-danger mx-2 my-2" disabled={currentTextValue.length<=0}  onClick={clearTextHandler}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" disabled={currentTextValue.length<=0}  onClick={extraSpacesHandler}>Remove Extra Spaces</button>
            </div>

            <div className="container my-4">
                <h3>Your Text Summery</h3>
                <h4>Word Count</h4>
                <p>{currentTextValue.split(" ").length - 1} Words and {currentTextValue.length} Characters</p>
                <p>{0.008 * currentTextValue.split(" ").length.toFixed("2")} Minutes Read</p>
                <div className="container flex">
                    <h4>Text Preview</h4>
                    <span className="i-btn mx-2" onClick ={showInfo} onMouseOver={showInfo} onMouseLeave={hideInfo}> <strong>( i )</strong></span>
                    <p id="info"></p>
                </div>
                <p className="text-preview">{currentTextValue}</p>


            </div>
        </div>
    )
}

