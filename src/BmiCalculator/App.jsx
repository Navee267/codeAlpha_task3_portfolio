import { useState } from "react"

//BMI Calculator

export const App = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [bmistatus, setBmistatus] = useState("");
    const [error,setError] = useState("");

    const clear = ()=>{
        setBmi(null);
        setBmistatus("");
        setHeight("")
        setWeight("")
    }

    const calculateBmi = () => {
        const isValidHeight = /^\d+$/.test(height);
        const isValidWeight = /^\d+$/.test(weight);
        if(isValidHeight && isValidWeight)
        {
            const heightInMeters = height/100;
            const bmiValue = weight/(heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));

            if(bmiValue < 18.5)
            {
                setBmistatus("UnderWeight ");
            }
            else if(bmiValue >=18.5 && bmiValue<24.9)
            {
                setBmistatus("Normal Weight ");
            }
            else if(bmiValue >=25 && bmiValue<29.9)
            {
                setBmistatus("Over Weight ");
            }
            else
            {
                setBmistatus("Obese ");
            }
            setError("");
        }
        else{
            setBmi(null);
            setBmistatus("");
            setError("Please Enter The Height And Weight Values Correctly..");
        }
    };

    return (
        <>
            <div className='container'>
                <div className="box">
                </div>
                <div className="data">
                    <h1>
                        BMI Calculator
                    </h1>
                    <p className="error-msg">{error}</p>
                    <div className="input-container">
                        <label htmlFor="Height">Height(cm)</label>
                        <input type="text" className="height" value={height} onChange={(e) => { setHeight(e.target.value) }} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="Weight">Weight(kg)</label>
                        <input type="text" className="weight" value={weight} onChange={(e) => { setWeight(e.target.value) }} />
                    </div>
                    <button className="calculate-bmi" onClick={calculateBmi}>
                        Calculate Bmi
                    </button>
                    <button onClick={clear} className="clear">Clear</button>
                   {bmi !==null && (
                     <div className="status">
                     <p>Your Bmi Value Is : {bmi}</p>
                     <p>You Are {bmistatus}</p>
                 </div>
                   )}
                </div>
            </div>
        </>
    )
};

export default App;
