$(document).ready(function() {
    $.getJSON("https://raw.githubusercontent.com/Yooshnn/yooshnn.cc/main/res/val.json", function(data) {
        $("#bojSolve").text(" (" + data.bojSolve + " Solves)");
        $("#cfRating").text(" (" + data.cfRating + ", Expert)");
        console.log(data)
    });
});

