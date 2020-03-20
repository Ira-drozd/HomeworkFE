let myselect = document.getElementById("myselect");
//myselect.options[2].selected = true;
let option = new Option("new option", "4", false, true);
myselect.append(option);
//console.log(...myselect.options);
myselect.addEventListener("change", function () {
    alert(this.value);
});


function calcDep() {

    let form = document.forms.calculator;
    let initial = form.elements.money.value;
    let years = form.elements.months.value / 12;
    let interest = (form.elements.interest.value / 100).toFixed(3);
    console.log(...form.elements);

    let result = Math.round(initial * (1 + interest * years));
    // console.log(result);

    let tabel = document.getElementById("diagram");
    tabel.rows[2].cells[0].children[0].style.height = initial / 100 + "px";
    tabel.rows[2].cells[1].children[0].style.height = result / 100 + "px"

    let moneyBefore = document.getElementById("money-before");
    let moneyAfter = document.getElementById("money-after");

    moneyBefore.innerText = initial;
    moneyAfter.innerText = result;

    // initial: начальная сумма денег
// interest: проценты, например, 0.05 означает 5% в год
// years: сколько лет ждать
}

document.forms.calculator.addEventListener("change", calcDep);

//calcDep();

function searchDot(str) {
    let regexp = /[.]{3}/g;
    return str.match(regexp);
}

console.log(searchDot("qwe...qqq..werq...qty"));

function searchNumber(str) {
    let regexp = /\d+/g;
    return str.match(regexp);
}

console.log(searchNumber("qwe...47qqq45werqqty"))

//Создайте регулярку, которая ищет цвета в формате #eee, #eeeddd

function searchColor(str) {
    let regexp = /(#){1}[A-Za-z]{3,6}[ ?.?,]/g;
    return str.match(regexp);
}

console.log(searchColor("qwe...47#eee, #eeeddd qqq #eeeddd.45werqqty"))

/*Создайте HTML-форму регистрации с email и паролем. По клику провести валидацию пароля и email,
    где пароль должен содержать хотя бы одну цифру, один спецсимвол и одну букву, а так же быть
длиннее 6 знаков.
    При прохождении валидации выводить приветственное сообщение, в противном случае - ошибку.*/

function submitForm() {
    let form = document.forms.myform;
    let email = form.elements.email;
    let password = form.elements.password;
    let errorEmail = document.getElementById("errorEmail");
    let errorPassword = document.getElementById("errorPassword");

    email.onblur = function () {
        let pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!pattern.test(email.value)) {
            email.classList.add('invalid');
            errorEmail.innerHTML = 'Пожалуйста, введите @'
        }
    };

    email.onfocus = function () {

        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            errorEmail.innerHTML = '';
        }
    };

    password.onblur = function () {
        let regexp=/[0-9]{1,}/;
        let regexp1=/[A-z]{1,}/;
        let regexp2=/\.{1,}/;
        //!regexp.test(password.value)
        if (!(regexp1.test(password.value) && regexp.test(password.value)  && regexp2.test(password.value) && password.value.length>6)) {
            password.classList.add('invalid');
            errorPassword.innerHTML = 'Пожалуйста, введите @'
        }
    };

    password.onfocus = function () {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            errorPassword.innerHTML = '';
        }
    };
    if(/[0-9]{1,}/.test(password.value) && /[A-z]{1,}/.test(password.value)  && /\.{1,}/.test(password.value) && password.value.length>6){
        // event.preventDefault();
return true;
    }

     event.preventDefault();

}

document.forms.myform.addEventListener("submit", submitForm);