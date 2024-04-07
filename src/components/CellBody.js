import { addDays, endOfMonth, endOfWeek, format, getDay, isSameDay, isSameMonth, startOfMonth, startOfWeek } from "date-fns";
import { useSchedules } from "../context/ScheduleContext";

const CellBody = () => {
    const { currentMonth, selectedDate, onDateClick, schedules } = useSchedules();


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
            formmatedDate = format(day, 'yyyy-MM-dd')
            const cloneDay = day;
            //현재 날짜의 요일을 숫자로 가져옴
            const dayOfWeek = getDay(day);
            //토요일, 일요일을 정하는 클래스
            let dayClass = "";
            //토요일, 일요일을 정하는 조건문

            const todaySchedules = schedules.filter(it =>
                format(new Date(it.date), 'yyyy-MM-dd') === formmatedDate)

            if (dayOfWeek === 0) {
                dayClass = "sunday"
            } else if (dayOfWeek === 6) {
                dayClass = "saturday"
            }
            days.push(
                <div className={`day_col ${dayClass} ${!isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate) ? "selected" : format(currentMonth, 'M') !== format(day, 'M') ? "not-valid" : "valid"}`}
                    key={day}
                    onClick={() => { onDateClick(cloneDay) }}>
                    <span className={format(currentMonth, 'M') !== format(day, 'M') ? "not-valid" : ""}>
                        {format(formmatedDate, 'd')}
                    </span>
                    {todaySchedules.map((schedule, index) => (
                        <div key={index} className="event-marker"
                            style={{ backgroundColor: schedule.color }}>
                            {`${schedule.title.substring(0, 5)}${schedule.title.length > 5 ? "..." : ""}`}
                        </div>
                    ))}
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