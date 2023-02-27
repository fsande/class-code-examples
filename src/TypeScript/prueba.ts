interface Shape {
    draw(): void;
}

interface Editable{
    canEdit: boolean;
    commitChanges(): void;
}

class Square implements Shape, Editable{
    canEdit: boolean;
   constructor(canEdit: boolean) {
        this.canEdit = canEdit;
    }

    commitChanges(): void {
       if(this.canEdit) {
           console.log("changes committed");
       }
    }

    draw(): void {
        console.log("drawing");
    }
}

let square: Square = new Square(true);
square.draw();
square.commitChanges();
