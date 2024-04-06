import { format } from "date-fns";
import { useSchedules } from "../context/ScheduleContext";
import Modal from "../pages/Modal";
import Button from "./Button";

const ScheduleList = () => {

    const { schedules, selectSchedule, modalOn, selectedDate } = useSchedules()

    //선택된 날짜에 해당하는 일정만 필터링
    const display = schedules.filter(it =>
        format(new Date(it.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
    )
    return (
        <>
            {display.map((it, idx) => {
                return (
                    < div className="ScheduleList" >
                        <div className="scheduleList_time_box">
                            <div className="scheduleList_time_start">
                                <span>{it.startTime}</span>
                            </div>
                            <div className="scheduleList_time_end">
                                <span>{it.endTime}</span>
                            </div>
                        </div>
                        <div className="scheduleList_text_box">
                            <span onClick={() => selectSchedule(it.id)}>{it.title}</span>
                            <div>
                                <Button text={"삭제"} id={it.id} />
                            </div>
                        </div>
                    </div >
                )
            })}
            {modalOn && <Modal />}
        </>
    )
}

export default ScheduleList;