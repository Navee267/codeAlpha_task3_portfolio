import React, { useEffect, useState } from 'react';
import axios from "axios";

export const App = () => {
  const [amount,setAmount] = useState(1);
  const [fromCurrency,setFromCurrency] = useState("USD");
  const [toCurrency,setToCurrency] = useState("INR");
  const [exchangerate,setExchangerate] = useState(null);
  const [convertedAmount,setConvertedAmount] = useState(null);

  useEffect(()=>{
    const getExchangeRate = async () => {
      try{
        const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(url);
        setExchangerate(res.data.rates[toCurrency]);
      }
      catch(error)
      {
        console.log("Some Error Occured During Fetching" + error);
      }
    }
    getExchangeRate();

  },[fromCurrency,toCurrency]);

useEffect(()=>{
  if(exchangerate !==null)
  {
    setConvertedAmount((amount * exchangerate).toFixed(2));
  }
},[amount,exchangerate]);

  const handleAmountChange = (e) =>{
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value)? 0:value);
  };
  return (
    <>
    <div className='currency-converter'>
        <div className='box'></div>
            <div className='data'>
              <h1>
                Currency Converter
              </h1>
              <div className='input-container'>
                <label htmlFor="amt">Amount : </label>
                <input type="number" id='amt' value={amount} onChange={handleAmountChange}/>
              </div>
              <div className='input-container'>
                <label htmlFor="from-currency">From Currency</label>
                <select id="from-currency" value={fromCurrency} onChange={(e)=>{setFromCurrency(e.target.value)}}>
                  <option value="USD">USD - United States Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound Sterling</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="CNY">CNY - Chinese Yuan</option>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="BRL">BRL - Brazilian Real</option>
                  <option value="ZAR">ZAR - South African Rand</option>
                </select>
              </div>
              <div className='input-container'>
                <label htmlFor="to-currency">To Currency</label>
                <select id="to-currency" value={toCurrency} onChange={(e)=>{setToCurrency(e.target.value)}}>
                  <option value="USD">USD - United States Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound Sterling</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="CNY">CNY - Chinese Yuan</option>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="BRL">BRL - Brazilian Real</option>
                  <option value="ZAR">ZAR - South African Rand</option>
                </select>
              </div>
              <div className="result">
                <p> {amount} {fromCurrency }  Is Equal To {convertedAmount} {toCurrency}</p>
              </div>
            </div>
        </div>
    </>
  )
};

export default App;
