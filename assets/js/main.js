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
const bioCreative = $(".bio-creative");
const bioTech = $(".bio-tech");
const bioPersonal = $(".bio-personal");
const inter1 = $(".intersect-1");
const skillsTitle = $(".skills-title");



let enteredBio = false;
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
    // bioPage.css({
    //     transform: `translate3d(0rem,${topPos * -10}rem, 0rem)`
    // });
    inter1.css({
        transform: `translate3d(0rem,${topPos * 15}rem, 0rem)`
    });

    if (position < 700 && enteredBio) {

        bioTitle.removeClass('zoomIn').addClass('zoomOut');

    } else if (position >= 700 && position < 1374) {
        enteredBio = true;
        bioPosition = position - 700; 
        // bioTitle.css({
        //     transform: `translate3d(${bioPosition / 5}rem,${bioPosition / -70}rem, 0rem)`
        // }).removeClass('zoomOut').addClass('fadeIn');
        if (position > 800) {
            bioTitle.removeClass('zoomOut').addClass('zoomIn').css('opacity','1');
        }
    } 
    else if (position >= 1400) {
        bioPosition = position - 1400;
        bioCreative.css('transform', `translate3d(0rem, ${bioPosition / 50}rem,0rem) translate(-50%, -50%)`);
        bioTech.css('transform', `translate3d(0rem, ${bioPosition / -100}rem,0rem)`);

        if (position > 1550) {
            bioTitle.removeClass('zoomIn').addClass('zoomOut');
        }

        if (position >= 2000) {
            bioPersonal.css('transform', `translate3d(0rem, ${bioPosition / 50}rem,0rem)`);
        }

        if (position > 4000) {
            skillsTitle.css('transform', `translate3d(0rem, ${bioPosition / 40}rem,0rem)`);
        }
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
            'border-color': '#D9D9D9'
        });
        $('.cursor-2').css({
            'transform': 'translate(-50%, -50%) scale(1.75)',
            'border-color': '#046bf2'
        });

    }, function () {
        // out
        $('.cursor').css({
            'transform': 'translate(-50%, -50%) scale(1)',
            'border-color': '#bf0313',
            'opacity': '1'
        });        
        $('.cursor-2').css({
            'transform': 'translate(-50%, -50%) scale(1)',
            'border-color': '#d82433'
        });    }
);

$('a').click(function () {
    // over
    $('.cursor').css({
        'transition': '.2s transform ease-in, .125s opacity ease-out',
        'transform': 'translate(-50%, -50%) scale(12.5)',
        'border-color': '#D9D9D9',
        'opacity': '0.025'
    });

});




// THIS CONTROLS THE TITLE SWITCH ON THE LANDING PAGE
const occupationList = [
    'designer',
    'developer',
    'problem solver',
    'optimist'
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

