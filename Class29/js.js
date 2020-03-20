//расширить метод родителя

console.clear();

let device = {
    buzz: function () {
        console.log("1");
    }
};

let alanClock = Object.create(device);

alanClock.buzz = function () {
    Object.getPrototypeOf(this).buzz.call();
    console.log("2");
};

//alanClock.buzz();//12

// методы animal
let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// модифицирует rabbit.isSleeping

//rabbit.walk();
rabbit.sleep();
//console.log(rabbit.isSleeping); // true
//console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)

/*
Реализуйте в прототипном стиле класс Machine с базовыми методами включить/выключить.
Создайте класс Fridge и отнаследуйтесь от Machine, создайте метод на охлаждение,
а так же сделайте так, чтобы методы включения/выключения  работали с выводом
в консоль сообщения с текущим значением enabled.*/

class Machine {
    constructor(enabled) {
        this.enabled = enabled;
    }

    on() {
        this.enabled = true;
        console.log(`Mashine on (${this.enabled})`);
    }

    off() {
        this.enabled = false;
        console.log(`Mashine off (${this.enabled})`);
    }

}

class Fridge extends Machine {
    constructor(enabled) {
        super(enabled);
    }

    cooling(enabled) {//можно задать
        if (enabled == true) {
            super.on();
            console.log(`Fridge enabled ${this.enabled}`);
        } else {
            super.off();
            console.log(`Fridge enabled ${this.enabled}`);
        }

    }

}

let fridge = new Fridge();
fridge.cooling(false);

/*Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
    который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
    который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
    который принимает строку и делает заглавной первую букву каждого слова этой строки.*/

class MyString {

    constructor(str) {
        this.str = str;
    }

    reverse() {
        // return this.str=this.str.reverse();

        console.log(this.str.split("").reverse().join(""));

    }

    ucFirst() {
        console.log(this.str[0].toUpperCase() + this.str.slice(1));
    }

    ucWords() {
        console.log(this.str.split(/\s/).map(function (item) {
            return item[0].toUpperCase() + item.slice(1);
        }).join(" "))
    }
}

let rev = new MyString("qwe sdf eee");
//console.log(rev.reverse());
rev.reverse();
rev.ucFirst();
rev.ucWords();

/*Реализуйте класс Validator, который будет проверять строки.
    К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
    является ли она корректным емейлом или нет. Если является - возвращает true,
    если не является - то false. Кроме того, класс будет иметь следующие методы:
    метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.*/

class Validator {
    constructor(email,domain,date,phone) {
        this.email = email;
        this.domain= domain;
        this.date=date;
        this.phone=phone;
    }

    isEmail() {
        let pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(this.email);
    }

    isDomain(){


    }

    isDate(){
        /*let nowDate= new Date;
        if(nowDate.getFullYear()==this.date.getFullYear()){
            return true;
        }
        else return false;
*/

    }
    isPhone(){

    }
}

let valid=new Validator("njmn@flg.ggf","www.google.com",'2012-01-26T13:51:50.417-07:00');
console.log(valid.isDate());
