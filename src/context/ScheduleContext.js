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

    //일정 내용, 시작시간, 종료시간, 색상을 저장할 State들
    const [title, setTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [color, setColor] = useState("#FFFFFF");

    //상태에 따라 취소, 저장 버튼이 보이게 하는 State
    const [btnOn, setBtnOn] = useState(false);
    //상태에 따라 Add폼이 보이게 하는 State
    const [addOn, setAddOn] = useState(false);

    //상태에 따라 모달창이 보이게 하는 State
    const [modalOn, setModalOn] = useState(false);
    //
    const [modalId, setModalId] = useState(null)
    //선택된 일정 상태
    const [currentSchedule, setCurrentSchecule] = useState(null)

    //선택된 일정을 설정하는 함수
    const selectSchedule = (scheduleId) => {
        const schedule = schedules.find(it => it.id === scheduleId);
        if (schedule) {
            console.log("실행")
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
        setCurrentSchecule(null)
    }

    //새 일정을 추가하는 함수
    const addSchedule = (newSchedule) => {
        //이전 스케줄을 복사하고 새로운 스케줄을 저장
        setSchedules((prevSchedules => [...prevSchedules, newSchedule]));
    };

    //일정을 삭제하는 함수
    const deleteSchedule = (scheduleId) => {
        const updateSchedules = schedules.filter(it => it.id !== scheduleId)
        setSchedules(updateSchedules)
    }

    //시간 겹침 검사 함수
    const isTimeOverlapping = (startTime1, endTime1, startTime2, endTime2) => {
        const start1 = parseInt(startTime1.split(":")[0], 10) * 60 + parseInt(startTime1.split(":")[1], 10)
        const end1 = parseInt(endTime1.split(":")[0], 10) * 60 + parseInt(endTime1.split(":")[1], 10)
        const start2 = parseInt(startTime2.split(":")[0], 10) * 60 + parseInt(startTime2.split(":")[1], 10)
        const end2 = parseInt(endTime2.split(":")[0], 10) * 60 + parseInt(endTime2.split(":")[1], 10)

        return !(end1 < start2 || start1 > end2)
    }

    const handleSave = () => {

        if (!title || !startTime || !endTime) {
            alert("모든 필드를 채워주세요.")
            return;
        }

        const start = parseInt(startTime.replace(":", ""), 10);
        const end = parseInt(endTime.replace(":", ""), 10);
        if (end < start) {
            alert("종료 시간은 시작 시간보다 빠를 수 없습니다.")
            return;

        }

        // 기존 일정들과의 시간 겹침 검사
        // 시간 겹침 검사
        const hasOverlap = schedules.some((schedule) => {
            // currentSchedule이 존재하고, 그 id가 현재 검사하려는 일정의 id와 같다면, 이는 현재 수정 중인 일정이므로, 겹침 검사에서 제외
            if (currentSchedule && schedule.id === currentSchedule?.id) {
                return false; // 현재 수정 중인 일정은 검사에서 제외
            }
            return schedule.date === format(selectedDate, 'yyyy-MM-dd') && isTimeOverlapping(startTime, endTime, schedule.startTime, schedule.endTime);
        });

        if (hasOverlap) {
            alert("선택한 시간에 다른 일정이 있습니다.")
            return
        }

        const formattedDate = format(selectedDate, 'yyyy-MM-dd')
        if (currentSchedule) {
            const updateSchedule = schedules.map(it => it.id === currentSchedule.id ? { ...it, title, startTime, endTime, color } : it)
            setSchedules(updateSchedule)
        } else {
            const newSchedule = {
                id: Date.now(),
                date: formattedDate,
                title,
                startTime,
                endTime,
                color
            }
            setSchedules(prev => [...prev, newSchedule])
        }

        setCurrentSchecule(null);
        setTitle("");
        setStartTime("");
        setEndTime("");
        setColor(null);
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
        selectSchedule,
        deleteSchedule,
        modalOn,
        setModalOn,
        modalId,
        setModalId,
        color,
        setColor,
        setCurrentSchecule
    };

    return (
        <ScheduleContext.Provider value={value}>
            {children}
        </ScheduleContext.Provider>
    );
}