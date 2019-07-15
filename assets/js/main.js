
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
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 0, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  let topPos;
  const name = $('.name-container');
  let prevPos;


  window.onscroll = function () {
    let position = document.documentElement.scrollTop || document.body.scrollTop;
    let topPos2;
    topPos = (position / 500);
    console.log(topPos);
    console.log(prevPos);
    console.log((topPos * 2) - prevPos);
    if (topPos <= 2) {
        $('#bio').css({
            'left': `${70 - (position / 20)}%`,
            'top': `${17.5 + (topPos * 2)}rem`
        });
        $('#skills').css({
            'left': `${70 - (position / 20)}%`,
            'top': `${25 + (topPos * 1.35)}rem`
        });
        $('#projects').css({
            'left': `${70 - (position / 20)}%`,
            'top': `${32.5 + (topPos * .75)}rem`
        });
        $('#contact').css({
            'left': `${70 - (position / 20)}%`,
            'top': `${40}rem`
        });
    } 
    // else if (topPos > 2 && topPos <= 3) {
    //     $('#bio').css('top', `${21.5}rem`);
    //     $('#skills').css('top', `${27.7}rem`);
    //     $('#projects').css('top', `${34}rem`);
    //     $('#contact').css('top', `${40}rem`);

    // } 
    else {
        let x = ((topPos * 1.75) - prevPos);
        $('#bio').css('top', `${21.5 - (x*5)}rem`);
        $('#skills').css('top', `${27.7 - (x*4)}rem`);
        $('#projects').css('top', `${34 - (x*3)}rem`);
        $('#contact').css('top', `${40 - (x*2)}rem`);
    }
 
    prevPos = topPos;
    // console.log(position);
    // console.log(name);
    // if (position <= 100) {
        name.css({
            // 'top': `calc(2rem + ${position / 20}%)`,
            'left': `calc(2rem + ${position / 10}%)`
        });


    // } else if (position <= 200) {
    //     name.css({
    //         'opacity': '.8',
    //         'top': `${0 + (position / 20)}%`
    //     });
    // } else if (position <= 300) {
    //     name.css({
    //         'opacity': '.6',
    //         'top': `${0 + (position / 20)}%`
    //     });    
    // } else if (position <= 400) {
    //     name.css({
    //         'opacity': '.4',
    //         'top': `${0 + (position / 20)}%`
    //     });
    // } else if (position <= 500) {
    //     name.css({
    //         'opacity': '.2',
    //         'top': `${0 + (position / 20)}%`
    //     });
    // }else if (position > 600) {
    //     name.css({
    //         'opacity': '0',
    //         'top': `${0 + (position / 20)}%`
    //     });
    
  }


    $(document).mousemove(function (e) { 
        let position = document.documentElement.scrollTop || document.body.scrollTop;
      // values: e.clientX, e.clientY, e.pageX, e.pageY
        $('.cursor').css({
            'top': `${e.pageY - position}px`,
            'left': `${e.pageX}px`
        })
    });