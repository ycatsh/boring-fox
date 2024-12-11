document.addEventListener("DOMContentLoaded", function () {
    realTimeClock();
});

function realTimeClock() {
    var clock = new Date();
    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var amPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);

    var clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerHTML = hours + ":" + minutes + " " + amPm;
    }
    setTimeout(realTimeClock, 500);
}
