var currentWidth = 200;

var addSide = "addTruth";

$(".contentcell").css("width",$(window).width()+"px");

/*$(window).scroll(function() {
  
    console.log($(window).scrollLeft()/$(document).width());
  
    if($(window).scrollLeft()/$(document).width() >= .5) {
    
        currentWidth = currentWidth + 100;

    $(".container").css("width",currentWidth+"%");
    
    $(".container").append($("."+addSide).html());
    
    //$(".container").append($(".spacer").html());
    
    if( addSide == 'addLies')
    {
         addSide = 'addTruth';
    }
    else if( addSide == 'addTruth')
    {
        addSide = 'addLies';
    }
    
  }
  
  
});

*/

$(".statement").click(function(){
    $(this).hide();

    
});

var bodyClick = 0

$("body").mousedown(function() {
    bodyClick = bodyClick + 1;
  
});


//infinite scroll
$(window).scroll(function() {
  console.log($(window).scrollTop());
  console.log($(window).height());
  console.log($(document).height());
  
  if (($(window).width() + $(window).scrollLeft()) == $(document).width()) {
    $(window).scrollLeft(10);
  } else if ($(window).scrollLeft() === 0) {
  $(window).scrollLeft($(document).width() - $(window).width() + 10); 
  }
  
  
});