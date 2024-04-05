import { useContext, useEffect, useState } from "react"
import Button from "../components/Button";
import { ScheduleProvider, useSchedules } from "../context/ScheduleContext";

const AddSchedule = () => {
    //Context API 호출
    const { addSchedule, title, setTitle, startTime, setStartTime, endTime, setEndTime } = useSchedules();

    return (
        <div className="AddSchedule">
            <div className="addSchedule_text">
                <input type="text" placeholder="내용" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div className="addSchedule_start">
                <div >시작</div>
                <input type="time" value={startTime} onChange={(e) => {
                    setStartTime(e.target.value)
                }} />
            </div>
            <div className="addSchedule_end">
                <div >종료</div>
                <input type="time" value={endTime} onChange={(e) => { setEndTime(e.target.value) }} />
            </div>
        </div>
    )
}

export default AddSchedule