const DayBody = () => {
    const days = [];
    const date = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div key={i}>
                {date[i]}
            </div>
        )
    }
    return (
        <div className="DayBody">
            {days}
        </div>
    )
}

export default DayBody;