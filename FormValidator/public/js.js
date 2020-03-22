let form = document.forms.myform;
let email = form.elements.email;
let password = form.elements.password;
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");



function emailBlur() {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!pattern.test(email.value)) {
        email.classList.add('invalid');
        errorEmail.innerHTML = 'Please enter dia130396@gmail.com'
        // console.log(this);
        /* errorDiv.innerHTML="Пожалуйста, введите dia130396@gmail.com";
         email.after(errorDiv);*/
    } else return true;

}


function passwordBlur() {
    let pattern = [/[0-9]{1,}/, /[A-z]{1,}/, /\.{1,}/];

    if (!(pattern[0].test(password.value) && pattern[1].test(password.value) && pattern[2].test(password.value) && password.value.length > 6)) {
        password.classList.add('invalid');
        errorPassword.innerHTML = 'Please enter, Password.123'
        /*errorDiv.innerHTML="Пожалуйста, введите Password.123";
        password.after(errorDiv);*/
    } else return true;
}


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


email.addEventListener('blur', emailBlur);
email.addEventListener('focus', emailFocus);
password.addEventListener('blur', passwordBlur);
password.addEventListener('focus', passwordFocus);


function submitForm() {
    event.preventDefault();
    if (emailBlur() && passwordBlur()) {
       // console.log("true");
        return true;
    }

}

document.forms.myform.addEventListener("submit", submitForm);