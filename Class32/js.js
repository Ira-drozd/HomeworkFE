/*let linkInstaJSON = 'https://jsonplaceholder.typicode.com/albums';*/

/*let xhr=new XMLHttpRequest();
xhr.open("GET", linkInstaJSON);
//xhr.responseType='json';
xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если всё прошло гладко, выводим результат
        alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера

        JSON.parse(xhr.response).forEach(function (obj) {
            console.log(obj.title);
        });
    }
};*/

/*albumId=id*/

$(function () {

    let albums=$.get('https://jsonplaceholder.typicode.com/albums');
    
    albums.done(function (data) {
        
        data.forEach(function (obj) {
          /*  $('body').prepend(`<button id="${obj.id}"> ${obj.title}</button>`);*/
            $('#color').append(new Option(obj.title, obj.id));
        });
        /*$('#color').append(new Option("qwe", 5));*/
    });

    albums.fail(function (data) {
        alert(`Error albums + ${data.status}`);
    });
});

$(function () {

    $('body').on("change", "#color",function (e) {
        let photos=$.get('https://jsonplaceholder.typicode.com/photos');
        photos.done(function (data) {
            $('#file').empty();
            data.forEach(function (obj) {
                /*if (obj.albumId==e.target.id){
                   // console.log(obj);
                    $("#file").append(`<img src="${obj.thumbnailUrl}" alt="${obj.title}"></img>`);
                }*/
                if (obj.albumId==e.target.value){
                    // console.log(obj);
                    $("#file").append(`<img src="${obj.thumbnailUrl}" alt="${obj.title}"></img>`);
                }
            })

            $("#file").css({
                "display": "grid",
            "grid-template-columns": "repeat(10, auto)",
            "grid-row-gap": "10px",
            "grid-column-gap": "10px"
            });
        });
        photos.fail(function (data) {
            alert(`Error img+ ${data.status}`);
        });

    });
});