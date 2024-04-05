import DetailHeader from "../components/DetailHeader";
import Button from "../components/Button";
import NonSchedule from "../components/NonSchedule";
import AddSchedule from "./AddSchedule";
import { useEffect, useState } from "react";
import { useSchedules } from "../context/ScheduleContext";
import { format } from "date-fns";

const DetailSchedule = () => {


    //상태에 따라 취소, 저장 버튼이 보이게 하는 State
    const [btnOn, setBtnOn] = useState(false);
    const { schedules, selectedDate } = useSchedules();

    //선택된 날짜에 해당하는 일정만 필터링하는 함수
    const filterSchedules = schedules.filter(schedule => format(new Date(schedule.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))

    useEffect(() => {
        setBtnOn(false)
    }, [selectedDate])

    return (
        <div className="DetailSchedule">
            <DetailHeader
                btnOn={btnOn} />
            {
                // btnOn이 false이고 선택된 날짜에 해당하는 일정이 없을 경우 NonSchedule 컴포넌트 랜더링
                !btnOn && filterSchedules.length === 0 ? (
                    <NonSchedule setBtnOn={setBtnOn} />
                ) : (
                    // 그 외의 경우(일정이 있거나 btnOn이 true일 경우) AddSchedule 컴포넌트 랜더링
                    <AddSchedule />
                )
            }
            {/* {btnOn === false && schedules.length === 0 ? <NonSchedule setBtnOn={setBtnOn} /> : <AddSchedule />} */}
        </div>
    )
}

export default DetailSchedule