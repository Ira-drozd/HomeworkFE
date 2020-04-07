let canvas;
let ctx;
let isDrawing;
let isEraser;
let isLine;
let isReact;

function myCanvas() {
    canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        ctx = canvas.getContext("2d");

        document.getElementById("pencil").addEventListener("click", function () {

            canvas.removeEventListener("mousedown", startEraser);
            canvas.removeEventListener("mousedown", startLine);
            canvas.addEventListener("mousedown", startDrawing);
            canvas.addEventListener("mousemove", draw);
        });

        document.getElementById("eraser").addEventListener("click", function () {

            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mousedown", startLine);
            canvas.addEventListener("mousedown", startEraser);
            canvas.addEventListener("mousemove", draw);
        });

        document.getElementById("line").addEventListener("click", function () {

            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mousedown", startEraser);
            canvas.removeEventListener("mouseout", stopDrawing);
            canvas.addEventListener("mousedown", startLine);
        });


        document.getElementById("rect").addEventListener("click", function () {

            isReact=true;
            isDrawing = false;
            isEraser = false;
            isLine = false;

            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mousedown", startEraser);
            canvas.removeEventListener("mousedown", startLine);

            canvas.addEventListener("mousedown", mouseDown);
            canvas.addEventListener("mouseup", mouseUp);

            canvas.addEventListener("click", function () {
                let newRect = new Rect(coords);
                newRect.myCoords();
            });

        })


        canvas.addEventListener("mouseup", stopDrawing);
        canvas.addEventListener("mouseout", stopDrawing);

        document.getElementById("clear").addEventListener("click", clearCanvas);
        document.getElementById("save").addEventListener("click", saveCanvas);

    } else alert("error");
}


document.body.addEventListener("load", myCanvas, true);

function startDrawing(e) {
    isEraser = false;
    isLine = false;
    isReact=false;
    isDrawing = true;
    ctx.globalCompositeOperation = "source-over";

//dotted
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, (ctx.lineWidth / 2).toFixed(3), 0, 2 * Math.PI);
    ctx.fill();
//start line
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);

    console.log(ctx.globalCompositeOperation);
    console.log("isDrawing " + isDrawing);
    console.log("isEraser " + isEraser);
}

function startEraser(e) {
    isDrawing = false;
    isLine = false;
    isEraser = true;
    isReact=false;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillRect(e.offsetX, e.offsetY, ctx.lineWidth, ctx.lineWidth);
    // ctx.arc(e.offsetX, e.offsetY, (ctx.lineWidth / 2).toFixed(3), 0, 2 * Math.PI);

    console.log(ctx.globalCompositeOperation);
    console.log("isDrawing " + isDrawing);
    console.log("isEraser " + isEraser);
}

function startLine(e) {
    isDrawing = false;
    isEraser = false;
    isReact=false;
    isLine = true;
    ctx.globalCompositeOperation = "source-over";

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}


function draw(e) {
    if (isDrawing == true) {
        let x = e.offsetX;
        let y = e.offsetY;

        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

    }
    if (isEraser == true) {
        ctx.fillRect(e.offsetX, e.offsetY, ctx.lineWidth, ctx.lineWidth);
        // ctx.arc(e.offsetX, e.offsetY, (ctx.lineWidth / 2).toFixed(3), 0, 2 * Math.PI);
    }
}


function stopDrawing(e) {
    isDrawing = false;
    isEraser = false;

    if (isLine == true) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
}

function selectColor() {
    ctx.strokeStyle = this.value;
    ctx.fillStyle = this.value;
}

function selectWidth() {
    ctx.lineWidth = this.value;
}

document.getElementById("pencilColor").addEventListener("change", selectColor);
document.getElementById("pencilWidth").addEventListener("change", selectWidth);

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {

}

//figure

/*
function figureRect(e) {
    isDrawing = false;
    isEraser = false;
    isLine = false;
    ctx.globalCompositeOperation = "source-over";

    let startX=e.offsetX;
    let startY=e.offsetY;


    canvas.addEventListener("mouseup", function (e) {
        ctx.fillRect(startX, startY,e.offsetX - startX, e.offsetY - startY);
    });
    console.log(ctx.globalCompositeOperation);

}
*/

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
       /* isDrawing = false;
        isEraser = false;
        isLine = false;*/
        if(isReact==true){
            ctx.globalCompositeOperation = "source-over";

            console.log(this.x + " " + this.y + " " + this.w + " " + this.h);
            ctx.strokeRect(this.x, this.y, this.w, this.h);
        }

    }

}
