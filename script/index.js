// Canvas

const canvas = document.getElementById('map-game')
const ctx = canvas.getContext('2d') // Gives access to Canvas API

const tileW = 85;
const tileH = 63;

const gridRows = 14;
const gridCols = 16;

const map = [
1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const tileImage = new Image()
tileImage.src = "./css/imgs/grasstext6.png"

tileImage.onload = () => {
  window.requestAnimationFrame(updateAll);
};

const updateAll = () => {
    drawMap()
    window.requestAnimationFrame(updateAll)
}

window.onload = () => {
    window.requestAnimationFrame(updateAll)
}

const drawMap = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing
    for(let eachRow = 0; eachRow < gridRows; eachRow++){
        for(let eachCol = 0; eachCol < gridCols; eachCol++) {
            let arrayIndex = eachRow * gridRows + eachCol;

    if(map[arrayIndex] === 1) {
        ctx.drawImage(tileImage, tileW * eachCol, tileH * eachRow, tileW, tileH);
} else {
        ctx.fillStyle = "black"
        ctx.fillRect(tileW*eachCol,tileH * eachRow,tileW,tileH)
}

}
}
}

// DOM

const choiceBtn = document.getElementById('choice-btn')
const choiceBar = document.querySelector('.choice-bar')
const choiceSkill = document.querySelectorAll('.choose-skill')
const skill = document.querySelectorAll('.skill-placement')
const attackSkills = document.querySelectorAll('.attack')
const reactSkills = document.querySelectorAll('.reaction')
const specialSkills = document.querySelectorAll('.attack')
const supportSkills = document.querySelectorAll('.attack')
const enhancementSkills = document.querySelectorAll('.attack')
const movementSkills = document.querySelectorAll('.attack')
const tacticalSkills = document.querySelectorAll('.attack')
const maneuverSkills = document.querySelectorAll('.attack')

choiceSkill.forEach(choice => {

choice.addEventListener('click', (event) => {

skill.forEach(eachSkill => {

console.log(eachSkill)

eachSkill.classList.add('hidden')

if(event.target.textContent.includes("Attack")){

attackSkills.forEach(attacks => {

attacks.classList.remove('hidden')
})

}

if(event.target.textContent.includes("Reaction")){

reactSkills.forEach(react => {

react.classList.remove('hidden')
})

}

})

})

})

/*choiceSkill.forEach(choiceClicked => {

choiceClicked.addEventListener('click', (event) => {

skill.forEach(placeSkill => {

placeSkill.classList.add('hidden')

if(event.target.textContent.includes("Attack")){

attackSkills.forEach(attacks => {

attacks.classList.remove('hidden')
})
}

if(event.target.textContent.includes("Reaction")){

console.log(event.target.textContent)

reactSkills.forEach(react => {

react.classList.remove('hidden')
})
}

})

})

})*/

choiceBtn.addEventListener('click', () => {

choiceBar.classList.toggle('hidden')

})

document.addEventListener('click', () => {

if(!choiceBar.classList.contains('hidden')){

document.addEventListener('click', () => {

choiceBar.classList.toggle('hidden')

})

}

})

skill.forEach(skillClicked => {

skillClicked.addEventListener('click', () => {

})

})

document.addEventListener("click", reduceNumber);

function reduceNumber(e) {
let counterElement = e.target
let currentValue = parseInt(e.target.textContent);

    let interval = setInterval(() => {
      if (currentValue > 70) {
        currentValue--;
        counterElement.textContent = currentValue;
      } else {
        clearInterval(interval); // Stop when reaching 70
      }
    }, 30); // Speed of reduction (lower = faster)
}

const detailsHover = document.querySelectorAll('.details-hover')

detailsHover.forEach(detail => {

detail.innerHTML = `
  <div class="img-personagem"></div>
  <div class="modifiers-container">
    <div class="modifiers" style="color: red">HP: 100 / 100</div>
    <div class="modifiers" style="color: blue">MP: 100 / 100</div>
    <div class="modifiers" style="color: green">SP: 100 / 100</div>
    <div class="modifiers" style="color: orange">AP: 5 / 5</div>
    <div class="modifiers-small" id="ps">PS: </div>
    <div class="modifiers-small" id="ss">SS: </div>
    <div class="modifiers-small" id="end">EN: </div>
    <div class="modifiers-small" id="tec">Tec:</div>
    <div class="modifiers-small" id="spd">Spd:</div>
    <div class="modifiers-small" id="rfx">Rfx:</div>
    <div class="modifiers-small"></div>
    <div class="modifiers-small"></div>
  </div>
`

})