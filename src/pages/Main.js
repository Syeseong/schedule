import CellBody from "../components/CellBody";
import DayBody from "../components/DayBody";
import Header from "../components/Header";
import DetailSchedule from "./DetailSchedule";

const Main = () => {
    return (
        <div className="Main">
            <Header />
            <DayBody />
            <CellBody />
        </div>
    )
}

export default Main;