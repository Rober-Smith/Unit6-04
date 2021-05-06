let number= 0

document.getElementById('calculate').addEventListener('click',buttonOne)

function buttonOne ( ) {
  base1 = document.getElementById('a').value
  base1 = parseInt(base1)
  base2 = document.getElementById('b').value
  base2 = parseInt(base2)
  height = document.getElementById('h').value
  height = parseInt(height)
  number = ((base1 + base2) / 2) * height 
  alert(number)
}

