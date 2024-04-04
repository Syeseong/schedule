import { format } from "date-fns";

const DetailHeader = ({ selectedDate }) => {
    return (
        <div className="DetailHeader">
            <div className="detailHeader_wrapper">
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
        </div>
    )
}

export default DetailHeader;