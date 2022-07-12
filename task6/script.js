const body = document.querySelector('#main');
const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

body.addEventListener('click', makeGreen);

function makeGreen (){
    trafficLightEl3.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl.style.background = ('green');
    body.removeEventListener('click', makeGreen);
    body.addEventListener('click', makeYellow);
}
function makeYellow (){
    trafficLightEl.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    trafficLightEl2.style.background = ('Yellow');
    body.removeEventListener('click', makeYellow);
    body.addEventListener('click', makeRed);
}
function makeRed (){
    trafficLightEl.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('Red');
    body.removeEventListener('click', makeRed);
    body.addEventListener('click', makeGreen);
}