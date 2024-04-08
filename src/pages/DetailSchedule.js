import DetailHeader from "../components/DetailHeader";
import NonSchedule from "../components/NonSchedule";
import AddSchedule from "./AddSchedule";
import { useEffect } from "react";
import { useSchedules } from "../context/ScheduleContext";
import ScheduleList from "../components/ScheduleList";

const DetailSchedule = () => {



    const { selectedDate, btnOn, setBtnOn, addOn, setAddOn, filterSchedules } = useSchedules();


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