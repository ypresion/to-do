function timeNow() {

    const date = new Date();
    const dateDiv = document.getElementById("date");
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    const current = hours + ":" + minutes + ":" + seconds;
    dateDiv.textContent = current;

    setInterval(timeNow, 1000);
}

function addZero(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}

function dayNow() {

    const date = new Date();
    const today = date.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const h1 = document.getElementById("today");

    h1.textContent = "Today is " + days[today];

}

window.addEventListener("load", timeNow());
window.addEventListener("load", dayNow());

function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";

}

const taskAdd = document.getElementById("addTask");
taskAdd.addEventListener("click", openModal());

const close = document.getElementById("close");
close.addEventListener("click", closeModal());
