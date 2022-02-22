var width = 9;
var height = 9;

var T1 = [
  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]
];
T1[4][4] = 1;
T1[4][5] = 1;
var T2 = [
  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]
];

function count(x,y){
  sum = 0;
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j ++){
      if (0 <= x+i-1 && x+i-1 <= height && 0 <= y+j-1 && y+j-1 <= width && T1[x+i-1][y+j-1] == 1){
        sum = sum + 1;
      }
    }
  }
  return sum;
}

function reverse(x,y){
  if (T1[x][y] == 1){
    return false;
  } else {
    T2[x][y] = 1;
    return true;
  }
}

function printing(){
  console.log("-".repeat(width + 2))
  for (var i = 0; i < height; i++){
    s = "|";
    for (var j = 0; j < width; j++){
      if (T2[i][j] == 0){
        s = s + " ";
      } else {
        s = s + count(i,j).toString();
      }
    }
    console.log(s + "|");
  }
  console.log("-".repeat(width + 2));
}