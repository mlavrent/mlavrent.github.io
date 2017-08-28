var curPhoto = -1;
var slideTime = 1000;
var timeToSwitch = 0;

$(function(){
    // Initialize the dots and the images
    var numDots = 0;
    for(img in imgList) {
        $("#dotContainer").append("<div class=\"dot\" num=\"" + numDots + "\"></div>");
        numDots++;
    }
    
    $(".dot").click(function(){
        $(".dot").css('background-color', '#999999');
        $(this).css('background-color', 'black');
        timeToSwitch = new Date().getTime() + slideTime;
        curPhoto = parseInt($(this).attr("num"));
    });
    
    setInterval(function(){
        time = new Date().getTime();
        if(time > timeToSwitch) {
            timeToSwitch = time + slideTime;
            curPhoto = (curPhoto + 1) % numDots;

            $(".dot").css('background-color', '#999999');
            $("[num=" + curPhoto + "]").css('background-color', 'black');
        }
    }, 500);
});