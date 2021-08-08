$(document).ready(function(){

    $('#menu').on('click', function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')
    })

    $(window).on('load scroll', function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle')

        if($(window).scrollTop() > 0){
            $('.scroll-top').show();
        }
        else{
            $('.scroll-top').hide();
        }

        // scroll color change 
        $('section').each(function(){
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 500;
            let id = $(this).attr('id');
            let height = $(this).height();    
            
            if(top > offset && top < offset + height){
              
                if(id == 'eligibility'){
                    $('.scroll-top .fas').css('color', 'white');
                }
                else if(id == 'slider' || id == 'guidelines' || id == 'footer'){
                    $('.scroll-top .fas').css('color', 'var(--dark-blue)');
                }


            }
        });

        // animation 
        $('section').each(function(){
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 300;
            let id = $(this).attr('id');
            let height = $(this).height();    
            
            if(top > offset && top < offset + height){
              
                // guidelines
                if(id == 'guidelines'){
                    $('.guidelines .box-container .box.reveal').addClass('show');
                    $('.guidelines .box-container .box.reveal1').addClass('show');

                }else if(id != 'guidelines'){
                    $('.guidelines .box-container .box.reveal').removeClass('show');
                    $('.guidelines .box-container .box.reveal1').removeClass('show');
                }

                // eligible
                if(id == 'eligibility'){
                    $('.eligibility .box-container.reveal').addClass('show');

                }else if(id != 'eligibility'){
                    $('.eligibility .box-container.reveal').removeClass('show');
                }
                
            }
        });
    })

    // smooth scrolling 
    $('a[href *= "#"]').on('click', function(){
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        )
    });
})