var $content = $('#content');
var $title = $('<div id="logo"><h2>Airplane Image Slider</h2></div>');
var $photoBox = $('<div id="photoBox"></div>');
var $photo1 = $('<div class="picture visible" id="photo1"></div>');
var $photo2 = $('<div class="picture hidden" id="photo2"></div>');
var $photo3 = $('<div class="picture hidden" id="photo3"></div>');
var $photo4 = $('<div class="picture hidden" id="photo4"></div>');
var $photo5 = $('<div class="picture hidden" id="photo5"></div>');
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

var $active = $('#photo1');

$content.append($title);
$content.append($photoBox);
$photoBox.append($photo1);
    $photo1.addClass('photoClass');
/*$photoBox.append($photo2);
    $photo2.addClass('photoClass');
$photoBox.append($photo3);
    $photo3.addClass('photoClass');
$photoBox.append($photo4);
    $photo4.addClass('photoClass');
$photoBox.append($photo5);
    $photo5.addClass('photoClass');*/
$('.photoClass').append($arrows);
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
    'background-image': 'url(../IMAGES/airport.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
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

$('.visible').css({
    'display': 'inline-block'
});

$('.hidden').css({
    'display': 'none'
});

$arrows.css({
    'position': 'relative',
    'width': '100%',
    'height': '30px',
    'margin-top': '215px'
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

$('.photoClass').css({
    'display': 'inline-block',
    'position': 'relative',
    'width': '600px',
    'height': '450px',
    'border-radius': '5px',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});

$photo1.css({
    'background-image': 'url(../IMAGES/F5E.jpg)'
});

$photo2.css({
    'background-image': 'url(../IMAGES/supercobra.jpg)'
});

$photo3.css({
    'background-image': 'url(../IMAGES/B29.jpg)'
});

$photo4.css({
    'background-image': 'url(../IMAGES/F18A.jpg)'
});

$photo5.css({
    'background-image': 'url(../IMAGES/V22.jpg)'
});


$scrollButtons.css({
    'position': 'relative',
    'margin': '-5px auto 10px auto',
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
    'background-color': '#fff',
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

var moveRt =function(){
    $active.removeClass('visible').addClass('hidden');
    switch($active){
        case $('#photo1'):
            $active = $('#photo2');
            break;
        case $('#photo2'):
            $active = $('#photo3');
            break;
        case $('#photo3'):
            $active = $('#photo4');
            break;
        case $('#photo4'):
            $active = $('#photo5');
            break;
        case $('#photo5'):
            $active = $('#photo1');
    }
    $active.removeClass('hidden').addClass('visible');
};

var moveLft =function(){
    $active.removeClass('visible').addClass('hidden');
    switch($active){
        case $('#photo5'):
            $active = $('#photo4');
            break;
        case ('#photo4'):
            $active = $('#photo3');
            break;
        case $('#photo3'):
            $active = $('#photo2');
            break;
        case $('#photo2'):
            $active = $('#photo1');
            break;
        case $('#photo1'):
            $active = $('#photo5');
    }
    $active.removeClass('hidden').addClass('visible');
};

var moveTo =function(){
    $active.removeClass('hidden').addClass('visible');
};

/* -----  Function Calls  ----- */

$(function(){
   
    $('#rtArrow').on('click',function(){
       moveRt(); 
    });
    
    $('#lftArrow').on('click',function(){
       moveRLft(); 
    });
    
    $('#button1').on('click',function(){
        $active.removeClass('visible').addClass('hidden');
        $active = $('#photo1');
        moveTo();
    });
    
    $('#button2').on('click',function(){
        $active.removeClass('visible').addClass('hidden');
        $active = $('#photo2');
        moveTo();
    });
    
    $('#button3').on('click',function(){
        $active.removeClass('visible').addClass('hidden');
        $active = $('#photo3');
        moveTo();
    });
    
    $('#button4').on('click',function(){
        $active.removeClass('visible').addClass('hidden');
        $active = $('#photo4');
        moveTo();
    });
    
    $('#button5').on('click',function(){
        $active.removeClass('visible').addClass('hidden');
        $active = $('#photo5');
        moveTo();
    });
    
});