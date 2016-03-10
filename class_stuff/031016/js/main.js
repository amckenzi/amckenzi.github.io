$("button").click(function() {
   console.log("hey");
   $("body").css("background-color", "lime");
});

$(window).scroll(function(event) {
    console.log($(window).scrollTop());
    
})

$(document).mousemove(function(event){ 
    console.log(event.pageX);
});