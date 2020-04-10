let canvas;
let ctx;
let isDrawing;
let isEraser;
let isLine;
let isReact;
let isReactFill;
let isAcr;
let isAcrFill;


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

            isReact = true;
            isReactFill = false;
            isDrawing = false;
            isEraser = false;
            isLine = false;
            isAcr = false;
            isAcrFill = false;

            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mousedown", startEraser);
            canvas.removeEventListener("mousedown", startLine);

            canvas.addEventListener("click", function () {
                let newRect = new Figure(coords);
                newRect.Rect();
            });

        })

        document.getElementById("rect-fill").addEventListener("click", function () {

            isReactFill = true;
            isReact = false;
            isDrawing = false;
            isEraser = false;
            isLine = false;
            isAcr = false;
            isAcrFill = false;

            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mousedown", startEraser);
            canvas.removeEventListener("mousedown", startLine);

            canvas.addEventListener("click", function () {
                let newRectFill = new Figure(coords);
                newRectFill.RectFill();
            });

        })

        document.getElementById("acr").addEventListener("click", function () {

            isReactFill = false;
            isReact = false;
            isDrawing = false;
            isEraser = false;
            isLine = false;
            isAcr = true;
            isAcrFill = false;

            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mousedown", startEraser);
            canvas.removeEventListener("mousedown", startLine);

            canvas.addEventListener("click", function () {
                let newAcr = new Figure(coords);
                newAcr.Acr();
            });

        })

        document.getElementById("acr-fill").addEventListener("click", function () {

            isReactFill = false;
            isReact = false;
            isDrawing = false;
            isEraser = false;
            isLine = false;
            isAcr = false;
            isAcrFill = true;

            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mousedown", startEraser);
            canvas.removeEventListener("mousedown", startLine);

            canvas.addEventListener("click", function () {
                let newAcrFill = new Figure(coords);
                newAcrFill.AcrFill();
            });

        })

        canvas.addEventListener("mouseup", stopDrawing);
        canvas.addEventListener("mouseout", stopDrawing);

        canvas.addEventListener("mousedown", mouseDown);
        canvas.addEventListener("mouseup", mouseUp);

        document.getElementById("clear").addEventListener("click", clearCanvas);
        document.getElementById("save").addEventListener("click", saveCanvas);

        document.getElementById("pencilColor").addEventListener("change", selectColor);
        document.getElementById("pencilWidth").addEventListener("change", selectWidth);

    } else alert("error");
}


document.body.addEventListener("load", myCanvas, true);

function startDrawing(e) {
    isEraser = false;
    isLine = false;
    isReact = false;
    isReactFill = false;
    isAcr = false;
    isAcrFill = false;
    isDrawing = true;
    ctx.globalCompositeOperation = "source-over";

//dotted
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, (ctx.lineWidth / 2).toFixed(3), 0, 2 * Math.PI);
    ctx.fill();
//start line
   /* ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);*/

    console.log(ctx.globalCompositeOperation);
    console.log("isDrawing " + isDrawing);
    console.log("isEraser " + isEraser);
}

function startEraser(e) {
    isDrawing = false;
    isReactFill = false;
    isLine = false;
    isEraser = true;
    isReact = false;
    isAcr = false;
    isAcrFill = false;
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
    isReact = false;
    isReactFill = false;
    isAcr = false;
    isAcrFill = false;
    isLine = true;
    ctx.globalCompositeOperation = "source-over";

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}


function draw(e) {
    if (isDrawing == true) {
        let x = e.offsetX;
        let y = e.offsetY;

       /* ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();*/
//dotted
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, (ctx.lineWidth / 2).toFixed(3), 0, 2 * Math.PI);
        ctx.fill();

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


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


//figure

let coords = {};

function mouseDown(e) {
    coords.downX = e.offsetX;
    coords.downY = e.offsetY;
}

function mouseUp(e) {
    coords.upX = e.offsetX;
    coords.upY = e.offsetY;
}

class Figure {
    constructor(coords) {
        this.coords = coords;
        //rect
        this.x = this.coords.downX;
        this.y = this.coords.downY;
        this.w = this.coords.upX - this.x;
        this.h = this.coords.upY - this.y;
        //acr
        this.xUp = this.coords.upX;
        this.yUp = this.coords.upY;
        this.xC = Math.round((this.x + this.xUp) / 2);
        this.yC = Math.round((this.y + this.yUp) / 2);
        this.r = Math.round( Math.sqrt(Math.pow(this.xC - this.x, 2) + Math.pow(this.yC - this.y, 2)));
    }

    Rect() {

        if (isReact == true) {
            ctx.globalCompositeOperation = "source-over";

            console.log(this.x + " " + this.y + " " + this.w + " " + this.h);
            ctx.strokeRect(this.x, this.y, this.w, this.h);
        }

    }

    RectFill() {

        if (isReactFill == true) {
            ctx.globalCompositeOperation = "source-over";
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }

    }

    Acr() {
        if (isAcr == true) {
            ctx.beginPath();
            ctx.arc(this.xC, this.yC, this.r, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }

    AcrFill() {
        if (isAcrFill == true) {
            ctx.beginPath();
            ctx.arc(this.xC, this.yC, this.r, 0, 2 * Math.PI);
            ctx.fill();
        }
    }


}

//save

function saveCanvas() {
    let imageData = canvas.toDataURL();
    let image = new Image();
    image.src = imageData;

    let link = document.createElement("a");
    link.setAttribute("href", image.src);
    link.setAttribute("download", "canvasImage");
    link.click();

}
