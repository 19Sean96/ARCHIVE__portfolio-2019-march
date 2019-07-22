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
const projectsBox = $(".projects-box");

let enteredBio = false;
let prevPos;
let bioPosition = 0;
let skillsPosition = 0;
window.onscroll = function() {
    // console.log(window.screen.availHeight);
    let position =
        document.documentElement.scrollTop || document.body.scrollTop;

    position = position * ( window.innerHeight / 722 );
    topPos = position / 500;
    // console.log(window.innerHeight);
    // console.log(position);

    if (window.innerWidth < 850) {
        position = position * 1.2;
        console.log(position);
    }

    nameContainer.css({
        transform: `translate3d(${position / 15}rem,${position / 200}rem, 0rem)`
    });
    bioContainer.css({
        transform: `translate3d(${position / -50}rem,${position /
            -20}rem, 0rem)`
    });

    inter1.css({
        transform: `translate3d(0rem,${topPos * 15}rem, 0rem)`
    });

    if ((position < (700 * (window.innerHeight / 722)) && enteredBio)) {
        bioTitle
            .removeClass("zoomIn")
            .addClass("zoomOut");

        if (position < 300) {
            bioTitle.css("display", "none");

        }
    } else if (position >= (700 * (window.innerHeight / 722)) 
                && position < (1374 * (window.innerHeight / 722))) {
        enteredBio = true;
        bioPosition = position - 700;
        // bioTitle.css({
        //     transform: `translate3d(${bioPosition / 5}rem,${bioPosition / -70}rem, 0rem)`
        // }).removeClass('zoomOut').addClass('fadeIn');
        if (position > 800) {
            bioTitle
                .removeClass("zoomOut")
                .addClass("zoomIn")
                .css({
                    display: "block",
                    opacity: "1"
                });
        }
    } else if (position >= 1400) {


        bioPosition = position - 1400;
        skillsPosition = position - 3000
        bioCreative.css(
            "transform",
            `translate3d(0rem, ${bioPosition /
                50}rem,0rem) translate(-50%, -50%)`
        );
        bioTech.css(
            "transform",
            `translate3d(0rem, ${bioPosition / -100}rem,0rem)`
        );

        if (position > 1550) {
            bioTitle.removeClass("zoomIn").addClass("zoomOut");
        }

        if (position > 1750) {
            bioTitle.css("display", "none");
        }

        if (position >= 2000) {
            bioPersonal.css(
                "transform",
                `translate3d(0rem, ${bioPosition / 50}rem,0rem)`
            );
        }

        if (position >= 3000 && window.innerWidth < 700 && position <= 4000) {
            console.log(window.innerWidth);
            skillsTitle.css(
                "transform",
                `translate3d(0rem, ${skillsPosition / 30}rem,0rem)`
            );

            if (window.innerWidth < 650) {
                skillsTitle.css(
                    "transform",
                    `translate3d(0rem, ${skillsPosition / 20}rem,0rem)`
                );
            }
        }

        if (position > 4000) {
            // skillsPosition = position - 4000;

            if (window.innerWidth >= 650) {
                skillsTitle.css(
                    "transform",
                    `translate3d(0rem, ${(skillsPosition / 38) + 7.5}rem,0rem)`
                );
            } else {
                skillsTitle.css(
                    "transform",
                    `translate3d(0rem, ${(skillsPosition / 20)}rem,0rem)`
                );
            }
        }
        if (position > 5500) {
            bioPosition = position - 5500;
            projectsBox.css(
                "transform",
                `translate3d(0rem, ${(bioPosition / -60)}rem,0rem)`
            );
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

$("a").hover(
    function() {
        // over
        $(".cursor").css({
            transform: "translate(-50%, -50%) scale(1.75)",
            "border-color": "#D9D9D9"
        });
        $(".cursor-2").css({
            transform: "translate(-50%, -50%) scale(1.75)",
            "border-color": "#046bf2"
        });
    },
    function() {
        // out
        $(".cursor").css({
            transform: "translate(-50%, -50%) scale(1)",
            "border-color": "#bf0313",
            opacity: "1"
        });
        $(".cursor-2").css({
            transform: "translate(-50%, -50%) scale(1)",
            "border-color": "#d82433"
        });
    }
);

$("#submit-btn").hover(
    function() {
        // over
        $(".cursor").css({
            transform: "translate(-50%, -50%) scale(.25)",
            "border-color": "#0355bf"
        });
        $(".cursor-2").css({
            transform: "translate(-50%, -50%) scale(1.75)",
            "border-color": "#0355bf"
        });
    },
    function() {
        // out
        $(".cursor").css({
            transform: "translate(-50%, -50%) scale(1)",
            "border-color": "#bf0313",
            opacity: "1"
        });
        $(".cursor-2").css({
            transform: "translate(-50%, -50%) scale(1)",
            "border-color": "#d82433"
        });
    }
);

$(".input").hover(
    function() {
        // over
        $(".cursor").css({
            transform: "translate(-50%, -50%) scale(.25)",
            "border-color": "#f2b707"
        });
        $(".cursor-2").css({
            transform: "translate(-50%, -50%) scale(1.75)",
            "border-color": "#f2b707"
        });
    },
    function() {
        // out
        $(".cursor").css({
            transform: "translate(-50%, -50%) scale(1)",
            "border-color": "#bf0313",
            opacity: "1"
        });
        $(".cursor-2").css({
            transform: "translate(-50%, -50%) scale(1)",
            "border-color": "#d82433"
        });
    }
);

$("a").click(function() {
    // over
    $(".cursor").css({
        transition: ".2s transform ease-in, .125s opacity ease-out",
        transform: "translate(-50%, -50%) scale(12.5)",
        "border-color": "#D9D9D9",
        opacity: "0.025"
    });
});

// THIS CONTROLS THE TITLE SWITCH ON THE LANDING PAGE
const occupationList = ["designer", "developer", "problem solver", "optimist"];
let k = 0;
const switchText = function() {
    if (k >= occupationList.length) {
        k = 0;
    }
    $(".occupation").text(occupationList[k]);
    k++;
};
window.setInterval(switchText, 1500);

// window.setInterval(function() {
//     console.log(window.innerWidth);
// },
// 100);

window.addEventListener('resize' , function(e) {
    console.log(e.target.innerHeight);
});