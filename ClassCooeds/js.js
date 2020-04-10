let container = document.getElementById("container");
let block = document.getElementById("block");

container.addEventListener("mousedown", mouseDown);
container.addEventListener("mouseup", mouseUp);
container.addEventListener("click", function () {
    let newRect = new Rect(coords);
    newRect.myCoords();

    let newEditBlock = new Rect(coords);
    newEditBlock.editBlock();
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

    editBlock() {
        block.style.top = this.x + "px";
        block.style.left = this.y + "px";
        block.style.width = this.w + "px";
        block.style.height = this.h + "px";
        block.style.display = "block";
        console.log(top);
    }
}

/*function editBlock(top, left, width, height) {
    block.style.top = this.x + "px";
    block.style.left = this.y + "px";
    block.style.width = width + "px";
    block.style.height = height + "px";
    block.style.display="block";
    console.log(top);
}*/

/*container.addEventListener("click", editBlock.bind(null, coords.downX, coords.downY, 150, 150));*/
