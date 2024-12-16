export const generateScheduleForWeek = (year, month, day) => {
  const schedule = [];
  const firstDayOfWeek = (new Date(year, month, day).getDay() + 6) % 7;

  const firstDateOfWeek = new Date(year, month, day - firstDayOfWeek);

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(firstDateOfWeek);
    currentDate.setDate(firstDateOfWeek.getDate() + i);

    schedule.push({
      id: currentDate.getDate(),
      // day: daysOfWeek[currentDate.getDay()],
      // date: formatDate(currentDate),
    });
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

    schedule.push({
      id: day,
      day: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][dayOfWeek],
      date: `${day < 10 ? "0" : ""}${day}.${month + 1 < 10 ? "0" : ""}${
        month + 1
      }.${year.toString().slice(-2)}`,
    });
  }

  return schedule;
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
