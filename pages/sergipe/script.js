var form = document.getElementById('form')
var contato = document.getElementById('contato')
var overlay = document.getElementById('overlay')
var formCancel = document.getElementById('formCancel')

var overlayCriador = document.getElementById('overlay-criador')
var criadores = document.getElementById('criadores')
var closeCriadores = document.getElementById('close-criadores')

closeCriadores.addEventListener('click', () => {
    overlayCriador.style.display = 'none'
})

criadores.addEventListener('click', () => {
    overlayCriador.style.display = 'flex'
})

contato.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

formCancel.addEventListener('click', () => {
    overlay.style.display = 'none'
})

form.addEventListener('click', () => {

})