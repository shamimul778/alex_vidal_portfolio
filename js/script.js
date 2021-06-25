$(document).ready(function() {
    // Progress 
    $('#progressbar1').LineProgressbar({
        percentage: 100
    });

    $('#progressbar2').LineProgressbar({
        percentage: 82
    });

    $('#progressbar3').LineProgressbar({
        percentage: 97
    });

    $('#progressbar4').LineProgressbar({
        percentage: 75
    });

    $('#progressbar5').LineProgressbar({
        percentage: 66
    });

    $('#progressbar6').LineProgressbar({
        percentage: 45
    });
    
    
    $('.image-link').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {enabled:true}
    });

    // Counter 
    $('.counter1').counterUp({
        delay: 10,
        time: 1000
    });
    $('.counter2').counterUp({
        delay: 100,
        time: 4000
    });
    $('.counter3').counterUp({
        delay: 100,
        time: 5000
    });

    $(".main-header-area").sticky({
        topSpacing:0
    });

});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
