import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

//Calculator Using React Js And Css

export const App = () => {
    const [number, setNumber] = useState("0");
    const [isLight, setIsLight] = useState(true);

    const themeChange = () => {
        setIsLight(!isLight);
    }
    const clicking = (value) => {
        if (value === '0' && number === '0') return;
        setNumber((prev) => (prev === "0" ? value : prev + value));
    }

    const AC = () => {
        setNumber('0');
    }

    const Delete = () => {
        setNumber((prevValue) => prevValue.slice(0, -1));
    }

    const calculate = () => {
        try {
            setNumber((prev) => eval(prev).toString());
        }
        catch (Error) {
            alert("Error Occured ");
            setNumber("0");
        }
    };
    return (
        <>
            <div className="container">
                <div className="calculator" style={{backgroundColor:isLight?"white":"white"}}>
                    <div className="display" style={{ backgroundColor: isLight ? "#011222" : "#b0e0e2" ,color :isLight ? "black":"white",boxShadow:isLight?"inset -1px -1px 2px #b0e0e6,inset 1px 1px 2px #b0e0e6":"inset -1px -1px 4px black,inset 1px 1px 4px black"}}>
                        <div>
                            <h3 style={{color:isLight?"white":"black"}}>Calc</h3>
                            <button style={{backgroundColor:isLight ? "white":"black",color:isLight?"black":"white"}} onClick={themeChange}>{isLight ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}</button>
                        </div>
                        <input type="text" className='textFeild' placeholder='0' value={number} readOnly style={{color:isLight?"white":"black"}}/>
                    </div>
                    <div className="buttons" style={{backgroundColor: isLight ? "#0b243b":"#b0e0e6"}}>
                        <button onClick={AC}>AC</button>
                        <button onClick={Delete}>DEL</button>
                        <button onClick={() => clicking('%')}>%</button>
                        <button onClick={() => clicking('/')}>/</button>
                        <button onClick={() => clicking('7')} value={7}>7</button>
                        <button onClick={() => clicking('8')} value={8}>8</button>
                        <button onClick={() => clicking('9')} value={9}>9</button>
                        <button onClick={() => clicking('*')}>X</button>
                        <button onClick={(e) => clicking('4')} value={4}>4</button>
                        <button onClick={(e) => clicking('5')} value={5}>5</button>
                        <button onClick={(e) => clicking('6')} value={6}>6</button>
                        <button onClick={() => clicking('-')}>-</button>
                        <button onClick={(e) => clicking('1')} value={1}>1</button>
                        <button onClick={(e) => clicking('2')} value={2}>2</button>
                        <button onClick={(e) => clicking('3')} value={3}>3</button>
                        <button onClick={() => clicking('+')}>+</button>
                        <button onClick={(e) => clicking('0')} value={0}>0</button>
                        <button onClick={(e) => clicking('.')}>.</button>
                        <button onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;
