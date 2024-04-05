import { format } from "date-fns";
import Button from "./Button";
import { useSchedules } from "../context/ScheduleContext";


const DetailHeader = ({ btnOn }) => {

    const { selectedDate } = useSchedules();


    return (
        <div className="DetailHeader">
            <div className="detailHeader_wrapper">
                {btnOn && <Button text={"취소"} />}
                <div className="detailHeader_date_box">
                    <div className="detailHeader_year">
                        <span>{format(selectedDate, 'yyyy')}</span>년
                    </div>
                    <div className="detailHeader_month">
                        <span>{format(selectedDate, 'M')}</span>월
                    </div>
                    <div className="detailHeader_day">
                        <span>{format(selectedDate, 'd')}</span>일 일정
                    </div>
                </div>
                {btnOn && <Button text={"저장"} />}
                {console.log(btnOn)}
            </div>
        </div>
    )
}

export default DetailHeader;