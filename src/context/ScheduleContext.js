import React, { createContext, useContext, useState } from 'react';
import { addMonths, format, subMonths } from 'date-fns';

const ScheduleContext = createContext();

export const useSchedules = () => useContext(ScheduleContext);

export const ScheduleProvider = ({ children }) => {
    //new Date()는 현재 날짜를 가지고 옴,(월은 0월부터 시작 ex:0 == 1월)
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    //일정 데이터를 저장할 State
    const [schedules, setSchedules] = useState([]);

    //일정 내용, 시작시간, 종료시간을 저장할 State들
    const [title, setTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    //상태에 따라 취소, 저장 버튼이 보이게 하는 State
    const [btnOn, setBtnOn] = useState(false);
    //상태에 따라 Add폼이 보이게 하는 State
    const [addOn, setAddOn] = useState(false);

    //선택된 일정 상태
    const [currentSchedule, setCurrentSchecule] = useState(null)

    //선택된 일정을 설정하는 함수
    const selectSchedule = (scheduleId) => {
        const schedule = schedules.find(it => it.id === scheduleId);
        if (schedule) {
            setCurrentSchecule(schedule);
            setTitle(schedule.title)
            setStartTime(schedule.startTime)
            setEndTime(schedule.endTime);
            setAddOn(true);
            setBtnOn(true);
        }
    }

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

    //새 일정을 추가하는 함수
    const addSchedule = (newSchedule) => {
        //이전 스케줄을 복사하고 새로운 스케줄을 저장
        setSchedules((prevSchedules) => [...prevSchedules, newSchedule]);
    };

    const handleSave = () => {
        if (!title || !startTime || !endTime) {
            alert("모든 필드를 채워주세요.")
            return;
        }

        const formattedDate = format(selectedDate, 'yyyy-MM-dd')
        if (currentSchedule) {
            const updateSchedule = schedules.map(it => it.id === currentSchedule.id ? { ...it, title, startTime, endTime } : it)
            setSchedules(updateSchedule)
        } else {
            const newSchedule = {
                id: Date.now(), date: formattedDate, title, startTime, endTime
            }
            addSchedule(newSchedule)
        }
        setCurrentSchecule(null);
        setTitle("");
        setStartTime("");
        setEndTime("");
        setBtnOn(false);
        setAddOn(false);
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
        addSchedule,
        title,
        setTitle,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        handleSave,
        btnOn,
        setBtnOn,
        addOn,
        setAddOn,
        selectSchedule
    };

    return (
        <ScheduleContext.Provider value={value}>
            {children}
        </ScheduleContext.Provider>
    );
}