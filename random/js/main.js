/*
$("body").css("background-color", "yellow");

for (var i = 0; i < 100; i++) {
    $("body").append("<div class='bar'></div>");
    

};


$("body").css("background-color", "yellow");

var blues = ["#EBEDF2", "#F1BA1E", "#F3A416", "#F0913D", "#DA420F"];

function randomcolor() {
    $(".bar").each(function() {
        var bluehue = blues[Math.floor(Math.random() * blues.length)];
        $(this).css("background-color", bluehue);
        $(this).css("width", "100%");
        $(this).css("height", "1%");
});
};
*/

$("body").css("background-color", "white");

var colordiv = ["col1", "col2", "col3", "col4", "col5"]

for (var i = 0; i < 50; i++) {
    var color = colordiv[Math.floor(Math.random()*colordiv.length)];
    $("body").append("<div class='" + color + "'></div>");
};




    $("body").click(function(event) {
        var x = event.pageX + "px";
        var y = event.pageY + "px";
    
        $(this).prepend("<h1 class='click'>Hai</h1>");
        
        $("click").css("top", y);
        $("click").css("left", x);
})

