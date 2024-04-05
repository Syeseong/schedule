import { useSchedules } from "../context/ScheduleContext";
import Button from "./Button";

const ScheduleList = () => {

    const { schedules, selectSchedule } = useSchedules()

    return (
        <>
            {schedules.map((it, idx) => {
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
                        <div onClick={() => selectSchedule(it.id)} className="scheduleList_text_box">
                            <span>{it.title}</span>
                        </div>
                    </div >
                )
            })}
        </>
    )
}

export default ScheduleList;