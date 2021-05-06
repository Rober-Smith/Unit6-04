let base1 = 0
let base2 = 0
let height = 0
let number = 0

document.getElementById('calculate').addEventListener('click', buttonOne)

function buttonOne () {
  height = document.getElementById('h').value
  height = parseInt(height)
  side1 = document.getElementById('a').value
  side1 = parseInt(base1)
  side2 = document.getElementById('b').value
  side2 = parseInt(base2)
  number = (side1 + side2) / 2 * height
  <!--formula-->
  alert(number)
}
