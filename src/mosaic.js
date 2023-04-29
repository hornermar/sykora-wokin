var queueNum = [0, 1];
var clrs = ["#000000", "#FFFFFF"];
let numbers = ["black", "white"];

colors = [];

function drawRandomMosaic() {
  // for (let y = blockSize / 2; y < mosaic.height; y += blockSize)
  for (
    let y = windowHeight / 8;
    y < windowHeight / 8 + mosaic.height;
    y += blockSize
  ) {
    for (
      let x = windowWidth / 2 - mosaic.width / 2 + blockSize / 2;
      x < windowWidth / 2 + mosaic.width / 2 + blockSize / 2;
      x += blockSize // )
    ) {
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

  const semiCircle = selectSemiCircle(clrs[queueNum[1]]);
  // fill(clrs[queueNum[1]]);

  // arc(x - blockSize / 2, y, blockSize, blockSize, radians(270), radians(450));
  image(semiCircle, x - blockSize / 2, y - blockSize / 2);
  if (randomNumber < 1 / 3) {
    // first option
    //  arc(x + blockSize / 2, y, blockSize, blockSize, radians(90), radians(270));
    image(semiCircle, x, y - blockSize / 2);
  } else if (randomNumber < (1 / 3) * 2) {
    // second option
  } else {
    // third option//
    // arc(x, y, blockSize, blockSize, radians(270), radians(450));

    rotate(radians(180));
    image(semiCircle, x - blockSize / 2, y - blockSize / 2);
  }
}

function selectSemiCircle(clrs) {
  if (clrs === "#000000") {
    return semiCircleBlack;
  } else if (clrs === "#FFFFFF") {
    return semiCircleWhite;
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
