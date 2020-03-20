//counter
function autoCounter() {
    let counter = document.querySelector(".counter").innerHTML;
    document.querySelector(".counter").innerHTML = parseInt(counter) + 1;

}

let myCounter;

function playCounter() {
    myCounter = setInterval(autoCounter, 1000);
}

document.body.onload = playCounter;

function stopCounter() {
    clearInterval(myCounter);
}

document.getElementById("stop-counter").addEventListener("click", stopCounter);

//body

function flashBody() {
    let body = document.body;
    body.style.background = body.style.background == "red" ? "yellow" : "red";
}

bodyColor = setInterval(flashBody, 5000);

function stopBody() {
    clearInterval(bodyColor);
}

document.getElementById("stop-body").addEventListener("click", stopBody);

/*
alert(location.href);
if(confirm("Перейти на википелию?")){
    location.href="https://wikipedia.org";
}*/

function BOMobj() {
    /*    let div= createImageBitmap(

        )
       document.body.append(div);*/
    console.log(navigator.platform);
    console.log(navigator.userAgent);
    console.log(navigator.userAgent);
    console.log(document.body);
    console.dir(document.body);
}

BOMobj();

function createMessage() {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
    document.body.append(div);
    setTimeout(function () {
        return div.remove();
    }, 1000);
}

createMessage();

function cloneElements() {
    let texts=document.querySelectorAll(".text");
    for(let elem of texts){
        let cloneText=elem.cloneNode(true);
        document.querySelector(".container").append(cloneText);
    }
}

cloneElements();

let insObj={
    name:"Ira",
    age:23,
    gender: "famine"
}

function insertObj(obj) {
   // let arrInsert=[];
    let ul=document.getElementById("ul");
    let arrEntries=Object.entries(obj);
    let arrInsert=arrEntries.map(function (item) {
        let li=document.createElement("li");
        li.append(item[0]+": "+item[1]);
        return li;
    });

    ul.append(...arrInsert);

}

insertObj(insObj);

function handleDragStart(e) {
    this.style.opacity = '0.4';  // this / e.target is the source node.
}

let cols = document.querySelectorAll('#columns .column');
[...cols].forEach(function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
});

window.addEventListener("scroll", MyScroll);

function MyScroll() {
   // let scroll = window.pageYOffset;
  //  console.log(scroll);
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

   // console.log('Полная высота документа с прокручиваемой частью: ' + scrollHeight);

    let elem=document.querySelector("columns");
   // console.log(window.pageYOffset);
}

function Ascent(event) {
console.log(event.target.className);//elem
console.log(this.className);///ascent
    //event.target.style.background="yellow";
    event.target.classList.toggle("yellow");
}


let selectedTd;

function dbAscent(event) {
   // console.log(event.target.className);//elem
   // console.log(this.className);///ascent
    if (selectedTd) { // убрать существующую подсветку, если есть
        selectedTd.classList.remove('highlight');
    }
    selectedTd = event.target;
    selectedTd.classList.add('highlight'); // подсветить новый td
}

document.querySelector(".ascent").addEventListener("dblclick", Ascent);
document.querySelector(".ascent").addEventListener("click", dbAscent);

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});

document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { // если есть атрибут...
        event.target.value++;
    }

});

class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
        alert('сохраняю');
    }

    load() {
        alert('загружаю');
    }

    search() {
        alert('ищу');
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Menu(menu);