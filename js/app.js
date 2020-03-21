$(function(){
    //ヘッダーのフロート
    var targetHeight = $('.js-float-menu-target').height();

    $(window).on('scroll',function(){
        $('.js-float-menu').toggleClass('float-active',$(this).scrollTop() > targetHeight);
    });
    //テキストと画像のフェードイン
    $(window).scroll(function(){
        var fadeTrigger = $('.js-trigger');
        $(fadeTrigger).each(function(){
            var scroll = $(window).scrollTop(),
            elemTop = $(this).offset().top,
            windowHeight = $(window).height();

            if(scroll > elemTop - windowHeight + 200){
                $(this).addClass('js-fade__text');
                $(this).addClass('js-fade__img');
            }
        });
    });
    //ABOUT
    $(window).scroll(function(){
        var fadeTrigger = $('.js-about-trigger');
        $(fadeTrigger).each(function(){
            var scroll = $(window).scrollTop(),
            elemTop = $(this).offset().top,
            windowHeight = $(window).height();

            if(scroll > elemTop - windowHeight + 200){
                $(this).addClass('js-aboutFade__bg');
            }
        });
    });
    //RECRUIT
    $(window).scroll(function(){
        var fadeTrigger = $('.js-recruit-trigger');
        $(fadeTrigger).each(function(){
            var scroll = $(window).scrollTop(),
            elemTop = $(this).offset().top,
            windowHeight = $(window).height();

            if(scroll > elemTop - windowHeight + 200){
                $(this).addClass('js-recruitFade');
            }
        });
    });

    //SPメニュー
    $('.js-toggle-sp-menu').on('click',function() {
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active')
    })
    
    $(window).trigger('scroll');
})