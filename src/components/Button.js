const Button = ({ text, setBtnOn }) => {
    return (
        <div className="Button">
            <button className={`${text === "추가" ? "add_btn" : text === "삭제" ? "remove_btn" : text === "수정" ? "modify_btn" : text === "저장" ? "save_btn" : text === "취소" ? "cancle_btn" : ""}`}
                onClick={() => { setBtnOn(true) }}>
                {text}
            </button>
        </div>
    )
}

export default Button;