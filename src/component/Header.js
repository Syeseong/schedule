import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";

const Header = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="Header">
            <div className="Header_wrapper">
                <div className="month_left_btn">
                    <span><FontAwesomeIcon icon={faArrowLeft} onClick={prevMonth} /></span>
                </div>
                <div className="month_text">
                    <span>{format(currentMonth, 'M')}월</span>
                </div>
                <div className="year_text">
                    <span>{format(currentMonth, 'yyyy')}</span>
                </div>
                <div className="month_right_btn">
                    <span><FontAwesomeIcon icon={faArrowRight} onClick={nextMonth} /></span>
                </div>
            </div>
        </div>
    )
}

export default Header;