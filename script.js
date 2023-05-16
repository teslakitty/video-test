var c = document.getElementById("mm");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello cat animal ", 10, 50);

var button = document.getElementById("myButton");
button.addEventListener("click", function() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeText("hello meow", 10, 50);
    setTimeout(function() {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.strokeText("Hello cat animal ", 10, 50);
    }, 7000);
    setTimeout(function() {
        var videoContainer = document.getElementById("video-container");
        videoContainer.style.display = "block";
    }, 10000);
});
