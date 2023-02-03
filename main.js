let input = document.getElementById('countOperation')
let result = document.getElementById('result')


document.querySelectorAll('.charKey').forEach(function (charBtn) {
  charBtn.addEventListener('click', () => {
    const value = charBtn.dataset.value
    input.innerText += value
  })
})

document.getElementById('clear').addEventListener('click', () => {
  input.innerText = ''
  result.innerText = ''
})

document.getElementById('back').addEventListener('click', backspace)

document.getElementById('equal').addEventListener('click', calculator)

function backspace() {
  let resultado = document.getElementById('countOperation').innerHTML
  document.getElementById('countOperation').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}

function calculator() {
  const countResult = parseInt(eval(input.innerText))
  result.innerText = countResult
  input.innerText = ''
}
