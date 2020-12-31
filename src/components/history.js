import React from "react";

const History = (props) => {
    
    const history1 = props.history.map(event => {
        if(event.result.length >= 7) {
            event.result = Number(event.result).toExponential(4)
        }
        return <div key={event.id}>
            <p className="expression">{event.expression}</p>
            <p className="result">=> {event.result}</p>
        </div>
    })
    
    return(
        <div className="history">
            <h2>History</h2>
            {history1}
        </div>
    )
}

export default History;