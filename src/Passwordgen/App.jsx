import React from 'react'
import { useState } from 'react'

export const App = () => {
    const [length, setLength] = useState(6);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [number, setNumber] = useState(true);
    const [symbol, setSymbol] = useState(true);
    const [password, setPassword] = useState("");

    const generatePass = () => {
        let charSet = "";
        if (uppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
        if (number) charSet += "1234567890";
        if (symbol) charSet += "!@#$%^&*()_+-=<>/?][{}*";

        let generatedPass = "";

        for (let i = 0; i < length; i++) {
            const randomOne = Math.floor(Math.random() * charSet.length);
            generatedPass += charSet[randomOne];
        }
        setPassword(generatedPass);
    };

    const copy = () => {
        navigator.clipboard.writeText(password);
    }
    return (
        <>
            <div className="container">
                <div className="generator">
                    <h1>Password Generator</h1>
                    <div className="input-container">
                        <label htmlFor="length">Enter Password Length </label>
                        <input type="number" id='length' value={length} onChange={(e) => setLength(e.target.value)} />
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="" value={uppercase} checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
                        <label htmlFor="">UpperCase</label>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="" value={lowercase} checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />
                        <label htmlFor="">LowerCase</label>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="" value={number} checked={number} onChange={(e) => setNumber(e.target.checked)} />
                        <label htmlFor="">Number</label>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="" value={symbol} checked={symbol} onChange={(e) => setSymbol(e.target.checked)} />
                        <label htmlFor="">Symbols</label>
                    </div>

                    <button className='generate-btn' onClick={generatePass}>Generate Password</button>

                    <div className='result-box'>
                        <input type="text" value={password} />
                        <button onClick={copy}>Copy</button>

                    </div>
                </div>
            </div>
        </>
    )
};

export default App;


//p1KFK@y)F0