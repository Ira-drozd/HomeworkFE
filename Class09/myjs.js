function progressBar() {
    let width = 0;
    let bar = document.getElementById("inner");
    let percent = document.getElementById("percent");
    let idInterval = setInterval(function () {
        width++;
        bar.style.width = width + "%";
        percent.innerHTML = width + "%";
        if (width >= 72) {
            clearInterval(idInterval);
        }
    }, 15);
}

progressBar();

function modalWindow() {
    let openModalWindow = document.getElementById("open-modal-window");
    let span = document.getElementById("close-x");
    let buttonClose = document.getElementById("close-button");
    let modalWindow = document.querySelector(".modal-window");
    // let bnt
    openModalWindow.onclick = function () {
        modalWindow.style.display = "block";
    }
    span.onclick = function () {
        modalWindow.style.display = "none";
    }
    buttonClose.onclick = function () {
        modalWindow.style.display = "none";
    }
}

modalWindow();