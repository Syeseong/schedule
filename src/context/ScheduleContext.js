import React, { createContext, useContext, useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
const ScheduleContext = createContext();

export const useSchedules = () => useContext(ScheduleContext);

export const ScheduleProvider = ({ children }) => {
    //new Date()는 현재 날짜를 가지고 옴,(월은 0월부터 시작 ex:0 == 1월)
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    //일정 데이터를 저장할 State
    const [schedules, setSchedules] = useState([]);
    //subMonths() == Date 객체의 월에서 빼줌
    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1))
    }
    //addMonths() == Date 객체의 월에서 더해줌
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1))
    }
    //선택한 날짜를 가지고 오는 이벤트 핸들러
    const onDateClick = (day) => {
        setSelectedDate(day)
    }

    const value = {
        currentMonth,
        setCurrentMonth,
        selectedDate,
        setSelectedDate,
        schedules,
        setSchedules,
        prevMonth,
        nextMonth,
        onDateClick,
    };

    return (
        <ScheduleContext.Provider value={value}>
            {children}
        </ScheduleContext.Provider>
    );
};