
$('.nav-list-item:not(#resume)').hover(function () {
        $(this).removeClass('fadeInLeft');
        $(this).addClass('shake');
        console.log('hoivered');
    }, function () {
        $(this).removeClass('shake');
    }
);

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


  window.onscroll = function () {
    let position = document.documentElement.scrollTop || document.body.scrollTop;

    topPos = (position / 400);
    console.log(topPos);
    $('#bio').css({
        'left': `${110 - (position / 10)}%`,
        'top': `${17.5 - (Math.pow(17.5, (topPos)))}rem`
    });
    $('#skills').css('left', `${110 + (position / 12)}%`);
    $('#projects').css('left', `${110 + (position / 9)}%`);
    $('#contact').css('left', `${110 + (position / 15)}%`);

    // console.log(position);
    // console.log(name);
    if (position <= 100) {
        name.css('opacity', '1');
    } else if (position <= 200) {
        name.css('opacity', '.8');
    } else if (position <= 300) {
        name.css('opacity', '.6');
    }else if (position <= 400) {
        name.css('opacity', '.4');
    }else if (position <= 500) {
        name.css('opacity', '.2');
    }else if (position <= 600) {
        name.css('opacity', '0');
    }
  }