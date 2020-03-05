let hrefHttp = document.querySelectorAll("a");

for (let a = 0; a < hrefHttp.length; a++) {
    if (hrefHttp[a].getAttribute("href").indexOf("http://") != -1) {
        hrefHttp[a].style.color = "red";
    }
}

let parent = document.querySelector("ul");
let changeElem = parent.children[2];
changeElem.before(parent.children[5]);
console.log(parent);
console.log(changeElem);

document.getElementById("elem").classList.add("www");

if (document.getElementById("elem").classList.contains("www")) {
    document.getElementById("elem").classList.remove("www");
}

function recursiveSearchTags(doc, tag) {
    return [...doc.body.querySelectorAll(tag)];
}

console.log("arr a " + recursiveSearchTags(document, "a"));

/*Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
 чтобы каждый элемент стоял в своем li.
Сделайте так, чтобы четные позиции имели красный фон.*/

function addLi(ul, arr) {
    // return ul;
    arr.forEach(function (item, index) {
        let li = document.createElement("li");
        li.innerHTML = arr[index];
        ul.append(li);

        if (index % 2) {
            li.style.background = "red";
        }
    });


}

console.log(addLi(document.querySelector("ul"), [1, 2, 3, 4, 5, 6]));

let elem = document.getElementById("elem");
let siblingElem = elem.previousSibling.previousSibling;
siblingElem.append("Text!");
console.log(siblingElem)

function wrapInParagraph(wrap) {
    let text = wrap.innerHTML;
    wrap.innerHTML = '<p>' + text + '</p>'
}

console.log(wrapInParagraph(document.querySelector(".wrap")));

/*ализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице.
    В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию:
    text-center => textCenter*/

function normalizeClassNames() {

    let allBody = document.body.getElementsByTagName("*");
    for (let i = 0; i < allBody.length; i++) {
        if (allBody[i].hasAttribute("class")) {

            let arrClass = allBody[i].classList.value;

            if (arrClass.length > 0 && arrClass.indexOf("-") != -1) {
                console.log(arrClass);
                allBody[i].classList.value = arrClass.slice(0, arrClass.indexOf("-"))
                    + arrClass[arrClass.indexOf("-") + 1].toUpperCase() + arrClass.slice(arrClass.indexOf("-") + 2);
            }
        }
    }

}

console.log(normalizeClassNames());
console.log("sewewewewewewew");