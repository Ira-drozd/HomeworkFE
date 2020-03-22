/*$(function() {
    $("#currDateInput").html(new Date());
//Some other DOM manipulations here
});*/

//как плавно?

let $images = $("img");
let left;

$("#next").click(function () {
    left = parseFloat($images.css("left")) + 600;
    if (left !== 600 || left < 600) {
        $images.css("left", left);
        $(".next-left").html(left);
    } else {
        $images.css("left", "-1800px");
    }
});

setTimeout($("#prev").click(function () {
    left = parseFloat($images.css("left")) - 600;
    if (left !== -2400 || left > -2400) {
        $images.css("left", left);
        $(".prev-left").html(left);
    } else {
        $images.css("left", "0");
    }
}), 9000);


$("#myform").find("input").keyup(function () {
    if (this.value.length > 6 && this.value.length < 1000) {
        console.log(this);
        //str.before("\u2713");
       // $(this).addClass("ok");
        $(this).attr("class", "ok");
    } else {
        $(this).attr("class", "no");
        //$(this).removeClass("ok");
    }
});

$("#myform").find("input").blur(function () {
    $(this).attr("class", "");
});
