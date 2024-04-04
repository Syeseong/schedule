
import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import { addMonths, subMonths } from 'date-fns';
import DayBody from './component/DayBody';


function App() {
  //new Date()는 현재 날짜를 가지고 옴,(월은 0월부터 시작 ex:0 == 1월)
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  //subMonths() == Date 객체의 월에서 빼줌
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }
  //addMonths() == Date 객체의 월에서 더해줌
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  return (
    <div className="App">
      <Header
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <DayBody />
    </div>
  );
}

export default App;
