const blockSize = 20;
const countWidth = 16;
const countHeight = 23;

const mosaic = {
  width: blockSize * countWidth,
  height: blockSize * countHeight,
};

function preload() {
  semiCircleBlack = loadImage("assets/semi-circle-blackS.png");
  semiCircleWhite = loadImage("assets/semi-circle-whiteS.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  addReloadButton();
  rectMode(CENTER);
  noLoop();
}

function draw() {
  strokeWeight(2);

  // wall
  background("#c2bfbc");

  // floor
  fill(118, 181, 197);
  rect(
    windowWidth / 2,
    windowHeight - windowHeight / 6,
    windowWidth,
    windowHeight / 3
  );

  drawRandomMosaic();
}

function resetPatchwork() {
  redraw();
}

function keyPressed() {
  resetPatchwork();
}

function addReloadButton() {
  reloadButton = createButton("Reload");
  reloadButton.position(windowWidth / 2 - 50, windowHeight - windowHeight / 9);
  reloadButton.addClass("btn");
  reloadButton.mousePressed(resetPatchwork);
}
