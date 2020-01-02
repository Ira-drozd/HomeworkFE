function onChange() {
    let input = document.getElementsByName("delivery");
    let pickup = document.querySelector(".toggle-pickup");
    let courier = document.querySelector(".toggle-courier");
    for (let i = 0; i < input.length; i++) {
        if (input[i].type == "radio" && input[i].checked) {

            if (input[i].value == "pickup") {
                pickup.style.display = "block";
                courier.style.display = "none";
            }
            if (input[i].value == "courier") {
                courier.style.display = "block";
                pickup.style.display = "none";
            }
        }
    }

}

