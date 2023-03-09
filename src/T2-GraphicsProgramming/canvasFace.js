/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande <fsande@ull.es>
 * @since Mar 9, 2023
 * @version 1
 * @desc Drawing a Face on HTML canvas
 */
/** @classdesc A class for drawing on Canvas  */
var Face = /** @class */ (function () {
    /** @description Draw 2 squares */
    function Face(canvas, context) {
        if (canvas === void 0) { canvas = document.getElementById('tutorial'); }
        if (context === void 0) { context = canvas.getContext('2d'); }
        this.canvas = canvas;
        this.context = context;
    }
    Face.prototype.draw = function () {
        this.context.beginPath();
        this.context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        // this.context.moveTo(110, 75);
        this.context.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        // this.context.moveTo(65, 65);
        this.context.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        // this.context.moveTo(95, 65);
        this.context.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        this.context.stroke();
    };
    return Face;
}());
function main() {
    var face = new Face();
    face.draw();
}
main();
