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


const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

function addItem() {
    const createLi = document.createElement('li');
    let task = document.getElementById('task').value;

    if (task === '') {
        alert("You can't add an empty task!");
    }
    else {
        createLi.textContent = task;
        document.getElementById('list').appendChild(createLi);
    }

    document.getElementById('task').value = '';

    const li = document.getElementsByTagName('li');
    for (let i=0; i < li.length; i++) {
    const span = document.createElement('span');
    const x = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(x);
    li[i].appendChild(span);
    }

    const close = document.getElementsByClassName('close');
    for (let i=0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
        const parent = this.parentElement;
        parent.style.display = 'none';
        });
    }
}

//task can be added by pressing enter
const button = document.getElementById('addTask');
let input = document.getElementById('task');
input.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        button.click();
    }
})

 button.addEventListener('click', addItem);



 
