function draw() {
  const CANVAS = document.getElementById('tutorial');
  if (CANVAS.getContext) {
    const CTX = CANVAS.getContext('2d');

    CTX.beginPath();
    CTX.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    CTX.moveTo(110, 75);
    CTX.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    CTX.moveTo(65, 65);
    CTX.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    CTX.moveTo(95, 65);
    CTX.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    CTX.stroke();
  }
}
