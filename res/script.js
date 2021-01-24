$(document).ready(function() {
    $.getJSON("https://raw.githubusercontent.com/Yooshnn/yooshnn.cc/master/val.json", function(data) {
        $("#bojSolve").text(" (" + data.bojSolve + " Solves)");
        $("#cfRating").text(" (" + data.cfRating + ", Expert)");
        console.log(data)
    });
});

