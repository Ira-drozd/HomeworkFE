/*
let obj={
    a:1,
    b:"qwe"
}

let newObj=Object.assign({},obj);
console.log(JSON.stringify(newObj));*/

let xhr=new XMLHttpRequest();


xhr.addEventListener("progress", updateProgress, false);
xhr.addEventListener("load", transferComplete, false);
xhr.addEventListener("error", transferFailed, false);
xhr.addEventListener("abort", transferCanceled, false);

xhr.open("GET", 'http://localhost:63342/Class30/index.html', false);

xhr.send();


if (xhr.status!=200){
    alert(xhr.status+': '+xhr.statusText);
}
else {
    alert(xhr.responseText);
}

function updateProgress (oEvent) {
    if (oEvent.lengthComputable) {
        let percentComplete = oEvent.loaded / oEvent.total;
        // ...
        alert(percentComplete);
    } else {
        // Невозможно вычислить состояние загрузки, так как размер неизвестен
        alert("Невозможно вычислить состояние загрузки, так как размер неизвестен");
    }
}

function transferComplete(evt) {
    alert("Загрузка завершена.");
}

function transferFailed(evt) {
    alert("При загрузке файла произошла ошибка.");
}

function transferCanceled(evt) {
    alert("Пользователь отменил загрузку.");
}


/*
let linkInstaJSON='https://api.instagram.com/v1/users/2093101329/media/recent/?access_token=2093101329.0e4abd3.d017a21b3e6e45408126e42cf0940d79';

let request=new XMLHttpRequest();
request.open("GET", linkInstaJSON);
//request.responseType='text';
//request.send();
console.log(JSON.parse(request));
*/



