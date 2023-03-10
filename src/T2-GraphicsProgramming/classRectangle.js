"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 10, 2023
 * @description Class to illustrate the use of a Rectangle class
 *              It uses graphic capabilities using canvas
 *              [based on: Creating and Drawing on an HTML5 Canvas using JavaScript]
 * @see {@link https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1}
 */
exports.__esModule = true;
exports.Rectangle = void 0;
/**
 * @desc A class to represent rectangle objects
 * @class
 */
var Rectangle = /** @class */ (function () {
    /**
   * Create a rectangle
     * these are the arguments you pass in
   * add default values to avoid errors on empty arguments
   * @param {number} xPosition - X coord of the rectangle's position
   * @param {number} yPosition - Y coord of the rectangle's position
   * @param {number} width
   * @param {number} height
   * @param {string} fillColor
   * @param {string} strokeColor
   * @param {number} strokeWidth
   */
    function Rectangle(xPosition, yPosition, width, height, fillColor, strokeColor, strokeWidth, canvas, context) {
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (fillColor === void 0) { fillColor = ''; }
        if (strokeColor === void 0) { strokeColor = ''; }
        if (strokeWidth === void 0) { strokeWidth = 2; }
        if (canvas === void 0) { canvas = document.getElementById('tutorial'); }
        if (context === void 0) { context = canvas.getContext('2d'); }
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
        this.canvas = canvas;
        this.context = context;
        // console.log('Constructor is executing...');
        // alert('Constructor is executing...');
        // ensure the arguments passed in are numbers
        // a bit overkill for this tutorial
    }
    /**
     * @desc Rectangle Area
       * @returns Area of the rectangle
     */
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    /** gets the X position of the left side */
    Rectangle.prototype.getLeft = function () {
        // origin is at top left so just return x
        return this.xPosition;
    };
    /** get X position of right side */
    Rectangle.prototype.getRight = function () {
        // xPosition is left position + the width to get end point
        return this.xPosition + this.width;
    };
    /** get the Y position of top side */
    Rectangle.prototype.getTop = function () {
        // origin is at top left so just return yPosition
        return this.yPosition;
    };
    /** get Y position at bottom */
    Rectangle.prototype.getBottom = function () {
        return this.yPosition + this.height;
    };
    /** draw rectangle to screen */
    Rectangle.prototype.draw = function () {
        // saves the current styles set elsewhere to avoid overwriting them
        this.context.save();
        // set the styles for this shape
        this.context.fillStyle = this.fillColor;
        this.context.lineWidth = this.strokeWidth;
        // create the *path*
        this.context.beginPath();
        this.context.strokeStyle = this.strokeColor;
        this.context.rect(this.xPosition, this.yPosition, this.width, this.height);
        // draw the path to screen
        this.context.fill();
        this.context.stroke();
        // restores the styles from earlier preventing the colors used here
        // from polluting other drawings
        this.context.restore();
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
