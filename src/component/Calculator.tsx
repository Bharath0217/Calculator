import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

interface ICalculatorProps{

}
const Calculator:React.FC<ICalculatorProps>=()=>{
    const [result,setResult]=useState<string>('0');
    const clickEvent=(btnValue:string)=>{
        if(btnValue==='C'){
            setResult('0');
        }
        else if (btnValue==='='){
            const calciResult=eval(result);
            setResult(calciResult.toString());
        }
        else if (result==='0'){
            setResult(btnValue);
        }
        else {
            setResult(result+btnValue);
        }
    };

    const delValue=()=>{
        setResult(result.slice(0,-1));
    }

    return(
        <div className="calculator">
            <h1>Calculator</h1>
            <div className="result">
                <input type="text"className="inputText" value={result} />
            </div>
            <div className="button-row">
                <button onClick={()=>clickEvent('7')}>7</button>

                <button onClick={()=>clickEvent('8')}>8</button>
                <button onClick={()=>clickEvent('9')}>9</button>
                <button onClick={()=>clickEvent('/')}>/</button>
            </div>
            <div className="button-row">
                <button onClick={()=>clickEvent('4')}>4</button>
                <button onClick={()=>clickEvent('5')}>5</button>
                <button onClick={()=>clickEvent('6')}>6</button>
                <button onClick={()=>clickEvent('*')}>*</button>
            </div>
            <div className="button-row">
                <button onClick={()=>clickEvent('1')}>1</button>
                <button onClick={()=>clickEvent('2')}>2</button>
                <button onClick={()=>clickEvent('3')}>3</button>
                <button onClick={()=>clickEvent('-')}>-</button>
            </div>
            <div className="button-row">
                <button onClick={()=>clickEvent('0')}>0</button>
                <button onClick={()=>clickEvent('.')}>.</button>
                <button onClick={()=>clickEvent('C')}>C</button>
                <button onClick={()=>clickEvent('+')}>+</button>
            </div>
            <div className="button-row">
                <button onClick={()=>clickEvent('=')}>=</button>
                <button onClick={delValue}>Del</button>
            </div>

        </div>
    );
};
export default Calculator;