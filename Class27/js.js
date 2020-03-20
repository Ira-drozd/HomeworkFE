/*
function MoveMouse(){
    let div=document.getElementById("coords-mouse");
    /!*div.onmousemove=function (event) {
        console.log(event.clientX);
    }*!/
    console.log(div.clientX);
}
*/


document.getElementById("coords-mouse").addEventListener("mousemove", corrdsMouse);

function corrdsMouse(event) {
    document.querySelector(".coords-x").innerHTML = event.offsetX;
    document.querySelector(".coords-y").innerHTML = event.offsetY;
}

document.getElementById("alert").addEventListener("click", () => alert("Alert"));
document.getElementById("button-text").addEventListener("click", (event) => event.target.innerText = "button");

/*
document.getElementById("qwert").setAttribute("disabled", "");*/
function triggerDisable(event) {
    let labels = document.forms.myform.elements;

    if (event.target.value === "disable") {
        for (let i = 0; i < 2; i++) {
            labels[i].setAttribute("disabled", "");
        }
    }
    if (event.target.value === "enable") {
        for (let i = 0; i < 2; i++) {
            labels[i].removeAttribute("disabled");
        }
    }
    /*   console.log(event.target.value);*/
}

document.getElementById("disable").addEventListener("click", triggerDisable);
document.getElementById("enable").addEventListener("click", triggerDisable);


function onlyNumbers(event) {
    /*   console.log(event.target.value="789");*/
    // return (event.key >= '0' && event.key <= '9');

    console.log(event.target.value = event.target.value.replace(/\D/g, ""));
}

function folderOpen(event) {
    //let folder=document.querySelector(".folder");
    event.target.style.background = "url(\"https://s1.iconbird.com/ico/0612/Aurora/w256h2561339789902icontextoaurorafoldersopen.png\")"
}

document.querySelector(".folder").addEventListener("dblclick", folderOpen);

function addDivs() {
let container=document.querySelector(".container-divs");
    for (let i = 0; i < 410; i++){
        let div = document.createElement('div');
        div.className = "divs";
        container.append(div);
    }
        }

addDivs();

function circleDivs(e) {
    if(e.target.className=="divs"){
        e.target.classList.add("circle-divs");
    }

}

document.querySelector(".container-divs").addEventListener("mouseover", circleDivs);