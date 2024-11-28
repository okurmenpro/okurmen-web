/* eslint-disable no-undef */
export const generateScheduleForWeek = (year, month, day) => {
  const schedule = [];
  const firstDayOfWeek = (new Date(year, month, day).getDay() + 6) % 7;

  const firstDateOfWeek = new Date(year, month, day - firstDayOfWeek);
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? "0" : ""}${day}.${
      month < 10 ? "0" : ""
    }${month}.${year}`;
  };

  const daysOfWeek = ["Пн", "Вт", "Чт", "Сб"];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(firstDateOfWeek);
    currentDate.setDate(firstDateOfWeek.getDate() + i);

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const date = formatDate(currentDate);

    if (dayOfWeek && date) {
      schedule.push({
        id: currentDate.getDate(),
        day: dayOfWeek,
        date: date,
      });
    }
  }

  return schedule;
};

export const generateScheduleForMonth = (year, month) => {
  const schedule = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7;

  for (let i = 0; i < firstDayOfMonth; i++) {
    schedule.push({ id: `empty-${i}`, day: "", date: "" });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, month, day);
    const dayOfWeek = (currentDate.getDay() + 6) % 7;

    const dayName = ["Пн", "Вт", "Чт", "Сб"][dayOfWeek];
    const date = `${day < 10 ? "0" : ""}${day}.${month + 1 < 10 ? "0" : ""}${
      month + 1
    }.${year.toString().slice(-2)}`;

    if (dayName && date) {
      schedule.push({
        id: day,
        day: dayName,
        date: date,
      });
    }
  }

  return schedule.filter((item) => item.day !== "" && item.date !== "");
};

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDay = now.getDate();

console.log(currentDay, currentMonth, currentYear);

export const dataSchedul = {
  week: generateScheduleForWeek(currentYear, currentMonth, currentDay),
  month: generateScheduleForMonth(currentYear, currentMonth),
};
