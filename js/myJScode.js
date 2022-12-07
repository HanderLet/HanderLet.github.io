$(document).ready(function(){
    $(".area").css("display", "none");
});

$('a[href^="#"]').click(function(){
   let varHref = $(this).attr("href");
    $('html,body').animation({scrollTop: $(valHref).offset().top - 50 + 'px'});
});

$(document).ready(function() {
  $('.cube, .top').fadeOut();
    $("select").on("change", function(){
        let summ = parseInt($("#style option:selected").val()) + parseInt($("#design option:selected").val()) + parseInt($("#adaptive option:selected").val());
        let days = parseInt($("#style option:selected").attr("days")) + parseInt($("#design option:selected").attr("days")) + parseInt($("#adaptive option:selected").attr("days"));
        
        $(".days .zero").text(days);
        $(".price .zero").text(summ);
    });
});

$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $('.section').each((i, el) => {
        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
            $('nav a').each((i, el) => {
                if ($(el).hasClass('active')) {
                    $(el).removeClass('active');
                }
            });
        $('nav li:eq(' + i + ')').find('a').addClass('active');
        }
    });
});

$('.image-link').magnificPopup({
    type: 'image'
});

