// $('.nav-list-item:not(#resume)').hover(function () {
//         $(this).removeClass('fadeInLeft');
//         $(this).addClass('shake');
//         console.log('hoivered');
//     }, function () {
//         $(this).removeClass('shake');
//     }
// );

window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
});

// Scroll certain amounts from current position
window.scrollBy({
    top: 0, // could be negative value
    left: 0,
    behavior: "smooth"
});
let topPos;
const name = $(".name-container");
let prevPos;

window.onscroll = function() {
    let position =
        document.documentElement.scrollTop || document.body.scrollTop;
    topPos = position / 500;

    name.css({
        transform: `translate3d(0rem,${50 + topPos * 25}rem, 0rem)`
    });

    if (topPos <= 2) {
        $("#bio").css({
            left: `${70 - position / 20}%`,
            top: `${17.5 + topPos * 2}rem`
        });
        $("#skills").css({
            left: `${70 - position / 20}%`,
            top: `${25 + topPos * 1.35}rem`
        });
        $("#projects").css({
            left: `${70 - position / 20}%`,
            top: `${32.5 + topPos * 0.75}rem`
        });
        $("#contact").css({
            left: `${70 - position / 20}%`,
            top: `${40}rem`
        });
    } else {
        let x = topPos * 1.75 - prevPos;
        $("#bio").css("top", `${21.5 - x * 5}rem`);
        $("#skills").css("top", `${27.7 - x * 4}rem`);
        $("#projects").css("top", `${34 - x * 3}rem`);
        $("#contact").css("top", `${40 - x * 2}rem`);
    }
    prevPos = topPos;
};


// window.onscroll = function() {
    // name.css({
    //     transform: `translate3d(0rem,${50 + topPos * 25}rem, 0rem)`
    // });
// }

$(document).mousemove(function(e) {
    let position =
        document.documentElement.scrollTop || document.body.scrollTop;
    $(".cursor").css({
        top: `${e.pageY - position}px`,
        left: `${e.pageX}px`
    });

    $(".cursor-2").css({
        top: `${e.pageY - position}px`,
        left: `${e.pageX}px`
    });
});
