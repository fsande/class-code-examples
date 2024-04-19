/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 19, 2024
	 @description Dragging a graphic element (2D drag)
*/

export class Dragon {
  constructor(private originX: number = 0, private originY: number = 0, 
              private offsetX: number = 0, private offsetY: number = 0, 
              private dragStarted: boolean = false, private image?: HTMLElement) {
    this.image = document.querySelector('#dragon-container') as HTMLElement;
    let imageElement: HTMLImageElement = document.createElement('img');
    imageElement.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Qing_Dynasty_Dragon_2.png/800px-Qing_Dynasty_Dragon_2.png';
    this.image.append(imageElement);
    this.image.addEventListener('pointerdown', this.onDragStart);
    this.image.addEventListener('pointerup', this.onDragEnd);
    this.image.addEventListener('pointermove', this.onDragMove);
  }

  private onDragStart = (event: PointerEvent): void => {
    this.originX = event.clientX;
    this.originY = event.clientY;
    this.dragStarted = true;
    (event.currentTarget as HTMLInputElement).setPointerCapture(event.pointerId);
  }

  private onDragEnd = (event: PointerEvent): void => {
    this.dragStarted = false;
    this.offsetX += event.clientX - this.originX;
    this.offsetY += event.clientY - this.originY;
  }

  private onDragMove = (event: PointerEvent): void => {
    if (!this.dragStarted) { return; }
    event.preventDefault();
    const deltaX = event.clientX - this.originX;
    const deltaY = event.clientY - this.originY;
    const translateX = this.offsetX + deltaX;
    const translateY = this.offsetY + deltaY;
    (event.currentTarget as HTMLInputElement).style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
  }
}

