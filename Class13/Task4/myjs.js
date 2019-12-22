(function () {
    let btnMenu=document.querySelector(".top-profile_links");
    let topMenu=document.querySelector(".top-menu_nav_close");

    btnMenu.addEventListener("click", function () {
        topMenu.classList.toggle("top-menu_nav_open");
    });



}());