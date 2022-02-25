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
    
}

window.addEventListener("DOMContentLoaded", apiData);

// Play music on app load
const audio = document.querySelector("audio")


const diceBtn = document.querySelector(".dice-svg");

diceBtn.addEventListener("click", handleClick)


function handleClick() {
      audio.play()
    fetch(url)
        .then(response => response.json())
        .then(data => apiData(data));
}