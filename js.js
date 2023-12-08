$(document).ready(function(){
    $('.slide').hide();
    $('.slide').eq(0).show();

    var i = 0;
    var numSlide = $('.slide').length;
    
    var Slide = function(){
        $('.slide').eq(i).hide();

        i++;

        if(i == numSlide){
            i=0;
        }
        $('.slide').eq(i).show();
    };
    //next slide

    $('.box_next').click(function(){
        Slide();
    })

    //  back Slide

    $('.box_back').click(function(){
        $('.slide').eq(i).hide();

        i--;

        if(i == -1){
            // index slide
            i = numSlide - 1;
        }

        $('.slide').eq(i).show();
    })

    // autoslide

    var autoSlide = setInterval(function(){ Slide() },1000);
    $('.box_slide').mouseover(function(){
        clearInterval(autoSlide);
    })
    
    $('.box_slide').mouseleave(function(){
        autoSlide = setInterval(function(){ Slide() }, 1000);
    })

    const mood_light = document.querySelector('.mood_light');
    const day = document.querySelector('.day');
    const mybody = document.querySelector('.mybody');
    const h_3= document.querySelector('.h_3');
    mood_light.addEventListener('click',()=>{
    day.classList.toggle('add_day');
    mybody.classList.toggle('add_mybody');
    h_3.classList.toggle('add_h_3');
})

    // card1

    $('.btn-primary').click(function(){
        $('.show').show();
        
    })
    
    var img = $(this).parents('.card').children('.box-img').find('img').attr('src');

    $('.show').children('.box-img').find('img').attr('src');

    $('.show').click(function(){
        $(this).hide();
    })

    // sign up
    $('.sign').click(function(){
        $('.sign-up').show();
        
    })

    $('#icon').click(function(){
        $('.sign-up').hide();
    })


    // nav-icon
    $('.nav-icon').click(function(){
        $('.nav-remove').show();
        $('.nav-icon').hide();
    })

    $('.nav-remove').click(function(){
        $('.res-navbar').hide();
        $('.nav-remove').hide();
        $('.nav-icon').show();
    })


    // bar
    $('.nav-icon').click(function(){
        $('.res-navbar').show();
        
    })
})