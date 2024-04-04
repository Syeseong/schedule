import { useEffect, useState } from "react"
import Button from "../components/Button";

const AddSchedule = () => {
    const currentTime = new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })

    const [time, setTime] = useState(currentTime);

    useEffect(() => {
        setTime(currentTime);
    }, [currentTime])

    return (
        <div className="AddSchedule">
            <div className="addSchedule_text">
                <input type="text" placeholder="내용" />
            </div>
            <div className="addSchedule_start">
                <div >시작</div>
                <input type="time" value={time} onChange={(e) => {
                    setTime(e.target.value)
                }} />
            </div>
            <div className="addSchedule_end">
                <div >종료</div>
                <input type="time" />
            </div>
        </div>
    )
}

export default AddSchedule