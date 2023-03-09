/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 20, 2020
 * @since Feb 26, 2021
 * @since Mar 7, 2023
 * @version 3
 * @desc TS Object Oriented Analog Canvas based Clock
 * @tutorial Adapted from {@link https://www.w3schools.com/graphics/canvas_clock.asp}
 * Also, check out {@link https://gist.github.com/fixiecoder/a6146501aaa8ad3bf885fa30a66ba079}
 */
/** @classdesc Represents an analog clock */
declare class Clock {
    private centerX;
    private centerY;
    private radius;
    private hands;
    private canvas;
    private ctx;
    /**
     * @description Creates a
     * @param
     * @param
     */
    constructor(containerElement: HTMLElement, size: number);
    private drawClockFace;
    private drawNumbers;
    private drawHand;
    private drawTime;
    private drawCentralCircle;
    render(): void;
    renderArrow: () => void;
}
declare let clock: Clock;
