jQuery(document).ready(function () {



    jQuery('.line-block-buttons .tab-b-1').on('click', function () {
        jQuery('.line-block-buttons button').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.line-tab-1').addClass('active');
        jQuery('.line-tab-2').removeClass('active');
    });

    jQuery('.line-block-buttons .tab-b-2').on('click', function () {
        jQuery('.line-block-buttons button').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.line-tab-2').addClass('active');
        jQuery('.line-tab-1').removeClass('active');
    });

    if ($(window).width() <= 767) {
        jQuery('.open-info').on('click', function () {
            jQuery(this).parents('.block-order').find('.order-items').show();
        });

        jQuery('.back-mob').on('click', function () {
            jQuery(this).parents('.block-order').find('.order-items').hide();
        });
    }

    jQuery(function () {
        var j = jQuery; //Just a variable for using jQuery without conflicts

        j('.change-label .label').on('click', function () {
            j(this).toggleClass('active');
            j('.change-label input').toggle();


        });

        j('.button-line button').on('click', function () {
            j('.button-line button').removeClass('active');
            j(this).addClass('active');

            j('.cart-sidebar form').toggle();
        });


        var n = 1; //n is equal to 1

        //Set default value to n (n = 1)
        j('.input_range input').val(n + 'шт.');

        //On click add 1 to n
        j('.plus').on('click', function () {
            var gg = j(this).parent('.input_range').find('input').val().replace('шт.', '');
            j(this).parent('.input_range').find('input').val(++gg + 'шт.');
        })

        j('.min').on('click', function () {
            var gg = j(this).parent('.input_range').find('input').val().replace('шт.', '');
            if (gg >= 1) {
                j(this).parent('.input_range').find('input').val(--gg + 'шт.');
            } else {
                //Otherwise do nothing
            }
        });
    });
    $('.play_yt').click(function () {
        $(this).hide();
        $('.ytvideo').attr('src', 'https://www.youtube.com/embed/fRHA_mrMMH0?autoplay=1');
    })

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })








    $('.to-cart').click(function () {
        $(this).parent().find('.cart-product-toggle').show();

        $(this).parents('.product').find('.img img').clone().css({
            'width': '205',
            'height': '125',
            'transform': 'translateX(-100%)',
            'position': 'absolute',
            'z-index': '100'
        }).appendTo($(this).parents('.product').find('.img')).animate({
            top: $(".cart").offset()['top'],
            left: $(".cart").offset()['left'],
            opacity: 0,
            width: 40,
            height: 40
        }, 1500, function () {
            $(this).remove();


        });
    });





    $('.cat-mob').click(function () {
        $('.cart-popup').removeClass('active');
        $('.prof-popup').removeClass('active');
        $('.cat-popup').toggleClass('active');
    });
    $('.cart-mob').on('click', function () {
        $('.cart-popup').toggleClass('active');
        $('.prof-popup').removeClass('active');
        $('.cat-popup').removeClass('active');
    });

    $('.prof-mob').on('click', function () {
        $('.cart-popup').removeClass('active');
        $('.prof-popup').toggleClass('active');
        $('.cat-popup').removeClass('active');
    });


    $('.mobile-bottom-menu span').click(function () {
        $('.mobile-bottom-menu span').removeClass('active');
        $(this).addClass('active');
    });





    $('header .cart').click(function () {

        $('.cart-popup').toggleClass('active-cart');
        $('.user_down').removeClass('active');
    });

    $('header .profile').click(function () {
        $('.cart-popup').removeClass('active-cart');
        $('.user_down').toggleClass('active');
    });


    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('change-button');
    });


    $('.close-cart-popup').on('click', function () {
        $('.cart-popup').toggleClass('active');
    });

});
