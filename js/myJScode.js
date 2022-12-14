$(document).ready(function(){
    $(".area").css("display", "none");
    
    new WOW().init();
});


$('a[href^="#"]').click(function(){
   let varHref = $(this).attr("href");
    $('html,body').animation({scrollTop: $(valHref).offset().top - 50 + 'px'});
});

$(document).ready(function() {
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
                    if(!$('.runNumbers').hasClass("done")){
                        $('.runNumbers').addClass("done");
                        $('.runNumbers').spincrement({
                         thousandSeparator: "",
                         duration: 3000
                    });
                  }
                }
            });
        }


 let optionsImg = {
            threshold: [0.5]
        };
        let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
        let elementsImg = $('.preloadImg');

        elementsImg.each((i, el) => {
            observerImg.observe(el);
        });


        function onEntryImg(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.src = change.target.dataset.src;
                }
            });
        }


setTimeout(function () {
    const modalWindow = new bootstrap.Modal('#exampleModalToggle', {
        keyboard: false
    });
        modalToggle = document.getElementById('exampleModalToggle'); 
        modalWindow.show(modalToggle);
    }, 30000);



    $("#inputTel").mask("+7(999)-999-99-99");