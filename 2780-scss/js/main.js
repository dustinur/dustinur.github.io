$(document).ready(function () {

    let title = $("#header h1");

    let card1 = $('.card1');
    let card2 = $('.card2');
    let card3 = $('.card3');
    let card4 = $('.card4');


    var tween1 = TweenLite.from(card1, 1, {
        opacity: "0",
        x: "-300",
        ease: Back.easeInOut
        }
    );

    var tween2 = TweenLite.from(card2, 2, {
        opacity: "0",
        y: "300",
        ease: Back.easeInOut
        }
    );

    var tween3 = TweenLite.from(card3, 3, {
        opacity: "0",
        y: "-300",
        ease: Back.easeInOut
        }
    );

    var tween4 = TweenLite.from(card4, 4, {
        opacity: "0",
        x: "300",
        ease: Back.easeInOut
        }
    );

    var tween5 = TweenLite.from(title, 4, {
        opacity: "0",
        ease: Power1.easeIn
        }
    );


});
