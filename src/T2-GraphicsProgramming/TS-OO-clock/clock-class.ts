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



/*
export class Rational {
   constructor(
    private readonly numeratorPart: number,
    private readonly denominatorPart: number = 1
  ) {
    if (denominatorPart === 0) {
      throw new Error('The denominator cannot be lower or equal than zero');
    }
  }
*/





/** @classdesc Represents an analog clock */
class Clock {
  private centerX: number;
  private centerY: number;
  private radius: number;
  private hands = {};
  // By default document.createElement returns a HTMLElementtype which is a generic type.
  // In order to make your app understand it is a canvas element you need to cast it 
  private canvas = document.createElement("CANVAS") as HTMLCanvasElement; // Creates A new HTML element: a canvas
  private ctx = this.canvas.getContext('2d');


  /**
   * @description Creates a 
   * @param 
   * @param 
   */
  constructor(containerElement: HTMLElement, size: number) {
    this.radius = 0.95 * (size / 2);
    this.hands = {
        second: {
            length: this.radius * 0.90,
            color: 'lightgrey',
            width: this.radius * 0.01
        },
        minute: {
            length: this.radius * 0.90,
            color: 'darkgrey',
            width: this.radius * 0.03
        },
        hour: {
            length: this.radius * 0.7,
            color: 'black',
            width: this.radius * 0.05
        }
    };
    this.canvas.width = size;
    this.canvas.height = size;
    containerElement.appendChild(this.canvas); // Adds the canvas HTML element as a 'child' of the containerElement (body)
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.ctx.translate(this.centerX, this.centerY);

    // this.render = this.render.bind(this);
    // this.render();
    // setInterval(this.render, 1000);  // An alternative for animation

    this.renderArrow();
  }

  private drawClockFace(ctx: CanvasRenderingContext2D): void {
    const FILL_STYLE = '#333'; // For gradient (external ring)

    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    let gradient = ctx.createRadialGradient(0, 0, this.radius * 0.95, 0, 0, this.radius * 1.05);

    gradient.addColorStop(0, FILL_STYLE);
    gradient.addColorStop(0.5, 'white');
    gradient.addColorStop(1, FILL_STYLE);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = this.radius * 0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = FILL_STYLE;
    ctx.fill();
  }

  private drawNumbers(ctx: CanvasRenderingContext2D): void {
    ctx.font = this.radius * 0.15 + 'px arial';
    ctx.fillStyle = 'black'; // Numbers color
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for (let hour = 1; hour <= 12; hour++) {
        const RATIO = 0.85; // 85%
        const ANGLE = hour * Math.PI / 6; // Pi/6 = 2*Pi/12
        ctx.rotate(ANGLE);
        ctx.translate(0, -this.radius * RATIO);
        ctx.rotate(-ANGLE);
        ctx.fillText(hour.toString(), 0, 0);
        ctx.rotate(ANGLE);
        ctx.translate(0, this.radius * RATIO);
        ctx.rotate(-ANGLE);
    }
  }

  private drawHand(handType: string, ctx: CanvasRenderingContext2D): void {
    const NOW = new Date();
    const SECONDS = NOW.getSeconds();
    const MINUTES = NOW.getMinutes();
    const HOURS = NOW.getHours() % 12;
    const HAND = this.hands[handType];
    let angle = 0;

	  switch(handType) {
		  case 'second':
			  angle = (SECONDS * Math.PI / 30);
			  break;
		  case 'minute':
			  angle = (MINUTES * Math.PI / 30) + (SECONDS * Math.PI / (30 * 60));
			  break;
		  case 'hour':
			  angle =  (HOURS * Math.PI / 6) + (MINUTES * Math.PI / (6 * 60)) + (SECONDS * Math.PI / (360 * 60));
			  break;
			default: 
			  throw new Error('Error in handType');
			  break;
		}
    ctx.beginPath();
    ctx.lineWidth = HAND.width;
    ctx.lineCap = 'round';
    ctx.strokeStyle = HAND.color;
    ctx.moveTo(0, 0);
    ctx.rotate(angle);
    ctx.lineTo(0, -HAND.length);
    ctx.stroke();
    ctx.rotate(-angle);
  }

  private drawTime(): void {
    this.drawHand('second', this.ctx);
    this.drawHand('minute', this.ctx);
    this.drawHand('hour', this.ctx);
  }

  private drawCentralCircle(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(0, 0, this.radius * 0.04, 0, 2 * Math.PI);
    ctx.fillStyle = 'goldenrod';
    ctx.fill();
  }

  public render(): void {
    this.drawClockFace(this.ctx);
    this.drawNumbers(this.ctx);
    this.drawTime();
    this.drawCentralCircle(this.ctx);
    requestAnimationFrame(this.render);  // Animate the clock
  }

  public renderArrow = () => {
    this.drawClockFace(this.ctx);
    this.drawNumbers(this.ctx);
    this.drawTime();
    this.drawCentralCircle(this.ctx);
    requestAnimationFrame(this.renderArrow);  // Animate the clock
  }

}

let clock = new Clock(document.body, 800);
console.log(clock);