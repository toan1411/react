import { useState } from "react";
import "./date.css"
import DateDisplay from './DateDisplay';
const DateContainer = () => {
    const [date,setDate] = useState(Date.now());
    return ( 
        <>
            <input type="date" className="time-input" onChange={(e)=>setDate(e.target.value)}/>
            <DateDisplay date={date}/>
        </>
     );
}
 
export default DateContainer;