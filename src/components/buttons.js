import React from 'react';
import { buttonNumbers, buttonOperators, buttonTrig, buttonFunc } from "../utilities/buttons"

const Buttons = (props) => {

    const btn1 = buttonNumbers.map(button => {
        return <button key={button.id} id={button.id} onClick={props.onClick}>{button.character}</button>
    })

    const btn2 = buttonOperators.map(button => {
        return <button key={button.id} id={button.id} onClick={props.onClick}>{button.character}</button>
    })

    const btn3 = buttonFunc.map(button => {
        return <button key={button.id} id={button.id} onClick={props.onClick}>{button.character}</button>
    })

    return (
        <div className="buttons">
            <div id="btn1">{btn1}</div>
            <div id="btn2">{btn2}</div>
            <div id="btn3">{btn3}</div>
        </div>
    )
}

export default Buttons;