"use strict"
let hack = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let arr = [];

$(document).keyup(function(event) {
    arr.push(event.keyCode);
    if (hack.length == arr.length) {
        hackEvent();
    }
})

function hackEvent() {
    if (JSON.stringify(hack) === JSON.stringify(arr)) {
        alert('30 Lives have been added')
        $('body').css({
            background : 'purple'
        })
        $('h1').css({
            display: 'none'
        })
        var audio = {};
        audio["walk"] = new Audio();
        audio["walk"].src="Rest-in-pieces.mp3"
        audio["walk"].play();
    }
}