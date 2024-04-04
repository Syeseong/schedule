import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, startOfMonth, startOfWeek } from "date-fns";

const CellBody = ({ currentMonth, selectedDate, onDateClick }) => {


    //오늘이 속한 달의 시작일
    const monthStart = startOfMonth(currentMonth)
    //오늘이 속한 달의 마지막 일
    const monthEnd = endOfMonth(monthStart)
    //monthStart가 속한 주의 시작일
    const startDate = startOfWeek(monthStart)
    //monthEnd가 속한 주의 마지막 일
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = [];
    let day = startDate
    let formmatedDate = "";

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formmatedDate = format(day, 'd')
            const cloneDay = day;
            days.push(
                <div className={`day_col ${!isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate) ? "selected" : format(currentMonth, 'M') !== format(day, 'M') ? "not-valid" : "valid"}`}
                    key={day}
                    onClick={() => { onDateClick(cloneDay) }}>
                    <span className={format(currentMonth, 'M') !== format(day, 'M') ? "not-valid" : ""}>
                        {formmatedDate}
                    </span>
                </div>
            )
            day = addDays(day, 1)
        }

        rows.push(
            <div className="day_row" key={day}>
                {days}
            </div>
        )
        days = [];
    }
    return (
        <div className="CellBody">
            {rows}
        </div>
    )
}

export default CellBody;