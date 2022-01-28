// Define a goal date
const stephanie = "1 Aug 2022";

// HTML elements
const DaysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function parse(time) {
    if (time < 10) {
        return `0${time}`;
    }
    return time
}

function countdown() {
    const endDate = new Date(stephanie);
    const current = new Date();

    // Calculate the times from the differentes
    const totalTime = (endDate - current) / 1000;
    const days = Math.floor(totalTime / 3600 / 24);
    const hours = Math.floor(totalTime / 3600 % 24);
    const minutes = Math.floor(totalTime / 60) % 60;
    const seconds = Math.floor(totalTime) % 60;

    // console.log(days, hours, minutes, seconds);
    DaysElement.innerHTML = parse(days);
    hoursElement.innerHTML = parse(hours);
    minutesElement.innerHTML = parse(minutes);
    secondsElement.innerHTML = parse(seconds);

}
countdown()
setInterval(countdown, 1000);