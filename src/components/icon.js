import React from "react";
import {buttonIcon} from "../utilities/buttons"

const Icon = (props) => {
    let btnIcon = buttonIcon.map(item => {
        return <button className="histBtn" key={item.id} id={item.id} onClick={props.onClick}>{item.character}</button>
    })
    return(
        <div className="iconDiv">
            {btnIcon}
        </div>
    )
}

export default Icon;