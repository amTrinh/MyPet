// action section customers reviews 
$(".review-prev").click(function(){
    let now = $(".review-block");
    let prev = $(".review-block").prev();
    if(prev.length){
        now.hide();
        prev.show();
        now.removeClass("review-block");
        prev.addClass("review-block");
    }
    let iconnow = $(".iconnow");
    let iconprev = $(".iconnow").prev();
    if(iconprev.length){
        iconnow.removeClass("iconnow bgIcon");
        iconprev.addClass("iconnow bgIcon");
    }
})
$(".review-next").click(function(){
    let now = $(".review-block");
    let next = $(".review-block + div");
    if(next.length){
        now.hide();
        next.show();
        now.removeClass("review-block");
        next.addClass("review-block");
    }
    let iconnow = $(".iconnow");
    let iconnext = $(".iconnow").next();
    if(iconnext.length){
        iconnow.removeClass("iconnow bgIcon");
        iconnext.addClass("iconnow bgIcon");
    }
})

$(".icon-circle-reviews").click(function(){
    let circlenow = $(".iconnow").attr("data-id");
    let circlenext = $(this).attr("data-id");
    
    $(".reviews-contain").eq(circlenow - 1).hide();
    $(".reviews-contain").eq(circlenext - 1).show();
    $(".reviews-contain").eq(circlenow - 1).removeClass("review-block");
    $(".reviews-contain").eq(circlenext - 1).addClass("review-block");
    
    $(".iconnow").removeClass("iconnow bgIcon");
    $(this).addClass("iconnow bgIcon");
    
});

// document.addEventListener("DOMContentLoaded", () =>{
//     for(let i = 0; i < $(".item-menu").length; i++){
//         $(".item-menu").removeClass("main-menu-action");
//     }
//     $(".item-home").addClass("main-menu-action");
// });



//sroll thanh menu products
// window.onscroll = function(){
//     scrollMenuFunction();
// ;}

// function scrollMenuFunction(){
//     if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
//         document.getElementById("menu-products").style.position = "fixed";
//     }
//     else{
//         document.getElementById("menu-products").style.position = "relative";
//     }
// }