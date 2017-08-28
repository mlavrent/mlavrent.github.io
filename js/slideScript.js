var curPhoto = -1;
var slideTime = 5000;
var timeToSwitch = 0;

function updateSlide() {
    $("#photoTitle").text(imgList[curPhoto].imgTitle);
    $("#photos img").css('display', 'none');
    $("#photos img[num=\"" + curPhoto + "\"]").css('display', 'block');
}

$(function(){
    // Initialize the dots and images
    var numDots = 0;
    imgList.forEach(function(img){
        $("#dotContainer").append("<div class=\"dot\" num=\"" + numDots + "\"></div>");
        $("#photos").append("<img src=\"img/homeSlides/" + img.imgFile + "\" num=\"" + numDots + "\" />");
        numDots++;
    });
    
    // Click on dots
    $(".dot").click(function(){
        $(".dot").css('background-color', '#999999');
        $(this).css('background-color', 'black');
        timeToSwitch = new Date().getTime() + slideTime;
        curPhoto = parseInt($(this).attr("num"));
        updateSlide();
    });
    
    // Periodically change image
    setInterval(function(){
        time = new Date().getTime();
        if(time > timeToSwitch) {
            timeToSwitch = time + slideTime;
            curPhoto = (curPhoto + 1) % numDots;

            $(".dot").css('background-color', '#999999');
            $(".dot[num=" + curPhoto + "]").css('background-color', 'black');
            updateSlide();
        }
                
    }, 500);
});