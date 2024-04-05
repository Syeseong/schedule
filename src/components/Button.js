import { useSchedules } from "../context/ScheduleContext"

const Button = ({ text, setBtnOn }) => {
    const { handleSave } = useSchedules()
    const handelButtonClick = () => {

        if (text === "추가") {
            setBtnOn(true)
        } else if (text === "저장") {
            handleSave()
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