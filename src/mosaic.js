var blockSize = 25;
var countWidth = 23;
const countHeight = 33;
// var wdt = blockSize * countBorder;
// var hgt = blockSize * (countBorder + 8);

const width = blockSize * countWidth;
const height = blockSize * countHeight;

var queueNum = [0, 1];
var clrs = ["#000000", "#FFFFFF"];

let numbers = ["black", "white"];

colors = [];

function setup() {
  createCanvas(width, height);
  rectMode(CENTER);

  noLoop();
}

function draw() {
  background(25);
  for (var y = blockSize / 2; y < height; y += blockSize) {
    for (var x = blockSize / 2; x < width; x += blockSize) {
      queueNum = shuffleArray([0, 1]);

      fill(clrs[queueNum[0]]);

      rect(x, y, blockSize, blockSize);

      push();
      translate(x, y);
      semiDual(0, 0, clrs);
      pop();
    }
  }
}

function semiDual(x, y, clrs) {
  const randomNumber = random();
  rotate(radians(90 * Math.round(random(1, 5))));

  fill(clrs[queueNum[1]]);

  arc(x - blockSize / 2, y, blockSize, blockSize, radians(270), radians(450));
  if (randomNumber < 1 / 3) {
    // first option
    arc(x + blockSize / 2, y, blockSize, blockSize, radians(90), radians(270));
  } else if (randomNumber < (1 / 3) * 2) {
    // second option
  } else {
    // third option//
    arc(x, y, blockSize, blockSize, radians(270), radians(450));
  }
}

function shuffleArray(array) {
  var j, temp;
  for (var i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function resetPatchwork() {
  redraw();
}

function mousePressed() {
  resetPatchwork();
}

function keyPressed() {
  resetPatchwork();
}
