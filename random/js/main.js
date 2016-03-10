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
function makeBars() {
    $(".stage").html("");
    $(".stage").css("background-color", "white");

    var colordiv = ["col1", "col2", "col3", "col4", "col5"]

    for (var i = 0; i < 50; i++) {
        var color = colordiv[Math.floor(Math.random()*colordiv.length)];
        $(".stage").append("<div class='" + color + " randcolor'></div>");
        
    }
    $(".randcolor").each(function() {
        $(this).css("background-color","#"+((1<<24)*Math.random()|0).toString(16));
    })
}

makeBars();
/*
$("body").click(function() {
    $("body").remove();
    for (var i = 0; i < 50; i++) {
        var color = colordiv[Math.floor(Math.random()*colordiv.length)];
        $("body").append("<div class='" + color + "'></div>");
};
});
*/
var greetings = ["splish", "splash", "sploop", "plup", "plick", "glub"]




var blues = ["#EBEDF2", "#F1BA1E", "#F3A416", "#F0913D", "#DA420F"];

var splashCount = 0;

$("body").click(function(event) {
    
    makeBars();
    
    
    var currentsplash = "splash" + splashCount;
    var noise = greetings[Math.floor(Math.random()*greetings.length)];
       
    $(this).prepend("<h1 class='splash " + currentsplash + "'>" + noise + "</h1>");
    $(this).prepend("<div class='rings'></div>");
    $("." + currentsplash).css("top", event.clientY + "px");
    $("." + currentsplash).css("left", event.clientX + "px");
    $("." + currentsplash).css("opacity", 1);
    $(".splash").each(function() {
        var newOpacity = $(this).css("opacity") - .1;
        $(this).css("opacity",newOpacity);
    })
    // $("rings").css("top", x + "px");
    // $("rings").css("left", y + "px");
    
    var splashColor = blues[Math.floor(Math.random()*blues.length)];
    $("rings").css("background-color", splashColor);
    splashCount++;
})
