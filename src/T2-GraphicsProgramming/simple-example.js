var SimpleExample = /** @class */ (function () {
    function SimpleExample(canvas, context) {
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
    return SimpleExample;
}());
function simpleExample() {
    new SimpleExample();
}
simpleExample();
