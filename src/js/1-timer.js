import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import '../css/calendar.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

let daysEl = document.querySelector('[data-days]');
let hoursEl = document.querySelector('[data-hours]');
let minutesEl = document.querySelector('[data-minutes]');
let secondsEl = document.querySelector('[data-seconds]');

function disableBtn() {
  btnStart.disabled = true;
  btnStart.setAttribute('id', 'js-disabled');
}

function enableBtn() {
  btnStart.disabled = false;
  btnStart.removeAttribute('id');
}

disableBtn();

let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const now = Date.now();
    userSelectedDate = selectedDates[0];

    if (userSelectedDate < now) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      enableBtn();
    }
  },
};

const fp = flatpickr(input, options);

function disableInput() {
  input.disabled = true;
}

function enableInput() {
  input.disabled = false;
}

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  const intervalId = setInterval(() => {
    const currentDate = Date.now();
    const timeDiff = userSelectedDate - currentDate;
    const time = convertMs(timeDiff);

    if (timeDiff > 0) {
      updateTimer(time);
      disableBtn();
      disableInput();
    } else {
      clearInterval(intervalId);
      enableInput();
      updateTimer({ days: '00', hours: '00', minutes: '00', seconds: '00' });
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}
