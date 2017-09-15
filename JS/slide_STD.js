var moveRt =function(){
    setButtonCol();
    if($('.active').attr('id') == 'xf5'){
        $('#xf5').slideUp(1200);
        $('#xb29').slideDown(1200);
        $('#xf5').removeClass('active').addClass('inActive');
        $('#xb29').removeClass('inActive').addClass('active');
        $('#button2').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.active').attr('id') == 'xb29'){
        $('#xb29').slideUp(1200);
        $('#xcobra').slideDown(1200);
        $('#xb29').removeClass('active').addClass('inActive');
        $('#xcobra').removeClass('inActive').addClass('active');
        $('#button3').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.active').attr('id') == 'xcobra'){
        $('#xcobra').slideUp(1200);
        $('#xf18').slideDown(1200); 
        $('#xcobra').removeClass('active').addClass('inActive');
        $('#xf18').removeClass('inActive').addClass('active');
        $('#button4').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.active').attr('id') == 'xf18'){
        $('#xf18').slideUp(1200);
        $('#xv22').slideDown(1200); 
        $('#xf18').removeClass('active').addClass('inActive');
        $('#xv22').removeClass('inActive').addClass('active');
        $('#button5').css({
            'background-color': '#7b7b81'
        });
    } else {
        $('#xv22').slideUp(1200);
        $('#xf5').slideDown(1200); 
        $('#xv22').removeClass('active').addClass('inActive');
        $('#xf5').removeClass('inActive').addClass('active');
        $('#button1').css({
            'background-color': '#7b7b81'
        });
    }
};

var moveLft =function(){
    setButtonCol();
    if($('.active').attr('id') == 'xf5'){
        $('#xf5').slideUp(1200);
        $('#xv22').slideDown(1200);
        $('#xf5').removeClass('active').addClass('inActive');
        $('#xv22').removeClass('inActive').addClass('active');
        $('#button5').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.active').attr('id') == 'xv22'){
        $('#xv22').slideUp(1200);
        $('#xf18').slideDown(1200);
        $('#xv22').removeClass('active').addClass('inActive');
        $('#xf18').removeClass('inActive').addClass('active');
        $('#button4').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.active').attr('id') == 'xf18'){
        $('#xf18').slideUp(1200);
        $('#xcobra').slideDown(1200); 
        $('#xf18').removeClass('active').addClass('inActive');
        $('#xcobra').removeClass('inActive').addClass('active');
        $('#button3').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.active').attr('id') == 'xcobra'){
        $('#xcobra').slideUp(1200);
        $('#xb29').slideDown(1200); 
        $('#xcobra').removeClass('active').addClass('inActive');
        $('#xb29').removeClass('inActive').addClass('active');
        $('#button2').css({
            'background-color': '#7b7b81'
        });
    } else {
        $('#xb29').slideUp(1200);
        $('#xf5').slideDown(1200); 
        $('#xb29').removeClass('active').addClass('inActive');
        $('#xf5').removeClass('inActive').addClass('active');
        $('#button1').css({
            'background-color': '#7b7b81'
        });
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

/* -----  Function Calls  ----- */



$(function(){
    
    scrollEm();
   
    $('#rtArrow').on('click',function(){
        moveRt();
    });
    
    $('#lftArrow').on('click',function(){
        moveLft();
    });
    
    $('#button1').on('click',function(){
        setButtonCol();
        $('.active').slideUp(1200);
        $('#xf5').slideDown(1200); 
        $('.active').removeClass('active').addClass('inActive');
        $('#xf5').removeClass('inActive').addClass('active');
        $('#button1').css({
            'background-color': '#7b7b81'
        });
    });
    
    $('#button2').on('click',function(){
        setButtonCol();
        $('.active').slideUp(1200);
        $('#xb29').slideDown(1200); 
        $('.active').removeClass('active').addClass('inActive');
        $('#xb29').removeClass('inActive').addClass('active');
        $('#button2').css({
            'background-color': '#7b7b81'
        });
    });
    
    $('#button3').on('click',function(){
        setButtonCol();
        $('.active').slideUp(1200);
        $('#xcobra').slideDown(1200); 
        $('.active').removeClass('active').addClass('inActive');
        $('#xcobra').removeClass('inActive').addClass('active');
        $('#button3').css({
            'background-color': '#7b7b81'
        });
    });
    
    $('#button4').on('click',function(){
        setButtonCol();
        $('.active').slideUp(1200);
        $('#xf18').slideDown(1200); 
        $('.active').removeClass('active').addClass('inActive');
        $('#xf18').removeClass('inActive').addClass('active');
        $('#button4').css({
            'background-color': '#7b7b81'
        });
    });
    
    $('#button5').on('click',function(){
        setButtonCol();
        $('.active').slideUp(1200);
        $('#xv22').slideDown(1200); 
        $('.active').removeClass('active').addClass('inActive');
        $('#xv22').removeClass('inActive').addClass('active');
        $('#button5').css({
            'background-color': '#7b7b81'
        });
    });
    
});