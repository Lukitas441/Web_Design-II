const btn = document.querySelector("#start");
const input = document.querySelector("#input");
const result = document.querySelector("#resultado");

const min = 0;
const max = 100;
const numGanador = Math.floor(Math.random() * (max - min) + min);
console.log(numGanador);

const gameFunc = () => {
  if (input.value === "") return;

  const userAns = input.value;
  if (userAns < min || userAns > max) {
    result.innerHTML = "le erraste fuerte";
    result.style.backgroundColor = "rgba(225, 0, 0, 0.5)";
  } else {
    if (userAns != numGanador) {
      result.style.backgroundColor = "rgba(255, 237, 51, 0.5)";
      result.innerHTML =
        userAns > numGanador
          ? "Te pasaste por un poco, intenta denuevo"
          : "Tu numero es muy pequeño, intenta otra vez";
    } else {
      result.style.backgroundColor = "rgba(127, 255, 51, 0.5)";
      result.innerHTML = "GANASTE";
    }
  }
};

btn.addEventListener("click", gameFunc());
input.addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    gameFunc();
  }
})
