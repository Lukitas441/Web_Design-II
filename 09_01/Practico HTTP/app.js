const btn = document.querySelector('#btn')
const input = document.querySelector('#urlInput')
const divResult = document.querySelector('#result')

btn.addEventListener('click', ()=>{
    try {
        const url = new URL(input.value)
        const params = url.searchParams

        divResult.innerHTML = `
        <p>
        <li><b>PROTOCOLO:</b>${url.protocol}</li>
        <li><b>Dominio completo:</b>${url.hostname}</li>
        <li><b>Puerto:</b>${url.port}</li>
        <li><b>Ruta completa:</b>${url.pathname}</li>
        <li><b>Query strings:</b></li>
        </p>`

        params.forEach((v, name) => {
            divResult.innerHTML += `<p>${name}:${v}</p>`
        })

        const newQueryParam = prompt('Ingresa el nombre de la nueva variable: ')
        const newQueryParamValue = prompt(`Ingresa el valor de ${newQueryParam}: `)
        params.append(newQueryParam, newQueryParamValue)

        divResult.innerHTML += `<p><b>URL Modificada:</b>${url.toString()}</p>`
    } catch(e) {
        divResult.innerHTML = `<p>Error: ${e.message}</p>`
    }
})