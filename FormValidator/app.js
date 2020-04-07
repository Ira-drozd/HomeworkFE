const express = require("express");
const bodyParser = require("body-parser");
// создаем приложение
const app = express();
console.log("App started")

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
   // response.send(`${request.body.email} - ${request.body.password}`);

    function check() {
    let email=request.body.email;
    let password= request.body.password;

    let emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailPattern.test(email)) return {status:1, message: "Bad email"}

    let passwordPattern=[/[0-9]{1,}/, /[A-z]{1,}/, /\.{1,}/];
        if (!(passwordPattern[0].test(password) && passwordPattern[1].test(password) && passwordPattern[2].test(password) && password.length > 6)) {
            return {status:2, message: "Bad password"}
        }

    return {message: "ok"}

    }

    response.send(check());

});

app.get("/", function (request, response) {
    response.send("Главная страница");
});

app.listen(3000);


