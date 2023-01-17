const icon_calculator = document.querySelector('.icon-calculator');
const icon_instagram = document.querySelector('.icon-instagram');
const icon_spotify = document.querySelector('.icon_spotify');
const calculator = document.getElementById('container-math');
const instagram = document.getElementById('container-insta');
const spotify = document.getElementById('container-spotify');
const containerApps = document.querySelector('.container-app');
const status_bar = document.getElementById('status-bar');
const btn_back = document.querySelector('.back');
const valueNumerator = document.querySelector('.nomerator');
const valueDenominator = document.querySelector('.denominator');
const showResult = document.querySelector('.output');
const btnSubmitCalc = document.querySelector('.btn');
const goHome = document.querySelector('.line-home');

icon_calculator.addEventListener('click', open_calculator);
icon_instagram.addEventListener('click', open_instagram);
icon_spotify.addEventListener('click', open_spotify);
btn_back.addEventListener('click', back);
btnSubmitCalc.addEventListener('click', math);
goHome.addEventListener('click', backHome);

function open_calculator() {
    containerApps.style.display = "none";
    calculator.style.display = "block";
    console.log("Opening Calculator");
}

function open_instagram() {
    // status_bar.classList.add('status_bar_black');
    containerApps.style.display = "none";
    instagram.style.display = "block";
    console.log("Opening Instagram");
}

function open_spotify() {
    containerApps.style.display = "none";
    spotify.style.display = "block"
    console.log("Opening Spotify");
}
open_spotify();

function back() {
    containerApps.style.display = "flex";
    calculator.style.display = "none";
    instagram.style.display = "none";
    spotify.style.display = "none";
    console.log("Back Home");
}

function math() {
    if (valueNumerator.value == "" || valueDenominator.value == "") {
        showResult.innerText = "Undefined value";
        showResult.style.color = "red";
        console.log("Undefined value");
    } else if (isNaN(valueNumerator.value) || isNaN(valueDenominator.value)) {
        showResult.innerText = "Impossible to add a letter";
        showResult.style.color = "red";
        console.log("Undefined value");
    } else {
        let result = (parseInt(valueNumerator.value)) + (parseInt(valueDenominator.value));
        showResult.innerText = result;
        showResult.style.color = "white";
        console.log("Performing sum");
    }
}

function backHome() {
    back();
}

function time() {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    if (hh < 10) {
        document.querySelector('.time_now').innerText = "0" + hh + ":" + mm;
    } else {
        document.querySelector('.time_now').innerText = hh + ":" + mm;
    }
    if (mm < 10) {
        document.querySelector('.time_now').innerText = "0" + hh + ":0" + mm;
    } 
}
setInterval(time, 1000);