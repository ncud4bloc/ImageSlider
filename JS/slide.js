var $content = $('#content');
var $title = $('<div id="logo"><h2>Airplane Image Slider</h2></div>');
var $photoBox = $('<div id="tabs"></div>');
var $photo1 = $('<div id="photo1"></div>');
var $photo2 = $('<div id="photo2"></div>');
var $photo3 = $('<div id="photo3"></div>');
var $photo4 = $('<div id="photo4"></div>');
var $photo5 = $('<div id="photo5"></div>');
var $photo6 = $('<div id="photo6"></div>');
var $arrows = $('div id="arrows"></div>');
var $lftArrow = $('div id="lft_arrow"></div>');
var $rtArrow = $('div id="rt_arrow"></div>');
var $scrollButtons = $('<div id="scrollButtons"></div>');
var $button1 = $('<div id="button1"></div>');
var $button2 = $('<div id="button2"></div>');
var $button3 = $('<div id="button3"></div>');
var $button4 = $('<div id="button4"></div>');
var $button5 = $('<div id="button5"></div>');
var $button6 = $('<div id="button6"></div>');
var $article1 = $('<div id="article1"></div>');
var $story = $('<p id="story">blah blah blah</p>');

$content.append($title);
$content.append($photoBox);
$photoBox.append($photo1);
    $photo1.addClass('tabclass');
$photoBox.append($photo2);
    $photo2.addClass('tabclass');
$photoBox.append($photo3);
    $photo3.addClass('tabclass');
$photoBox.append($photo4);
    $photo4.addClass('tabclass');
$photoBox.append($photo5);
    $photo5.addClass('tabclass');
$photoBox.append($photo6);
    $photo6.addClass('tabclass');
$photoBox.append($arrows);
$arrows.append($lft_arrow);
$arrows.append($rt_arrow);

$content.append($scrollButtons);
$scrollButtons.append($button1);
$scrollButtons.append($button2);
$scrollButtons.append($button3);
$scrollButtons.append($button4);
$scrollButtons.append($button5);
$scrollButtons.append($button6);

$content.append($article1);
$article1.append($story);

$content.css({
    'width': '100%',
    'height': '900px',
    'background-image': 'url(../IMAGES/WAFB.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
    'border-bottom': '3px solid #f00'
});

$photoBox.css({
    'position': 'fixed',
    'width': '100%',
    'height': '50px',
    'left': '220px',
    'top': '225px'
});

$('.tabclass').css({
    'display': 'inline-block',
    'position': 'relative',
    'left': '-180px',
    'font-size': '24px',
    'font-weight': '900',
    'padding-top': '15px',
    'padding-bottom': '3px',
    'padding-left': '15px',
    'padding-right': '15px',
    'margin-right': '-1%',
    'border-top-left-radius': '50px',
    'border-top-right-radius': '15px'
});

$photo1.css({
    'background-color': '#f00',
    'border': '2px solid #f00'
});

$photo2.css({
    
});

$photo3.css({
    
});

$photo4.css({
    
});

$photo5.css({
    
});

$photo6.css({
    
});

$scrollButtons.css({
    'position': 'fixed',
    'width': '100%',
    'height': '250px',
    'top': '296px',
    'left': '80px'
})