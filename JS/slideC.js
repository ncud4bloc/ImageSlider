var $content = $('#content');
var $title = $('<div id="logo"><h2>FIX</h2></div>');
var $photoBox = $('<div id="photoBox"></div>');
var $photo = $('<div class="picture photoClass" id="xf5"></div>');
var $photo1 = $('<div class="picture photoClass" id="xb29"></div>');
var $photo2 = $('<div class="picture photoClass" id="xcobra"></div>');
var $photo3 = $('<div class="picture photoClass" id="xf18"></div>');
var $photo4 = $('<div class="picture photoClass" id="xv22"></div>');
/*var $photo = $('<div class="picture photoClass" id="xf5"><img src="../IMAGES/F5E.jpg" width="600" height="450" /></div>');
var $photo1 = $('<div class="picture photoClass" id="xb29"><img src="../IMAGES/B29.jpg" width="600" height="450" /></div>');
var $photo2 = $('<div class="picture photoClass" id="xcobra"><img src="../IMAGES/supercobra.jpg" width="600" height="450" /></div>');
var $photo3 = $('<div class="picture photoClass" id="xf18"><img src="../IMAGES/F18A.jpg" width="600" height="450" /></div>');
var $photo4 = $('<div class="picture photoClass" id="xv22"><img src="../IMAGES/V22.jpg" width="600" height="450" /></div>');*/
var $arrows = $('<div id="arrows"></div>');
var $lftArrow = $('<div id="lftArrow"></div>');
var $rtArrow = $('<div id="rtArrow"></div>');
var $scrollButtons = $('<div id="scrollButtons"></div>');
var $button1 = $('<div class="button" id="button1"></div>');
var $button2 = $('<div class="button" id="button2"></div>');
var $button3 = $('<div class="button" id="button3"></div>');
var $button4 = $('<div class="button" id="button4"></div>');
var $button5 = $('<div class="button" id="button5"></div>');
var $button6 = $('<div class="button" id="button6"></div>');

$content.append($title);
$content.append($photoBox);
$photoBox.append($photo);
$photoBox.append($photo1);
$photoBox.append($photo2);
$photoBox.append($photo3);
$photoBox.append($photo4);
$content.append($arrows);
/*$photo.append($arrows);*/
$arrows.append($lftArrow);
$arrows.append($rtArrow);

$content.append($scrollButtons);
$scrollButtons.append($button1);
$scrollButtons.append($button2);
$scrollButtons.append($button3);
$scrollButtons.append($button4);
$scrollButtons.append($button5);

/* -----  CSS  ----- */

$content.css({
    'width': '100%',
    'height': '680px',
    /*'background-image': 'url(../IMAGES/airport.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',*/
    'border': '3px solid #454040'
});

$title.css({
    'position': 'relative',
    'width': '60%',
    'margin': '-35px auto 10px auto',
    'padding-top': '20px',
    'text-align': 'center',
    'font-family': '"Poiret One", cursive',
    'font-size': '28px',
    'font-weight': '900'
});

$photoBox.css({
    'position': 'relative',
    'width': '610px',
    'height': '460px',
    'margin': '20px auto 10px auto',
    'border-radius': '10px',
    'border': '5px solid #7b7b81'
});


$('#xf5').css({
    'display': 'inline-block',
    'background-image': 'url(../IMAGES/F5E.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});

$('#xb29').css({
    'display': 'none',
    'background-image': 'url(../IMAGES/B29.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});

$('#xcobra').css({
    'display': 'none',
    'background-image': 'url(../IMAGES/supercobra.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});

$('#xf18').css({
    'display': 'none',
    'background-image': 'url(../IMAGES/F18A.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});

$('#xv22').css({
    'display': 'none',
    'background-image': 'url(../IMAGES/V22.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});


$('.photoClass').css({
    'position': 'relative',
    'width': '600px',
    'height': '450px',
    'border-radius': '5px'
});

$arrows.css({
    'position': 'relative',
    /*'width': '62%',*/
    'width': '75%',
    'height': '30px',
    'margin': '-250px auto 0 auto'
});

$lftArrow.css({
    'position': 'relative',
    'width': '30px',
    'height': '30px',
    'margin-left': '10px',
    'background-image': 'url(../IMAGES/lftArrow.png)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
    'float': 'left'
});

$rtArrow.css({
    'position': 'relative',
    'width': '30px',
    'height': '30px',
    'margin-right': '10px',
    'background-image': 'url(../IMAGES/rtArrow.png)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
    'float': 'right'
});

$scrollButtons.css({
    'position': 'relative',
    'margin': '150px auto 10px auto',
    'width': '400px',
    'height': '50px',
    'background-color': '#3c3c41',
    'border': '3px solid #7b7b81',
    'border-radius': '25px'
});

$button1.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#7b7b81',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});

$button2.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#fff',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});

$button3.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#fff',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});

$button4.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#fff',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});

$button5.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#fff',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});


/* -----  Functions  ----- */

var moveRtA =function(){
    $('#photoBox').css({
        'background-image': 'url(../IMAGES/B29.jpg)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
    });
    $('#xf5').slideUp(1200);
    $('#xb29').slideDown(1200);
};

var moveRt =function(){
    setButtonCol();
    if($('.picture').attr('id') == 'xf5'){
        $('#photoBox').css({
            'background-image': 'url(../IMAGES/B29.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover',
        });
        $('#xf5').slideUp(1200);
        $('#xb29').slideDown(1200);
        $('#xb29').css({
            'display': 'inline-block'
        });
        $('.picture').removeAttr('id');
        $('.picture').attr('id','xb29');
        $('#xb29').css({
            'display': 'none',
            'background-image': 'url(../IMAGES/B29.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover'
        });
    } else if ($('.picture').attr('id') == 'xb29'){
        console.log('sees id xb29');
        $('#photoBox').css({
            'background-image': 'url(../IMAGES/supercobra.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover',
        });
        $('#xb29').slideUp(1200);
        $('#xcobra').slideDown(1200); 
    } else if ($('.picture').attr('id') == 'xcobra'){
        $('#photoBox').css({
            'background-image': 'url(../IMAGES/F18A.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover',
        });
        $('#xcobra').slideUp(1200);
        $('#xf18').slideDown(1200); 
    } else if ($('.picture').attr('id') == 'xf18'){
        $('#photoBox').css({
            'background-image': 'url(../IMAGES/V22.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover',
        });
        $('#xf18').slideUp(1200);
        $('#xv22').slideDown(1200); 
    } else {
        $('#photoBox').css({
            'background-image': 'url(../IMAGES/F5E.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover',
        });
        $('#xv22').slideUp(1200);
        $('#xf5').slideDown(1200); 
    }
};

var setButtonCol =function(){
    $('.button').css({
            'background-color': '#fff'
        });
};

var scrollEm = function(){
    setInterval(moveRt,10000);
};



$(function(){
   
    $('#rtArrow').on('click',function(){
        console.log('rt click registered');
        moveRt();
    });
    
});