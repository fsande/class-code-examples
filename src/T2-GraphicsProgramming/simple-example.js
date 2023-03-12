/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande <fsande@ull.es>
 * @since Mar 9, 2023
 * @version 1
 * @desc A first example of a canvas TS drawing application
 */
/** @classdesc A class for drawing on Canvas  */
var DrawingApplication = /** @class */ (function () {
    /** @description Draw 2 squares */
    function DrawingApplication(canvas, context) {
        if (canvas === void 0) { canvas = document.getElementById('tutorial'); }
        if (context === void 0) { context = canvas.getContext('2d'); }
        this.canvas = canvas;
        this.context = context;
        // outlined square X: 50, Y: 35, width/height 50
        context.strokeRect(50, 35, 50, 50);
        // filled square X: 125, Y: 35, width/height 50
        context.fillStyle = 'rgba(0, 0, 200, 0.5)';
        context.fillRect(125, 35, 50, 50);
    }
    return DrawingApplication;
}());
function simpleExample() {
    new DrawingApplication();
}
simpleExample();
