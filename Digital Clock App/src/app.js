const btn = document.getElementById('head');
const hourDis = document.getElementById('hours');
const minuteDis = document.getElementById('minutes');
const secondDis = document.getElementById('seconds');


function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
 
const updateTime = () => {
    const time = new Date();
    let hours = addZero(time.getHours());
    let minutes = addZero(time.getMinutes());
    let seconds = addZero(time.getSeconds());

    hourDis.innerHTML = `${hours}:`;
    minuteDis.innerHTML = `${minutes}:`;
    secondDis.innerHTML = `${seconds}`;

}

btn.addEventListener('click', () => {
   setInterval(updateTime,1000);
})



