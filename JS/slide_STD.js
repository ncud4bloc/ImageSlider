var slideLeft;
var animateLeft;
var timeout;

var moveRt =function(){
    slideLeft = '100%';
    animateLeft = '-100%';
    setButtonCol();
    if($('.active').attr('id') == 'xf5'){
        imgSet('#xb29','#xf5','#button2');
    } else if ($('.active').attr('id') == 'xb29'){
        imgSet('#xcobra','#xb29','#button3');
    } else if ($('.active').attr('id') == 'xcobra'){
        imgSet('#xf18','#xcobra','#button4');
    } else if ($('.active').attr('id') == 'xf18'){
        imgSet('#xv22','#xf18','#button5');
    } else {
        imgSet('#xf5','#xv22','#button1');
    }
};

var moveLft =function(){
    slideLeft = '-100%';
    animateLeft = '100%';
    setButtonCol();
    if($('.active').attr('id') == 'xf5'){
        imgSet('#xv22','#xf5','#button5');
    } else if ($('.active').attr('id') == 'xv22'){
        imgSet('#xf18','#xv22','#button4');
    } else if ($('.active').attr('id') == 'xf18'){
        imgSet('#xcobra','#xf18','#button3');
    } else if ($('.active').attr('id') == 'xcobra'){
        imgSet('#xb29','#xcobra','#button2');
    } else {
        imgSet('#xf5','#xb29','#button1');
    }
};

var imgSet = function(newView,oldView,buttonOn){
    $(newView).css({left: slideLeft, display: 'block'});
        $('#photoBox').animate({left: animateLeft},700, function() {
            $(oldView).css({display: 'none'});
            $(newView).css({left: 0});
            $('#photoBox').css({left: 0});
            $(oldView).removeClass('active').addClass('inActive');
            $(newView).removeClass('inActive').addClass('active');
        });
        $(buttonOn).css({
            'background-color': '#7b7b81'    
        });
};

var setButtonCol =function(){
    $('.button').css({
            'background-color': '#fff'
        });
};

function scrollEm(){
    clearTimeout(timeout);
    timeout = setInterval(moveRt,5000);
};

/* -----  Function Calls  ----- */



$(function(){
    
    scrollEm();
   
    $('#rtArrow').on('click',function(){
        moveRt();
        scrollEm();
    });
    
    $('#lftArrow').on('click',function(){
        moveLft();
        scrollEm();
    });
    
    $('#button1').on('click',function(){
        setButtonCol();
        slideLeft = '100%';
        animateLeft = '-100%';
        imgSet('#xf5','.active','#button1');
        scrollEm();
    });
    
    $('#button2').on('click',function(){
        setButtonCol();
        slideLeft = '100%';
        animateLeft = '-100%';
        imgSet('#xb29','.active','#button2');
        scrollEm();
    });
    
    $('#button3').on('click',function(){
        setButtonCol();
        slideLeft = '100%';
        animateLeft = '-100%';
        imgSet('#xcobra','.active','#button3');
        scrollEm();
    });
    
    $('#button4').on('click',function(){
        setButtonCol();
        slideLeft = '100%';
        animateLeft = '-100%';
        imgSet('#xf18','.active','#button4');
        scrollEm();
    });
    
    $('#button5').on('click',function(){
        setButtonCol();
        slideLeft = '100%';
        animateLeft = '-100%';
        imgSet('#xv22','.active','#button5');
        scrollEm();
    });
    
});