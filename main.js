let pointsNumer = document.querySelector(".click__number");
const clickArea = document.querySelector(".click-area");
const multiButton = document.querySelector(".button");
const pointsTittle = document.querySelector(".points__tittle");
const multiScreen = document.querySelector(".multi-screen");
const close = document.querySelector(".close");
const buyMulti = document.querySelectorAll(".multi__button");
const multiLvl = document.querySelector(".multi__lvl");
const autoClicker = document.querySelector(".multi__auto")

let points = 0;
let multi = 1;
const prices = [200, 400, 1000, 3000, 5000]
const multipliers = [2, 4, 6, 8]

const buttons = [
  buyMulti[0],
  buyMulti[1],
  buyMulti[2],
  buyMulti[3],
  buyMulti[4],
];


clickArea.addEventListener("click", (e) => {
  e.preventDefault();

  let add = (points += multi);
  pointsNumer.textContent = add;

  if (points !== 0) {
    pointsTittle.textContent = "Points";
  }
});

multiButton.addEventListener("click", () => {
  multiScreen.classList.add("multi-screen-on");
});

close.addEventListener("click", () => {
  multiScreen.classList.remove("multi-screen-on");
});


buyMulti.forEach((button) => {
  button.addEventListener("click", () =>{
    for (let i = 0; i < buttons.length; i++) {
  
      if(points >= prices[i]){
        buttons[i].classList.add("disabled")
        multi =  multipliers[i]
      }
    
    }
    lvl()
  });
});



autoClicker.addEventListener("click", () =>{
  autoClicker.classList.add("disabled")
  setInterval(() => {
    points++
    pointsNumer.textContent = points;

    multiLvl.textContent = `You past the game 👑`
  }, 1);
})




function lvl(){
  multiLvl.innerHTML = `You upgrate your multiplier lvl ${multi}`;
  setInterval(() => {
  multiLvl.innerHTML = ``;

  }, 5000);
}