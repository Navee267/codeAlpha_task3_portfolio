import React, { useEffect, useState } from 'react'

export const App = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatingHour = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };

    const firstOnezero = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    const formatDate = (date) => {
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <>
            <div className='body'>
                <div className='clock'>
                    <h1>
                        Digital Clock
                    </h1>
                    <div className="time">
                        {firstOnezero(formatingHour(time.getHours()))} : {firstOnezero(time.getMinutes())} : {firstOnezero(time.getSeconds())}
                        <p className='status'>{time.getHours() >= 12 ? " PM" : " AM"}</p>
                    </div>
                    <div className="day">
                        {formatDate(time)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;