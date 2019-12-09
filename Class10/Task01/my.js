function onChange() {
    let input = document.getElementsByName("delivery");
    let pickup = document.querySelector(".pickup");
    let courier = document.querySelector(".courier");
    for (let i = 0; i < input.length; i++) {
        if (input[i].type == "radio" && input[i].checked) {
            //

            //   f1.style.display="none";
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

