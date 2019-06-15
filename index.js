const bar = document.querySelector("#bar");
let barWidth = bar.offsetWidth;
let interval;

const startButton = document.querySelector("#start-button");

function runProgressBar() {
  
}

startButton.addEventListener("click", e => {
  if(interval){
    clearInterval(interval);
  }
  interval = setInterval(() => {
    if (barWidth === 300) {
      clearInterval(interval);
    } else {
      bar.style.width = (barWidth += 1) + "px";
    }
  }, 11);
  interval();
  if (barWidth < 300) {
    clearInterval(interval);
  }
});
