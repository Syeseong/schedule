import { useSchedules } from "../context/ScheduleContext";

const Modal = () => {
    const { setModalOn, modalId, deleteSchedule } = useSchedules()
    return (
        <div className="Modal">
            <div className="modal_text_box">
                <span className="modal_text">
                    일정을 삭제 하시겠습니까?
                </span>
            </div>
            <div className="modal_btn_box">
                <button className="yes_btn" onClick={() => { deleteSchedule(modalId); setModalOn(false) }}>네</button>
                <button className="no_btn" onClick={() => { setModalOn(false) }}>아뇨</button>
            </div>
        </div>
    )
}

export default Modal;