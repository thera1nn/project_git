// $(function(){
//     $(".nav, .header_logo, .intro_btn").show(1000);
// });
$(function(){
    // $(".intro_inner").slideToggle(1000);
    $(".reviews_inner").owlCarousel({
        items: 1,
        dots: true,     
        // autoplay: true,
        loop: true,
        smartSpeed: 1200,
        margin: 0,
        responsive: {
            320: {
                items: 1,
            },
            480: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        let $this = $(this),
        blockId = $this.data("collapse");

        $(blockId).slideToggle();
    });

    let arr = $(".clients_item").innerHeight;
    arr.bind("scroll", function(e){

        if(!".clients_item"){
            $(this).slideUp("slow");
        } else{
            $(".clients_item").slideDown("slow");
        }
        e.preventDefault();
    });

    $(".stat_count").each(function(){
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            step: function(e){
                $(this).text(Math.ceil(e));
            }
        });
    });

});
$(function(){
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        if(scrollOffset >= introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function(e){
        e.preventDefault();
        let $this = $(this),
            elemId = $this.data("scroll"),
            elemOffset = $(elemId).offset().top;
        
            $("#nav a").removeClass("active");
            $this.addClass("active");

        $("html, body").animate({
            scrollTop: elemOffset
        }, 800);

    });

   $("#nav_toggle").on("click", function(){
        
        $(this).toggleClass("active");    
        $("#nav").toggleClass("active");
   });
    
});