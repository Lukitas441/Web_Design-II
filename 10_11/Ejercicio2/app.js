const container = document.querySelector("#table_container");

for (let i = 1; i <= 16; i++) {
  loadElements(i);
}

function loadElements(i) {
  setTimeout(() => {
    container.innerHTML += `<div class="table_elements pop-up">` + i + `</div>`;
    setTimeout(() => {
      container.children[i - 1].classList.remove("pop-up");
    }, 500);
  }, i * 600)
}


setTimeout(()=>{
  for (let i = 0; i < 16; i++) {
    container.children[i].classList.add('table_elements--active')
    
  }
}, 10300)

