import DetailHeader from "../components/DetailHeader";
import Button from "../components/Button";
import NonSchedule from "../components/NonSchedule";
import AddSchedule from "./AddSchedule";

const DetailSchedule = ({ selectedDate }) => {
    return (
        <div className="DetailSchedule">
            <DetailHeader selectedDate={selectedDate} />
            {/* <NonSchedule /> */}
            <AddSchedule />
            {/* <Button text={"추가"} /> */}
        </div>
    )
}

export default DetailSchedule;