var curPhoto = 0;
var timeToSwitch = 8;

$(function(){
    // Initialize the dots and the images
    let numDots = 0;
    for(img in imgList) {
        $("#dotContainer").append("<div class=\"dot\" num=\"" + numDots + "\"></div>");
        numDots++;
    }
    
    
    $(".dot").click(function(){
        $(this).css('color', 'black')
        // change curPhoto value
        timeToSwitch = 8;
    })
    
    function mainLoop() {
        
    } 
});