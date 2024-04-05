import DetailHeader from "../components/DetailHeader";
import Button from "../components/Button";
import NonSchedule from "../components/NonSchedule";
import AddSchedule from "./AddSchedule";
import { useEffect, useState } from "react";
import { useSchedules } from "../context/ScheduleContext";
import { format } from "date-fns";
import ScheduleList from "../components/ScheduleList";

const DetailSchedule = () => {



    const { schedules, selectedDate, btnOn, setBtnOn, addOn, setAddOn } = useSchedules();

    //선택된 날짜에 해당하는 일정만 필터링하는 함수
    const filterSchedules = schedules.filter(schedule => format(new Date(schedule.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))

    useEffect(() => {
        setBtnOn(false)
        setAddOn(false)
    }, [selectedDate])

    return (
        <div className="DetailSchedule">
            <DetailHeader
                btnOn={btnOn} />
            {
                btnOn === false && filterSchedules.length === 0 ?
                    <NonSchedule setBtnOn={setBtnOn} /> : addOn === false ? <ScheduleList /> : ""
            }
            {addOn === true ? <AddSchedule /> : ""}
        </div>
    )
}

export default DetailSchedule