const express = require("express");
const bodyParser = require("body-parser");
// создаем приложение
const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.email} - ${request.body.password}`);
});

app.get("/", function (request, response) {
    response.send("Главная страница");
});

app.listen(3000);


