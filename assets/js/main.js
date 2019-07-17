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
const nameContainer = $(".name-container");
const bioContainer = $(".bio-container");
const bioPage = $("#bio-page");
const bioTitle = $(".bio-title");
const inter1 = $(".intersect-1");



let prevPos;
let bioPosition = 0;
window.onscroll = function() {
    let position =
        document.documentElement.scrollTop || document.body.scrollTop;
    topPos = position / 500;
    console.log(position);

    nameContainer.css({
        transform: `translate3d(${position / 15}rem,${position / 200}rem, 0rem)`
    });
    bioContainer.css({
        transform: `translate3d(${position /-50}rem,${position / -20}rem, 0rem)`
    });
    bioPage.css({
        transform: `translate3d(0rem,${topPos * -10}rem, 0rem)`
    });
    inter1.css({
        transform: `translate3d(0rem,${topPos * -95}rem, 0rem)`
    });


    if (position >= 700) {
        bioPosition = position - 700;
        bioTitle.css({
            transform: `translate3d(${bioPosition / 5}rem,${bioPosition / -70}rem, 0rem)`
        });
    }

    
    prevPos = topPos;
};






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


$('a').hover(function () {
        // over
        $('.cursor').css({
            'transform': 'translate(-50%, -50%) scale(1.75)',
            'border-color': '#fff'
        });
        $('.cursor-2').css({
            'transform': 'translate(-50%, -50%) scale(1.75)',
            'border-color': '#046bf2'
        });

    }, function () {
        // out
        $('.cursor').css({
            'transform': 'translate(-50%, -50%) scale(1)',
            'border-color': '#bf0313'
        });        
        $('.cursor-2').css({
            'transform': 'translate(-50%, -50%) scale(1)',
            'border-color': '#d82433'
        });    }
);




// THIS CONTROLS THE TITLE SWITCH ON THE LANDING PAGE
const occupationList = [
    'designer',
    'developer',
    'problem solver',
    'optomist'
]
let k = 0;
const switchText = function() {
    if (k >= occupationList.length) {
        k = 0;
    } 
    $('.occupation').text(occupationList[k]);
    k++;
}
window.setInterval(switchText, 1500);

