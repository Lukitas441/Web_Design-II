const container = document.querySelector('#table_container')

for(let i = 1; i<= 16; i++){
    container.innerHTML += `
    <div class="table_elements">
    `+i+`
    </div>`
}