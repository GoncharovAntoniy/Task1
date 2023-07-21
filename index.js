const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let second = Math.floor(seconds % 60);
    let minute = Math.floor((seconds / 60) % 60);
    let hours = Math.floor((seconds / 60 / 60) % 24);

    const interval = setInterval(() => {
      timerEl.innerHTML = `${hours}:${minute}:${second}`;
      second -= 1;
      if(hours == 0 && minute == 0 && second == 0) {
        clearInterval(interval)
      }
      if(minute == 0 && second == 0 && hours > 0) {
        hours -= 1
        minute = 60
      }
      if (second == 0 && minute > 0) {
        second = 60;
        minute -= 1;
      }

    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const timerRegex = /[\d]+/;
  if (!inputEl.value.match(timerRegex)) {
    inputEl.value = "";
  }
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});


