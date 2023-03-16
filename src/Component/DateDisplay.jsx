import "./date.css"
import moment from "moment";
const DateDisplay = (pros) => {
    const {date}= pros
    return ( 
        <section className="date-display">
        My date is: {moment(date).format('LL')}
        </section>
     );
}
 
export default DateDisplay;