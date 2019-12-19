(function () {
    const burger=document.querySelector(".burger");
    const menu=document.querySelector(".menu");
burger.addEventListener("click", function () {
burger.classList.toggle("burger-active");
menu.classList.toggle("open-menu");
});
}());

