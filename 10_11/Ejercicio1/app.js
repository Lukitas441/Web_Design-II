const submitBtn = document.querySelector('button[type=submit]')
const inputs = document.querySelectorAll('input')

submitBtn.addEventListener('click', () => {
    inputs.forEach(input => input.value = "")
    alert('Iniciaste sesion')
})