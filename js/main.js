$(document).ready(function(){


    // прикрепление шапки

    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 30){
          $("body").addClass("sticky-header");
        }else{
          $("body").removeClass("sticky-header");
        }//if-else
      });//win func.

    // конец прикреплния шапки

    // плавность якорей

        $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
            e.preventDefault();
            var t = 1500;
            var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
            $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
        });
     
    // конец плавности якорей

    // меню

    $('.burger').click(function(event){
        $('.burger,.header__menu').toggleClass('active');
    })

    // конец меню

    // обработка добавления продукта
    
    let cart = 0,
        cartBtn = $("#cart-btn"),
        start = $("#start"),
        cartGreenBall = $('.cart__green-ball'),
        product = $('.card-btn'),
        products = $('#products');


    cartBtn.parent().find('.cart__products').hide();

    cartBtn.on('click', function() {
        $(this).parent().find('.cart__products').slideToggle(100);
    })

    if(cart<=0) {
        start.css({"display":"block"});
    }

    product.click(function() {
        cart++;
        cartGreenBall.css({"opacity":"1"});
        start.css({"display":"none"});
        start.after(`
            <div id="product-template" class="cart__product">
                <div class="cart__product-left-side">
                    <input type="checkbox" checked="checked" id="checkbox${cart}" class="cart__product-checkbox">
                    <label for="checkbox${cart}"></label>
                    <div class="cart__product-text">
                    <p class="cart__product-title">Hosting Linux Starter</p>
                    <p class="cart__product-description">con cPanel</p>
                    </div>
                </div>
                <p class="cart__product-cost"> <span class="cart__product-cost-span">€ 29,99</span>/in month </p>
                <button class="cart__product-remove"></button>
            </div>
        `);
        if(cart<=0) {
            start.css({"display":"block"});
            $('.cart__products-bottom').css({"display":"none"});
            cartGreenBall.css({"opacity":"0"});
        }
        else if(cart>0) {
            start.css({"display":"none"});
            $('.cart__products-bottom').css({"display":"flex"});
        }
    });

    $("body").on("click", ".cart__product-remove", function() {
        $(this).parent().remove();
        cart--;
        if(cart<=0) {
            start.css({"display":"block"});
            $('.cart__products-bottom').css({"display":"none"});
            cartGreenBall.css({"opacity":"0"});
        }
        else if(cart>0) {
            start.css({"display":"none"});
            $('.cart__products-bottom').css({"display":"flex"});
        }       
    });


    // конец обработки добваления продукта
  
    // начало feedback дроплист

    $(".feedback__blocks .hide").hide();

    $(".feedback__block button").on( 'click', function() {
        $(this).parent().find("img").toggleClass("rotate");
        $(this).parent().find('.hide').slideToggle(300);
    });

    // конец feedback дроплист

});