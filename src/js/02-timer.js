import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
      return Notify.failure('Please choose a date in the future');
    }
    btnStart.disabled = false;
    console.log(selectedDates[0]);
    Notify.success('Good! Click "Start"');
  },
};
const fp = flatpickr('#datetime-picker', options);

const btnStart = document.querySelector('[data-start]');
btnStart.disabled = true;

btnStart.addEventListener('click', function () {
  btnStart.disabled = true;
  const deadline = fp.selectedDates[0];
  let timerId = null;
  const daysSpan = document.querySelector('[data-days]');
  const hoursSpan = document.querySelector('[data-hours]');
  const minutesSpan = document.querySelector('[data-minutes]');
  const secondsSpan = document.querySelector('[data-seconds]');

  timerId = setInterval(countdownTimer, 1000);
  function countdownTimer() {
    const delta = deadline - new Date();
    console.log(delta);
    if (delta < 1000) {
      clearInterval(timerId);
    }
    const { days, hours, minutes, seconds } = convertMs(delta);
    daysSpan.textContent = String(days).padStart(2, '0');
    hoursSpan.textContent = String(hours).padStart(2, '0');
    minutesSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');

    function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(ms / day);
      const hours = Math.floor((ms % day) / hour);
      const minutes = Math.floor(((ms % day) % hour) / minute);
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
    }
  }
});
