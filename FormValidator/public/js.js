let form = document.forms.myform;
let email = form.elements.email;
let password = form.elements.password;
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");

function passwordFocus() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        errorPassword.innerHTML = '';
    }
}

function emailFocus() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        errorEmail.innerHTML = '';
    }
}

email.addEventListener('focus', emailFocus);
password.addEventListener('focus', passwordFocus);

function submitForm(event) {
    event.preventDefault();

    console.log({email: email.value, password: password.value})

    $.ajax({
        method: "POST",
        url: "/register",
        data: {email: email.value, password: password.value}
    })
        .done(function (data) {
            console.log("Data Saved: ", data);
            if (data.status === 1) {
                email.classList.add("invalid");
                errorEmail.innerHTML = "Please enter, dia130396@gmail.com"
            }
            if (data.status === 2) {
                password.classList.add("invalid");
                errorPassword.innerHTML = "Please enter,  Password.123"
            }

        })
   /*     .done(function (data) {
            if (data.status === 2) {
                password.classList.add("invalid");
                errorPassword.innerHTML = "Please enter,  Password.123"
            }

        })*/
        .fail(function (data) {
            console.log("Error load");
        })
    ;

}

document.forms.myform.addEventListener("submit", submitForm);