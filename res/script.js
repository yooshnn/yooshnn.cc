$(document).ready(function() {
    $.getJSON("https://raw.githubusercontent.com/Yooshnn/yooshnn.cc/main/res/val.json", function(data) {
        $("#bojSolve").text(" (" + data.bojSolve + " Solves, D4)");
        $("#cfRating").text(" (" + data.cfRating + ", Expert)");
        console.log(data)
    });
});

