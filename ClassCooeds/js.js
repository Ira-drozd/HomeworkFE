let container = document.getElementById("container");

container.addEventListener("mousedown", mouseDown);
container.addEventListener("mouseup", mouseUp);
container.addEventListener("click", function () {
    let newRect = new Rect(coords);
    newRect.myCoords();
});

let coords = {};

function mouseDown(e) {
    coords.downX = e.offsetX;
    coords.downY = e.offsetY;
}

function mouseUp(e) {
    coords.upX = e.offsetX;
    coords.upY = e.offsetY;
}

class Rect {
    constructor(rect) {
        this.rect = rect;
        this.x = this.rect.downX;
        this.y = this.rect.downY;
        this.w = this.rect.upX - this.x;
        this.h = this.rect.upY - this.y;
    }

    myCoords() {
        /*let x = this.rect.downX;
        let y = this.rect.downY;
        let w = this.rect.upX - x;
        let h = this.rect.upY - y;
        console.log(x + " " + y + " " + w + " " + h);*/
        console.log(this.x + " " + this.y + " " + this.w + " " + this.h);
    }

}

