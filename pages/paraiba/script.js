var form = document.getElementById('form')
var contato = document.getElementById('contato')
var overlay = document.getElementById('overlay')
var formCancel = document.getElementById('formCancel')


contato.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

formCancel.addEventListener('click', () => {
    overlay.style.display = 'none'
})

form.addEventListener('click', () => {

})