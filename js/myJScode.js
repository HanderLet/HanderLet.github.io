$(document).ready(function(){
    $(".area").css("display", "none");
});


$(document).ready(function(){
            let options = {
            threshold: [0.5]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation');

        elements.each((i, el) => {
            observer.observe(el);
        });


        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
        }
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

    
let optionsStat = {
        threshold: [0.5]
    };
    let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
    let elementsStat = $('.runNumbers');

    elementsStat.each((i, el) => {
        observerStat.observe(el);
    });

function onEntryStat(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            $(".runNumbers").each(function(){
            $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },{
            duration:4000,
            easing:'swing',
            step:function(now){
            $(this).text(Math.ceil(now));
       }
            });
        });
      }
   });
}

setTimeout(function () {
    const modalWindow = new bootstrap.Modal('#exampleModalToggle', {
        keyboard: false
    });
        modalToggle = document.getElementById('exampleModalToggle'); 
        modalWindow.show(modalToggle);
    }, 10000);
