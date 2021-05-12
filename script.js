window.onload = choosePic;

var myPix = new Array("gifs/bird.gif","gifs/bk.gif","gifs/ph.gif","gifs/snail.gif","gifs/ttq.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("logo").src = myPix[randomNum];
}
// Typewriter JS Code
var app = document.getElementById('intro');

var typewriter = new Typewriter(app, {
    delay: 75
});

// typewriter.typeString('Hi, I’m Myra. ')
//     .pauseFor(1000)
//     .typeString('I believe hope is a discipline.')
//     .callFunction(function() {
//         $(".Typewriter__cursor").hide();
//     })
//     .start();
