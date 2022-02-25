// API
const url = "https://api.adviceslip.com/advice";

fetch(url)
    .then(response => response.json())
    .then(data => apiData(data));

const advice_numb = document.querySelector(".advice-numb");
const advice_para = document.querySelector(".advice-para");


function apiData(advice) {
    
    let advices = Object.values(advice.slip);
     advice_numb.innerText = "Advice " + "#" + advices[0];
     advice_para.innerText = advices[1]
    console.log(advices)
    
}

window.addEventListener("DOMContentLoaded", apiData)

const diceBtn = document.querySelector(".dice-svg");

diceBtn.addEventListener("click", handleClick)

const audio = document.querySelector("audio")
function handleClick() {
    audio.play()
    fetch(url)
        .then(response => response.json())
        .then(data => apiData(data));
}