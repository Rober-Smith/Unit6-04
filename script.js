let side1 = 0
let side2 = 0
let height = 0
let number = 0

document.getElementById('calculate').addEventListener('click', buttonOne)

function buttonOne () {
  height = document.getElementById('h').value
  height = parseInt(height)
  side1 = document.getElementById('a').value
  side1 = parseInt(side1)
  side2 = document.getElementById('b').value
  side2 = parseInt(side2)
  number = (side1 + side2) / 2 * height

  alert(number)
}


