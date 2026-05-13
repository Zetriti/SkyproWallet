import React from "react";
import * as S from "./Calendar.styled";

const Calendar = ({ selectedDate, onDateChange }) => {
  const isEditable = typeof onDateChange === "function";

  const months = [
    { year: 2024, month: 6, label: "Июль 2024" },
    { year: 2024, month: 7, label: "Август 2024" },
    { year: 2024, month: 8, label: "Сентябрь 2024" },
  ];

  const getDaysForMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < startOffset; i++) {
      days.push({ day: null, otherMonth: true, key: `empty-start-${i}` });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({ day: d, otherMonth: false, key: `current-${d}` });
    }
    return days;
  };

  let selectedDay = null,
    selectedMonth = null,
    selectedYear = null;
  if (selectedDate) {
    const [day, month, year] = selectedDate.split(".");
    if (day && month && year) {
      selectedDay = parseInt(day, 10);
      selectedMonth = parseInt(month, 10) - 1;
      selectedYear = 2000 + parseInt(year, 10);
    }
  }

  const handleDayClick = (day, month, year, isOtherMonth) => {
    if (!isEditable || isOtherMonth || day === null) return;
    const formatted = `${day.toString().padStart(2, "0")}.${(month + 1)
      .toString()
      .padStart(2, "0")}.${year.toString().slice(-2)}`;
    onDateChange(formatted);
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

      <S.ScrollableBody>
        {months.map(({ year, month, label }) => {
          const days = getDaysForMonth(year, month);
          return (
            <S.MonthBlock key={label}>
              <S.MonthTitle>{label}</S.MonthTitle>
              <S.DaysGrid>
                {days.map((d, idx) => {
                  const isActive =
                    !d.otherMonth &&
                    d.day !== null &&
                    selectedDay === d.day &&
                    selectedMonth === month &&
                    selectedYear === year;
                  return (
                    <S.DayCell
                      key={d.key || idx}
                      $isOtherMonth={d.otherMonth}
                      $isActive={isActive}
                      onClick={() =>
                        handleDayClick(d.day, month, year, d.otherMonth)
                      }
                    >
                      {d.day !== null && !d.otherMonth ? d.day : ""}
                    </S.DayCell>
                  );
                })}
              </S.DaysGrid>
            </S.MonthBlock>
          );
        })}
      </S.ScrollableBody>

      <S.CalendarFooter>
        <S.SelectedPeriodText>
          {selectedDate
            ? `Срок исполнения: ${selectedDate}`
            : "Выберите срок исполнения."}
        </S.SelectedPeriodText>
      </S.CalendarFooter>
    </S.CalendarContainer>
  );
};

export default Calendar;
