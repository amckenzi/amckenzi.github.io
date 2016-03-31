var currentWidth = 200;

var addSide = "addTruth";

$(".contentcell").css("width",$(window).width()+"px");

$(window).scroll(function() {
  
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


$(".statement").click(function(){
    $(this).hide();

    
});
