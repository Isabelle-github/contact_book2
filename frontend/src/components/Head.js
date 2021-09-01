// import { Link } from "react-router-dom";
import Head2 from "./Head2";
import battery from '../img/battery.svg';
import connection from '../img/connection.svg';
import { useState } from "react";
let today = new Date();
let date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
// let dateVariable = Date().toLocaleString()

const Head = () => {
    // const [date, setDate] = useState(null)
    // const [time, setTime] = useState(null)
    // setDate(today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear())
    // setTime(today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds())
    return (
        <header>
            <div className='head1'>
                <h1>{time}</h1>
                {/* <h1>{date}, {time}</h1> */}
                <div>
                    <img src={connection} alt="img"></img>
                    <img src={battery} alt="img"></img>
                </div>
            </div>
            <Head2></Head2>
        </header>
    );
}

export default Head;