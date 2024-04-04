import { format } from "date-fns";
import Button from "./Button";

const DetailHeader = ({ selectedDate }) => {
    return (
        <div className="DetailHeader">
            <div className="detailHeader_wrapper">
                <Button text={"취소"} />
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
                <Button text={"저장"} />
            </div>
        </div>
    )
}

export default DetailHeader;