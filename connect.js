window.onload = function () {

var table = document.getElementById('game')

for (i = 0; i < height; i++) {
  tr = document.createElement('tr')
  for (j = 0; j < width; j++) {
    td = document.createElement('td')
    td.onclick = make_click(i,j)
    tr.appendChild(td)
  }
  table.appendChild(tr)
}

function make_click(x,y){
  return (function (){
    if (reverse(x,y)){
      update()
    } else {
      alert("負け")
    }
  })
}

function update(){
  for (i = 0; i < height; i++){
    for (j = 0; j < width; j ++){
      if (T2[i][j] == 1){
        table.rows[i].cells[j].innerHTML = count(i,j).toString()
      } else {
        table.rows[i].cells[j].innerHTML = " "
      }
    }
  }
}
}