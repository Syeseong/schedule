import { useContext, useEffect, useState } from "react"
import Button from "../components/Button";
import { ScheduleProvider, useSchedules } from "../context/ScheduleContext";

const AddSchedule = () => {
    //Context API 호출
    const { title, setTitle, startTime, setStartTime, endTime, setEndTime, color, setColor } = useSchedules();

    useEffect(() => {
        setTitle("");
        setStartTime("");
        setEndTime("");
        setColor("FFFFFF");
    }, [])

    const colorOptions =
        ["#98FB98", "#FFFF00", "#F08080", "#00BFFF", "#9400D3", "#DCDCDC"];

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
            <div className="addSchedule_color">
                <div>색상</div>
                {colorOptions.map(it => (
                    <button className="color_box" key={it} style={{ backgroundColor: it }}
                        onClick={() => setColor(it)} />
                ))}
            </div>
        </div>
    )
}

export default AddSchedule