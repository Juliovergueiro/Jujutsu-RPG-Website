const playerCode = new XMLHttpRequest()
const xhr = new XMLHttpRequest()
const chars = new XMLHttpRequest()
const playerList = document.getElementById('player-list')
const skillBar = document.querySelector('.skill-bar')
const skillClick = document.querySelectorAll('.skill-buttons')
const skillBtn = document.getElementById('skill-btn')
const actionClick = document.querySelectorAll('.action')
const admClick = document.getElementById('adm-btn')
const admImages = document.querySelectorAll('.admImages')
const announce = document.getElementById('announce-letters')
const announce2 = document.getElementById('announce-letters2')
const nameClick = document.querySelectorAll('.player-info')

//

playerCode.open('get', 'data/player-code.txt', true)
playerCode.onload = function () {

const parser = new DOMParser();
const doc = parser.parseFromString(playerCode.responseText, "text/html");
const newElements = doc.body.childNodes;

// Append each child to the container
newElements.forEach((node) => playerList.appendChild(node));

const barFill = document.querySelectorAll('.player-bar')

barFill.forEach(bar => {
        bar.addEventListener('click', barInteract)
})

barFill.forEach((bar) => {
function loadChars (){

if (bar.textContent.includes("Gojo")) {

const playerInfo = bar.querySelector('.player-info')

playerInfo.textContent = "Gojo Kazuki"

}

if (bar.textContent.includes("Ryuji")) {

const playerInfo = bar.querySelector('.player-info')

playerInfo.textContent = "Ryuji Yaguchi"
}

}

loadChars()

})

}

//

playerCode.send()

xhr.open("get", "data/details-code.txt", true)

xhr.onload = function () {

if(xhr.status == 200){
        document.querySelector(".details-hover").innerHTML = xhr.responseText
}

}

xhr.send()

// AJAX coletando Personagens

chars.open('get', 'data/chars.json', true)

chars.onload = function () {

let data = JSON.parse(chars.responseText) // JSON carregado

//barClick.forEach(bar) = function () {

//if('barFind > ')

//}

const playerName = `${data.playerData.name}, Lv. ${data.playerData.level}`
const hpValue = data.playerData.hp
const mpValue = data.playerData.mp

/*
const parser = new DOMParser();
const doc = parser.parseFromString(playerCode.responseText, "text/html");
const newElement = doc.body.firstElementChild; // Assuming only one root element in your AJAX HTML.

newElement.querySelector(".player-info").childNodes[0].textContent = playerName;
newElement.querySelector(".hp-number").textContent = hpValue;
newElement.querySelector(".mp-number").textContent = mpValue;

const hpPercentage = (data.playerData.hp / data.playerData.max_hp) * 100; // Adjust denominator as per max HP
const mpPercentage = (data.playerData.mp / data.playerData.max_mp) * 100; // Adjust denominator as per max MP

newElement.querySelector(".hp-bar").style.width = `${hpPercentage}%`;
newElement.querySelector(".mp-bar").style.width = `${mpPercentage}%`;

*/

}

chars.send()

const canvas = document.getElementById('map-game')
const ctx = canvas.getContext('2d')

let attacking = false;

let lettersPop = false

skillBtn.addEventListener('click', skillAppear)

actionClick.forEach(action => {
        action.addEventListener('click', attackAction)
})

skillClick.forEach(skill => {
        skill.addEventListener('click', barAppear)
})

function attackAction() {

attacking = true

}

function barInteract () {

if(attacking == true){

announce.style.opacity = 1

announce2.style.opacity = 1;

setInterval(() => { // Msm coisa que o Timeout, mas o Timeout é 1x só

announce.style.opacity = 0
announce2.style.opacity = 0;
}, 6000);

console.log(`Atacou!`)
}

skillBar.style.display = 'none'

}

function barAppear(click) {

if(skillBar.style.display === 'block'){

skillBar.style.display = 'none'

} else {

skillBar.style.display = 'block'

}

if(click.target.id === "adm-btn"){

admImages.forEach(admImg => {
        admImg.style.display = 'block'
})

if(skillBar.style.display === 'none'){

admImages.forEach(admImg => {
        admImg.style.display = 'none'
})

}

}

}

function skillAppear() {

actionClick.forEach(actImg => {
        actImg.style.display = 'block'
})

if(skillBar.style.display === 'block'){

actionClick.forEach(actImg => {
        actImg.style.display = 'none'
})

}

}

function rollDice(min, max) {

let Dado = Math.floor((Math.random() * max) + min)

return Dado;

}

const umd6 = () => rollDice(1, 6)
const umd8 = () => rollDice(1, 8)
const umd12 = () => rollDice(1, 12)
const umd20 = () => rollDice(1, 20)