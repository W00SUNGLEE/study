const months = [
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
  "December"
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
/* console.log(items); */

const futureDate = new Date(2022, 6, 5, 11, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();
/* console.log(futureTime); */

const getRemainTime = () => {
  const today = new Date().getTime();
  /* console.log(today); */
  const t = futureTime - today;
  /* console.log(t); */
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  /*   console.log(oneDay); */
  // calcucate all values
  const days = Math.floor(t / oneDay);
  /* console.log(days); */
  const hours = Math.floor((t % oneDay) / oneHour);
  /* console.log(hours); */
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  const format = item => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
};

// countdown 1s = 1000ms
let countdown = setInterval(getRemainTime, 1000);

getRemainTime();
