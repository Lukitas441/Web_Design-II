const timeout = document.querySelector("#timeout");
const interval = document.querySelector("#interval");
const reqAnimation = document.querySelector("#requestAnimation");
const stopBtn = document.querySelector("#stop");

let idTimeout
let idInterval
let idReqAnimation

timeout.addEventListener("click", () => {
    idTimeout = setTimeout(() => console.log("Mensaje con retardo de 1 sec"), 1000);
    idTimeout
});
interval.addEventListener("click", () => {
  idInterval = setInterval(
    () => console.log("Mensaje repetido cada 4 sec"),
    4000
  );
  idInterval;
});
reqAnimation.addEventListener("click", () => {
  idReqAnimation = requestAnimationFrame(() =>
    console.log("Mensaje cada x tiempo")
  );
  idReqAnimation
});
stopBtn.addEventListener('click', ()=>{
    cl
    if(idTimeout){
        clearTimeout(idTimeout)
    }
    if(idInterval){
        clearInterval(idInterval)
    }
    if(idReqAnimation){
        cancelAnimationFrame(idReqAnimation)
    }
})
