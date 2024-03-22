import { useState, useEffect } from "react";
const DatePicker = ({
  selectedDate: dateFromParent,
  onDateChange,
  minDate,
  maxDate,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (dateFromParent) {
      setSelectedDate(dateFromParent);
    }
  }, [dateFromParent]);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDaysOfWeek = () => {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  };

  const generateMonthMatrix = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const matrix = [[]];
    let currentRow = 0;
    let currentDate = 1;

    for (let i = 0; i < 42; i++) {
      if (
        i === firstDayOfMonth ||
        (currentDate > 1 && currentDate <= daysInMonth)
      ) {
        if (!matrix[currentRow]) {
          matrix[currentRow] = [];
        }
        matrix[currentRow].push(
          currentDate <= daysInMonth ? currentDate : null
        );
        currentDate++;
      } else {
        matrix[currentRow].push(null);
      }

      if (matrix[currentRow].length === 7 && i < 41) {
        currentRow++;
        matrix[currentRow] = [];
      }
    }

    return matrix;
  };

  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());

  const handleDateClick = (date) => {
    if (date !== null) {
      const newDate = new Date(year, month, date);
      setSelectedDate(newDate);
      if (onDateChange) {
        onDateChange(newDate);
      }
    }
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const handlePrevYear = () => {
    setYear(year - 1);
  };
  const handleNextYear = () => {
    setYear(year + 1);
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };

  const renderYearSelector = () => {
    const years = [];
    for (let i = minDate.getFullYear(); i <= maxDate.getFullYear(); i++) {
      years.push(i);
    }
    return (
      <select
        className="text-center px-5 py-1 border-black "
        value={year}
        onChange={handleYearChange}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
  };

  const renderMonthSelector = () => {
    return (
      <select
        className="text-center px-5 py-1 border-black "
        value={month}
        onChange={handleMonthChange}
      >
        {getMonths().map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>
    );
  };

  const getMonths = () => {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  };

  const renderDaysOfWeek = () => {
    return getDaysOfWeek().map((day) => (
      <div key={day} className="day-of-week justify-around w-full flex ">
        {day}
      </div>
    ));
  };

  const renderMonthDays = () => {
    const monthMatrix = generateMonthMatrix(year, month);
    return monthMatrix.map((row, rowIndex) => (
      <div key={rowIndex} className="week flex">
        {row.map((day, index) => (
          <div
            key={index}
            bg={"#007bff"}
            style={{ width: `calc(100% / 7)` }}
            className={`day p-2 text-center ${day ? "" : "disabled"} ${
              selectedDate.getDate() === day ? "selected" : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day && (
              <span className="day-number text-center font-bold ">{day}</span>
            )}
          </div>
        ))}
      </div>
    ));
  };
  return (
    <div className="date-picker   m-auto w-1/4  ">
      <div className="header justify-around items-center flex">
        <button className="text-2xl font-bold" onClick={handlePrevMonth}>
          &lt;
        </button>
        <div className="selector ">{renderMonthSelector()}</div>
        <button className="text-2xl font-bold" onClick={handleNextMonth}>
          &gt;
        </button>
        <button className="text-2xl font-bold" onClick={handlePrevYear}>
          &lt;
        </button>
        <div className="selector ">{renderYearSelector()}</div>
        <button className="text-2xl font-bold" onClick={handleNextYear}>
          &gt;
        </button>
      </div>
      <div className="calendar m-5 ">
        <div className="days-of-week flex ">{renderDaysOfWeek()}</div>
        <div className="month-days">{renderMonthDays()}</div>
      </div>
    </div>
  );
};

export default DatePicker;
