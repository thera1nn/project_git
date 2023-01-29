$(function(){
    $(".gallery_nav li").on("click", function(){
        $(this).removeClass("active");
        $(this).addClass("active");
    });
    if($(".gallery").length > 0){
        let controls = document.querySelector(".gallery");
        let mixer = mixitup(controls);
    } 
});