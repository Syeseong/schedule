import { useSchedules } from "../context/ScheduleContext"

const Button = ({ text, id }) => {
    const { handleSave, setBtnOn, setAddOn, setModalId, setModalOn,
        setTitle, setStartTime, setEndTime, setColor, setCurrentSchecule, setModalOn2 } = useSchedules()

    const handelButtonClick = () => {
        if (text === "추가") {
            setBtnOn(true)
            setAddOn(true)
            setTitle("");
            setStartTime("");
            setEndTime("");
            setColor(null);
        } if (text === "저장") {
            handleSave()
            setBtnOn(false)
            setAddOn(false)
            setModalOn2(true)
        } if (text === "삭제") {
            setModalOn(true)
            setModalId(id)
            // deleteSchedule(id)
        } if (text === "취소") {
            setAddOn(false)
            setBtnOn(false)
            setCurrentSchecule(null)
        }
    }
    return (
        <div className="Button">
            <button className={`${text === "추가" ? "add_btn" : text === "삭제" ? "remove_btn" : text === "수정" ? "modify_btn" : text === "저장" ? "save_btn" : text === "취소" ? "cancle_btn" : ""}`}
                onClick={() => { handelButtonClick() }}>
                {text}
            </button>
        </div>
    )
}

export default Button;