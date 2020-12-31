import React, { useState } from "react";
import "./App.css";
import Display from "./components/display";
import Buttons from "./components/buttons";
import History from "./components/history";
import Result from "./components/result";
import Icon from "./components/icon";

const App = () => {

    const [display, setDisplay] = useState("");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState([]);

    const onClick = (e) => {
        try {
            let value = e.target.id;
        
            switch(value) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":

                    let num1 = display + value;
                    setDisplay(num1)
                    
                    if(display === "0") {
                        let number1111 = display.slice(0, -1) + value;
                        setDisplay(number1111)
                    }

                break;

                case ">>":
    
                    const btns = document.querySelector(".buttons");
                    btns.classList.add("func");

                break;

                case "<<":

                    const btns1 = document.querySelector(".buttons");
                    btns1.classList.remove("func")

                break;

                case "↓":

                    const historyDiv = document.querySelector(".history");
                    historyDiv.classList.toggle("transform");
                
                break;

                case ".":
    
                    let numval = display + value;
                    setDisplay(numval)
                    
                    let operatorRegex1 = /[+-/*]/;
                    if(display.slice(-2).match(operatorRegex1)) {
                        let numval1 = numval.slice(0, -1);
                        setDisplay(numval1)
                    }

                    if(display.slice(-1) === ".") {
                        let number11 = display.slice(0, -1) + value;
                        setDisplay(number11);
                    }

                    if(display === "") {
                        let number1 = display.slice(0, -1)
                        setDisplay(number1)
                    }

                break;

                case "C":

                    setDisplay("");
                    setResult("");

                break;

                case "C/E":
    
                    let number9 = display.slice(0, -1);
                    setDisplay(number9);
        
                break;
                
                case "+":
                case "-":
                case "÷":
                case "x":
        
                    let num3 = display + " " + value + " ";
                    setDisplay(num3);

                    let operatorRegex = /(x|÷|-|\+)/;
                    if(operatorRegex.test(display.slice(-2))) {
                        let number3 = display.slice(0, -2) + value + " ";
                        setDisplay(number3);
                    }

                    if(display === "") {
                        let number33 = num3.slice(0, -3);
                        setDisplay(number33)
                    }

                break;

                case ")":
                case "(":

                    let number4 = display + value;
                    setDisplay(number4);

                break;

                case "sqrt(":
    
                    let number5 = display + value;
                    setDisplay(number5);

                break;

                case "cbrt(":
        
                    let number6 = display + value;
                    setDisplay(number6);

                break;

                case "^":
            
                    let number7 = display + value;
                    setDisplay(number7);

                break;

                case "^2":

                    let number8 = display + value;
                    setDisplay(number8);

                break;

                case "=":
    
                    document.querySelector(".result").classList.remove("error")
            
                    let xy9 = display.replace(/(asin\()/g, "(360 / (3.141592653589793 * 2)) * Math.asin(")
                    .replace(/(acos\()/g, "(360 / (3.141592653589793 * 2)) * Math.acos(")
                    .replace(/(atan\()/g, "(360 / (3.141592653589793 * 2)) * Math.atan(")
                    .replace(/\bcos/g, "Math.cos")
                    .replace(/(Math.cos\()/g, "Math.cos((3.141592653589793/180) * ")
                    .replace(/\bsin/g, "Math.sin")
                    .replace(/(Math.sin\()/g, "Math.sin((3.141592653589793/180) * ")
                    .replace(/\btan/g, "Math.tan")
                    .replace(/(Math.tan\()/g, "Math.tan((3.141592653589793/180) * ")
                    .replace(/(sqrt\()/g, "Math.sqrt(")
                    .replace(/cbrt\(/g, "Math.cbrt(")
                    .replace(/\^2/g, "**2")
                    .replace(/\^/g, "**")
                    .replace(/\x/g, "*")
                    .replace(/\÷/g, "/")
            
                    let result2 = eval(xy9).toString();
                    setResult(result2)

                    let historyValue = {
                        id: `${history.length}`,
                        expression: `${display}`,
                        result: `${result2}`
                    };

                    let historyValue2 = history.concat(historyValue)
                    setHistory(historyValue2)

                break;

                case "sin(":
                case "cos(":
                case "tan(":
                case "asin(":
                case "acos(":
                case "atan(":

                    let trigDisplay = display + value;
                    setDisplay(trigDisplay);

                break;

                default:

                setDisplay(display);
            }
        }
        catch (err) {

            if(err) {
                let resultDiv = document.querySelector(".result").innerText;
                document.querySelector(".result").classList.add("error")

                resultDiv = "Bad Expression!";
                setResult(resultDiv)
            } else {
                document.querySelector(".result").classList.remove("error")
            }
        }
    }

    return(
        <div className="app">
            <div className="app3">
                <div className="app2">
                    <Icon onClick={onClick} />
                    <History history={history} />
                    <div className="display-divs">
                        <Display disp={display} />
                        <Result result={result} />
                    </div>
                    <Buttons onClick={onClick} />
                </div>
            </div>
        </div>
    )
}

export default App;