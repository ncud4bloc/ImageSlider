var $content = $('#content');
var $title = $('<div id="logo"><h2>Slider Test</h2></div>');
var $photoBox = $('<div id="photoBox"></div>');
var $photo = $('<div class="picture photoClass" id="cobra"></div>');
var $photo1 = $('<div class="picture photoClass" id="b29"></div>');
var $photo2 = $('<div class="picture photoClass" id="f5"></div>');

/*var $photo = $('<div class="picture photoClass" id="cobra"><img class="myImages" src="../IMAGES/supercobra.jpg" /></div>');
var $photo1 = $('<div class="picture photoClass" id="b29"><img class="myImages" src="../IMAGES/B29.jpg" /></div>');
var $photo2 = $('<div class="picture photoClass" id="f5"><img class="myImages" src="../IMAGES/F5E.jpg" /></div>');*/

var $arrows = $('<div id="arrows"></div>');
var $lftArrow = $('<div id="lftArrow"></div>');
var $rtArrow = $('<div id="rtArrow"></div>');

$content.append($title);
$content.append($photoBox);
$photoBox.append($photo);
$photoBox.append($photo1);
$photoBox.append($photo2);
$content.append($arrows);
$arrows.append($lftArrow);
$arrows.append($rtArrow);

/* -----  CSS  ----- */

$content.css({
    'width': '100%',
    'height': '680px',
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

$('.myImages').css({
    'width': '600px',
    'height': '450px'
})


$('#cobra').css({
    'display': 'inline-block',
    'background-image': 'url(../IMAGES/supercobra.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
    /*'visibility': 'visible'*/
});

$('#b29').css({
    'display': 'none',
    'background-image': 'url(../IMAGES/B29.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
    /*'visibility': 'hidden'*/
});

$('#f5').css({
    'display': 'none',
    'background-image': 'url(../IMAGES/F5E.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
    /*'visibility': 'hidden'*/
});


$('.photoClass').css({
    'position': 'relative',
    'width': '600px',
    'height': '450px',
    'border-radius': '5px',
});

$arrows.css({
    'position': 'relative',
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


var moveRtA =function(){
    $('#photoBox').css({
        'background-image': 'url(../IMAGES/B29.jpg)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
    });
    $('#cobra').slideUp(600);
    $('#b29').slideDown(600);
};



$(function(){
   
    $('#rtArrow').on('click',function(){
        console.log('rt click registered');
        /*$('#cobra').slideUp(600);*/
        moveRtA();
    });
    
});