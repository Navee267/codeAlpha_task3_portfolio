import { useState } from "react";

export const Advice = () => {
    const [advice,setAdvice] = useState("Click Here To Get Advice..");
    const [count,setCount] = useState(0);

    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();

        setAdvice(data.slip.advice);
        setCount((c)=>c+1);
    }
  return (
    <div>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You Get <b>{count}</b> Advices</p>
    </div>
  )
};

export default Advice;
