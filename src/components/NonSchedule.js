import { set } from "date-fns";
import Button from "./Button";

const NonSchedule = ({ setBtnOn }) => {
    return (
        <div className="NonSchedule">
            <div className="nonSchedule_text">일정을 추가해보세요 !</div>
            <Button text={"추가"} setBtnOn={setBtnOn} />
        </div>
    )
}

export default NonSchedule;