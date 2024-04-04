import DetailHeader from "../components/DetailHeader";
import Button from "../components/Button";

const DetailShedule = ({ selectedDate }) => {
    return (
        <div className="DetailShedule">
            <DetailHeader selectedDate={selectedDate} />
            <Button text={"추가"} />
        </div>
    )
}

export default DetailShedule;