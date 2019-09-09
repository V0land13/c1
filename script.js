const timer = document.querySelector('.counter');
const minutes = document.querySelector('.show_minutes');
const seconds = document.querySelector('.show_seconds');
const message = document.querySelector('.message');

let countSec = 0;
let countMin = 0;
let stopCounter = 0;
let counterChecker = 0;

// Функция обновления отображения значений таймера
const updateText = () =>{ 
  show_minutes.innerHTML = (0 + String(countMin)).slice(-2);
  show_seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

// функция таймер
const start_Counter = () =>{
  let total = countSec + countMin * 60;
  const timeinterval = setTimeout(start_Counter, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<p>I am done...</p>'
  }
  if(countSec > 0) countSec--;
  else{
    countSec = 59;
    countMin--;
  }
  if(stopCounter != 0) clearTimeout(timeinterval);
  updateText();
  
}


// нажатия на клавиши
min_plus.onclick = () =>{
  if (countMin < 59) ++countMin;
  else countMin = 0;
  updateText()
}

min_minus.onclick = () =>{
  if (countMin > 0) --countMin;
  else countMin = 59;
  updateText()
}

sec_plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
    countSec = 0;
    ++countMin;
  }
  updateText()
}

sec_minus.onclick = () =>{
  if(countMin <= 0 && countSec===0){
    countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
    countSec = 59;
    --countMin;
  }
  updateText();
}

counter_start.onclick = () => {
    if(counterChecker===0){
      stopCounter = 0;
      start_Counter();
      counterChecker = 1;
    }
}

counter_stop.onclick = () => {
    stopCounter = 1;
    counterChecker = 0;
}

reset_all.onclick = () => {
    stopCounter = 1;
    counterChecker = 0;
    updateText();
    const reset_it = () =>{
      countSec = 0;
      countMin = 0;
      counterChecker = 0;
      timer.style.display = '';
      message.innerHTML = ''
      updateText();
      stopCounter = 0;
    }
    setTimeout(reset_it, 100);

}
