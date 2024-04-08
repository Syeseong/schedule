import { useSchedules } from "../context/ScheduleContext";

const Modal2 = () => {
    const { modalTimeIn, modalField, modalStartOfEnd, setModalOn2, setModalTimeIn, setModalField, setModalStartOfEnd } = useSchedules();
    return (
        <div className="Modal2">
            <div className="modal_text_box2">
                <span className="modal_text2">
                    {modalField ? "모든 필드를 입력해주세요." : modalStartOfEnd ? "시작 시간이 종료 시간보다 빠를 수 없습니다." : modalTimeIn ? "해당 시간에 일정이 이미 존재합니다." : "일정이 (추가/수정) 되었습니다."}
                </span>
            </div>
            <div className="modal_btn_box2">
                <button className="yes_btn2" onClick={() => { setModalOn2(false); setModalTimeIn(false); setModalField(false); setModalStartOfEnd(false) }}>확인</button>
            </div>
        </div>
    )
}

export default Modal2;