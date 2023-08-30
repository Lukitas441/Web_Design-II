const btn = document.querySelector('#btn')
const counter = document.querySelector('#contador')

let count = 0

btn.addEventListener('click', (e) => {
    count++
    if(count == 1) {
        counter.innerHTML = `apretaste el boton 1 vez`
    } else {
        counter.innerHTML = `apretaste el boton ${count} veces`
    }
})