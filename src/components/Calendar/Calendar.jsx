import React, { useState, useRef } from "react";
import * as S from "./Calendar.styled";

const parseDate = (str) => {
  if (!str) return null;
  const [day, month, year] = str.split(".");
  return new Date(2000 + parseInt(year), parseInt(month) - 1, parseInt(day));
};

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
};

const generateMonths = (startDate, count) => {
  const months = [];
  for (let i = 0; i < count; i++) {
    const date = new Date(startDate);
    date.setMonth(startDate.getMonth() + i);
    const year = date.getFullYear();
    const month = date.getMonth();
    const label = date.toLocaleString("ru", { month: "long", year: "numeric" });
    months.push({ year, month, label });
  }
  return months;
};

const getDaysForMonth = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];
  for (let i = 0; i < startOffset; i++) {
    days.push({ day: null, otherMonth: true, key: `empty-${i}` });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({ day: d, otherMonth: false, key: `day-${d}` });
  }
  return days;
};

const getInitialMonths = () => {
  const today = new Date();
  const startMonth = new Date(today.getFullYear(), today.getMonth());
  return generateMonths(startMonth, 6);
};
const Calendar = ({ startDate, endDate, onRangeChange }) => {
  const scrollRef = useRef(null);
  const [displayMonths, setDisplayMonths] = useState(getInitialMonths);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    if (!scrollRef.current || isLoading) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      const lastMonth = displayMonths[displayMonths.length - 1];
      const nextStart = new Date(lastMonth.year, lastMonth.month + 1, 1);
      setIsLoading(true);
      setTimeout(() => {
        setDisplayMonths((prev) => [...prev, ...generateMonths(nextStart, 3)]);
        setIsLoading(false);
      }, 100);
    } else if (scrollTop <= 50) {
      const firstMonth = displayMonths[0];
      const prevStart = new Date(firstMonth.year, firstMonth.month - 3, 1);
      setIsLoading(true);
      setTimeout(() => {
        const newMonths = generateMonths(prevStart, 3);
        setDisplayMonths((prev) => [...newMonths, ...prev]);
        setTimeout(() => {
          if (scrollRef.current) {
            const prevHeight = scrollRef.current.scrollHeight;
            requestAnimationFrame(() => {
              const newHeight = scrollRef.current.scrollHeight;
              scrollRef.current.scrollTop += newHeight - prevHeight;
            });
          }
        }, 50);
        setIsLoading(false);
      }, 100);
    }
  };

  const handleDayClick = (day, month, year) => {
    const clickedDate = new Date(year, month, day);
    const formatted = formatDate(clickedDate);
    if (!startDate || (startDate && endDate)) {
      onRangeChange(formatted, null);
    } else {
      let newStart = startDate;
      let newEnd = formatted;
      if (parseDate(formatted) < parseDate(startDate)) {
        newStart = formatted;
        newEnd = startDate;
      }
      onRangeChange(newStart, newEnd);
    }
  };

  const isDateInRange = (year, month, day, start, end) => {
    if (!start || !end) return false;
    const current = new Date(year, month, day);
    const startD = parseDate(start);
    const endD = parseDate(end);
    return current >= startD && current <= endD;
  };

  const isDateSelected = (year, month, day, dateStr) => {
    const current = formatDate(new Date(year, month, day));
    return current === dateStr;
  };

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.CalendarTitle>Период</S.CalendarTitle>
      </S.CalendarHeader>

      <S.StickyWeekdays>
        <S.Weekday>пн</S.Weekday>
        <S.Weekday>вт</S.Weekday>
        <S.Weekday>ср</S.Weekday>
        <S.Weekday>чт</S.Weekday>
        <S.Weekday>пт</S.Weekday>
        <S.Weekday>сб</S.Weekday>
        <S.Weekday>вс</S.Weekday>
      </S.StickyWeekdays>

      <S.ScrollableBody ref={scrollRef} onScroll={handleScroll}>
        {displayMonths.map(({ year, month, label }) => {
          const days = getDaysForMonth(year, month);
          return (
            <S.MonthBlock key={label}>
              <S.MonthTitle>{label}</S.MonthTitle>
              <S.DaysGrid>
                {days.map((d, idx) => {
                  const isInRange =
                    !d.otherMonth &&
                    d.day &&
                    isDateInRange(year, month, d.day, startDate, endDate);
                  const isStart =
                    !d.otherMonth &&
                    d.day &&
                    isDateSelected(year, month, d.day, startDate);
                  const isEnd =
                    !d.otherMonth &&
                    d.day &&
                    isDateSelected(year, month, d.day, endDate);
                  const isActive = isStart || isEnd;

                  return (
                    <S.DayCell
                      key={d.key || idx}
                      $isOtherMonth={d.otherMonth}
                      $isActive={isActive}
                      $isInRange={isInRange && !isActive}
                      onClick={() =>
                        !d.otherMonth &&
                        d.day &&
                        handleDayClick(d.day, month, year)
                      }
                    >
                      {!d.otherMonth && d.day ? d.day : ""}
                    </S.DayCell>
                  );
                })}
              </S.DaysGrid>
            </S.MonthBlock>
          );
        })}
        {isLoading && <div>Загрузка...</div>}
      </S.ScrollableBody>

      <S.CalendarFooter>
        <S.SelectedPeriodText>
          {startDate && !endDate && `Начало: ${startDate}`}
          {startDate && endDate && `Период: ${startDate} — ${endDate}`}
          {!startDate && "Выберите начальную дату"}
        </S.SelectedPeriodText>
      </S.CalendarFooter>
    </S.CalendarContainer>
  );
};

export default Calendar;
