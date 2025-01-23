function startTime(){
    let today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let day = today.getDay();
    let month = today.getUTCMonth();

    min = checkTime(min);

    document.getElementById('txt').innerHTML = hours + ":" + min;
    document.getElementById('seconds').innerHTML = sec
   
    time = setTimeout('startTime()', 500);
}
function checkTime(i){
    if (i<10){
        i="0"+i;
    } return i;
}

document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    let greetingMessage;

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingMessage = 'Good Afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
        greetingMessage = 'Good Evening';
    } else {
        greetingMessage = 'Good Night';
    }

    greetingElement.textContent = greetingMessage + ", Faith";
});

startTime()
