import DetailHeader from "../components/DetailHeader";
import Button from "../components/Button";
import NonSchedule from "../components/NonSchedule";
import AddSchedule from "./AddSchedule";
import { useState } from "react";
import { useSchedules } from "../context/ScheduleContext";

const DetailSchedule = () => {
    //상태에 따라 취소, 저장 버튼이 보이게 하는 State
    const [btnOn, setBtnOn] = useState(false);
    const { schedule } = useSchedules();
    let test = (btnOn === false && schedule === undefined);
    return (
        <div className="DetailSchedule">
            <DetailHeader
                btnOn={btnOn} />
            {(btnOn === false && schedule === undefined) ? <NonSchedule
                setBtnOn={setBtnOn} /> : <AddSchedule />}

            {/* <Button text={"추가"} /> */}
        </div>
    )
}

export default DetailSchedule