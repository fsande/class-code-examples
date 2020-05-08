function draw() {
  const CANVAS = document.getElementById('tutorial');
  if (CANVAS.getContext) {
    const CTX = CANVAS.getContext('2d');

		// outlined square X: 50, Y: 35, width/height 50
    CTX.strokeRect(50, 35, 50, 50);

    // filled square X: 125, Y: 35, width/height 50
    CTX.fillStyle = 'rgba(0, 0, 200, 0.5)';
    CTX.fillRect(125, 35, 50, 50);
  }
}
