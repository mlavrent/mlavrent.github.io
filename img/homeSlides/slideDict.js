class SlideImage {
    constructor(imgFile, imgTitle, imgDescription) {
        this.imgFile = imgFile;
        this.imgTitle = imgTitle;
        this.imgDescription = imgDescription;
    }
}

var imgList = [
    new SlideImage("brown-logo.png", "The Start of College", "I've just entered my freshman year at Brown."),
    new SlideImage("dcmp-robot.jpg", "FIRST World Championships Run", "For my last season, a World Championships run."),
    new SlideImage("nightroitsky.jpg", "St. Petersburg", "It's the most beautiful city, I think."),
];