var height = 10;
var width = 10;
var number = 10;

// 爆弾が埋まっているかどうか
var T1 = new Array(height);
for (i = 0; i < height; i++) {
  T1[i] = (new Array(width)).fill(0);
}

var number0 = number
while (number0 > 0) {
  x = Math.floor(Math.random() * height)
  y = Math.floor(Math.random() * width)
  if (T1[x][y] == 0) {
    T1[x][y] = 1;
    number0 = number0 - 1;
  }
}

// プレイヤーが開いたかどうか
var T2 = new Array(height);
for (i = 0; i < height; i++) {
  T2[i] = new Array(width).fill(0);
}

function is_safe(x, y) {
  return (0 <= x && x < height && 0 <= y && y < width)
}

function count(x, y) {
  sum = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (is_safe(x + i - 1, y + j - 1)) {
        if (T1[x + i - 1][y + j - 1] == 1) {
          sum = sum + 1;
        }
      }
    }
  }
  return sum;
}

function reverse(x, y) {
  if (is_safe(x, y)) {
    T2[x][y] = 1;
  }
  return T1[x][y] == 0
}

function unreversed_ornot(x, y) {
  if (T2[x][y] == 0) {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (is_safe(x + i - 1, y + j - 1) && T2[x + i - 1][y + j - 1] == 1 && count(x + i - 1, y + j - 1) == 0) {
          return true
        }
      }
    }
    return false
  }
  return false
}

function chain(x, y) {
  var sum = 0;
  reverse(x, y);
  while (true) {
    sum = 0
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        if (unreversed_ornot(i, j)) {
          reverse(i, j)
          sum = sum + 1;
        }
      }
    }
    if (sum == 0) {
      break
    }
  }
}

function isLose() {
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      if (T1[i][j] == 1 && T2[i][j] == 1) {
        return true
      }
    }
  }
  return false
}

function isWin() {
  var l = 0
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      if (T2[i][j] == 1) {
        l = l + 1
      }
    }
  }
  return (number + l == height * width)
}

function printing() {
  console.log("-".repeat(width + 2))
  for (var i = 0; i < height; i++) {
    s = "|";
    for (var j = 0; j < width; j++) {
      if (T2[i][j] == 0) {
        s = s + " ";
      } else {
        s = s + count(i, j).toString();
      }
    }
    console.log(s + "|");
  }
  console.log("-".repeat(width + 2));
}