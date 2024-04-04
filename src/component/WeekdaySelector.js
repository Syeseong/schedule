import { useState } from "react";

const WeekdaySelector = () => {
    //요일 배열
    const weekdayData = ["일", "월", "화", "수", "목", "금", "토"]

    //요일 관리 State (초기값 "월")
    const [selectedDay, setSelectedDay] = useState("월")

    return(
        <div className="WeekdaySelector">
            <ul className="WeekdaySelector_box">
            {weekdayData.map((it)=>{
                return(
                    <li 
                    key={it} 
                    className={selectedDay === it ? "selected" :""}
                    onClick={()=>{setSelectedDay(it)}}
                    >{it}
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default WeekdaySelector;