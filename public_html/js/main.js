$(document).ready(function() {

    $('.footerSlider').iosSlider({
        scrollbar: true,
        snapToChildren: true,
        desktopClickDrag: false,
        scrollbarLocation: 'top',
        scrollbarMargin: '10px 10px 0 10px',
        scrollbarBorderRadius: '0',
        responsiveSlideWidth: true,
        infiniteSlider: true,
        startAtSlide: '2',
        navPrevSelector: $('.prevButtonF'),
        navNextSelector: $('.nextButtonF')
    });

    $('.doubleSlider-1').iosSlider({
        scrollbar: true,
        desktopClickDrag: true,
        infiniteSlider: true,
        navPrevSelector: $('.doubleSliderPrevButton'),
        navNextSelector: $('.doubleSliderNextButton'),
        scrollbarHeight: '2',
        scrollbarBorderRadius: '0',
        scrollbarOpacity: '0.5',
        onSliderLoaded: doubleSlider2Load,
        onSlideChange: doubleSlider2Load
    });
    $('.doubleSlider-2 .button').each(function(i) {

        $(this).bind('click', function() {

            $('.doubleSlider-1').iosSlider('goToSlide', i + 1);

        });

    });

    $('.doubleSlider-2').iosSlider({
        desktopClickDrag: true,
        snapToChildren: true,
        snapSlideCenter: true,
        infiniteSlider: true
    });

    function doubleSlider2Load(args) {

        //currentSlide = args.currentSlideNumber;
        $('.doubleSlider-2').iosSlider('goToSlide', args.currentSlideNumber);

        /* update indicator */
        $('.doubleSlider-2 .button').removeClass('selected');
        $('.doubleSlider-2 .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

    }
    $(".btn-open").click(function() {
        var mybtn = $(this);
        var par = mybtn.parents(".query-ask").children(".collapse");
        par.collapse("show");
        mybtn.empty();
        mybtn.append("Свернуть ответ");
        mybtn.addClass("close-a");
        par.on('shown.bs.collapse', function() {
            mybtn.click(function() {
                par.collapse('hide');
            });
        });
        par.on('hidden.bs.collapse', function() {
            mybtn.empty();
            mybtn.append("Читать ответ");
            mybtn.removeClass("close-a");
        });
    });

});
$(document).ready(function() {
    
    $(".left-btn").click(function() {
        var thisParent = $(this).parents(".quant-change");
        var curVal = $(thisParent).children("input").val();
        curVal = parseInt(curVal);
        if(curVal > 1){
            curVal--;
            $(thisParent).children("input").val(curVal);
        }else{
            $(thisParent).children("input").val("1");
        }
    });
    $(".right-btn").click(function() {
        var thisParent = $(this).parents(".quant-change");
        var curVal = $(thisParent).children("input").val();
        curVal = parseInt(curVal);
        curVal++;
        $(thisParent).children("input").val(curVal);
    });
    $(".button-payment.pay button").click(function() {
        $(".button-payment.pay button").removeClass("selected-btn");
        $(this).toggleClass("selected-btn");        
    });
    $(".button-payment.sheeping button").click(function() {
        $(".button-payment.sheeping button").removeClass("selected-btn");
        $(this).toggleClass("selected-btn");        
    });
    $(".product-tab a").click(function(){
        var p = $(this).parents(".product-tab li");
        $(p).toggleClass("upper");
    });
});
$(".leftMenuCollapse").click(function() {
    var mybtn = $(this);
    var par = mybtn.parents("li").children(".collapse");
    mybtn.parents("li").toggleClass("open-collaps");
    par.collapse("show");
    par.on('shown.bs.collapse', function() {
        mybtn.click(function() {
            par.collapse('hide');
        });
    });
    par.on("hidden.bs.collapse", function() {

    });
});