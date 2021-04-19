const showTime = () => {
  //calling a new Date object to get the most recent hour / minute / second

  const time = new Date();
  const hour = time.getHours();
  const minute = addLeadingZero(time.getMinutes());
  const seconds = addLeadingZero(time.getSeconds());

  const isAm = hour < 12 || hour === 0;
  let amPm = isAm ? 'AM' : 'PM';

  return `${renderTwelveHourClock(hour)}:${minute}:${seconds} ${amPm}`;
};

const addLeadingZero = (number) => {
  return number < 10 ? '0' + number : number;
};

const renderTwelveHourClock = (whatHour) => {
  whatHour = whatHour >= 13 ? whatHour - 12 : whatHour;

  whatHour = whatHour === 0 ? whatHour + 12 : whatHour;
  return whatHour;
};

const showDate = () => {
  const date = new Date();

  const weekday = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const todaysDate = addDateSuffix(date.getDate());
  const year = date.getFullYear();

  return `${renderTwelveHourClock(weekday)}, ${month} ${todaysDate} ${year}`;
};

function addDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return date + 'st';
      case 2:
        return date + 'nd';
      case 3:
        return date + 'rd';
    }
  }
  return date + 'th';
}

const renderTimeDateDisplay = () => {
  document.getElementById('clock').textContent = showTime();
  document.getElementById('date').textContent = showDate();
};

const monthsOfYear = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

//get day of the week + day of the month
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

renderTimeDateDisplay();

setInterval(renderTimeDateDisplay, 1000);
