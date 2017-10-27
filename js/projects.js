$(function() {
    console.log(projs[0]);
    for(var proj of projs) {
        var newString = "<a href='" + proj['url'] + "' style='background: linear-gradient(180deg, " + proj['color'] + " 60%, white 40%);' class='projBox'><h3>" + proj['name'] + "</h3></a>";
        console.log(newString);
        $("#projTable").append(newString);
    }
});