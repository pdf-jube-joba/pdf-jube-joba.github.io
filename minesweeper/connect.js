window.onload = function () {

  var table = document.getElementById('game')

  for (i = 0; i < height; i++) {
    tr = document.createElement('tr')
    for (j = 0; j < width; j++) {
      td = document.createElement('td')
      td.onclick = make_click(i, j)
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }

  function make_click(x, y) {
    return function () {
      chain(x, y)
      update()
      if (isLose()) {
        alert("負け")
      }
      else if (isWin()) {
        alert("勝ち")
      }
    }
  }

  function update() {
    for (i = 0; i < height; i++) {
      for (j = 0; j < width; j++) {
        if (T2[i][j] == 1) {
          if (T1[i][j] == 0) {
            table.rows[i].cells[j].innerHTML = String(count(i, j))
          } else {
            table.rows[i].cells[j].innerHTML = String("*")
          }
        } else {
          table.rows[i].cells[j].innerHTML = " "
        }
      }
    }
  }

}