


//  start js voucher prev 
$(".icon-liveshow-prev ").click(function(){
    let now = $(".now-voucher");
    let prev = $(".now-voucher").prev();
    if(prev.length){
        now.hide();
        prev.show();
        now.removeClass("now-voucher");
        prev.addClass("now-voucher");
    }
    let iconnow = $(".icon-voucher-show");
    let iconprev = $(".icon-voucher-show").prev();
    if(iconprev.length){
        iconnow.removeClass("icon-voucher-show bgIcon");
        iconprev.addClass("icon-voucher-show bgIcon");
    }
})
//  end js voucher prev 
//  start js voucher next 
$(".icon-liveshow-next").click(function(){
    let now = $(".now-voucher");
    let next = $(".now-voucher + div");
    if(next.length){
        now.hide();
        next.show();
        now.removeClass("now-voucher");
        next.addClass("now-voucher");
    }
    let iconnow = $(".icon-voucher-show");
    let iconnext = $(".icon-voucher-show").next();
    if(iconnext.length){
        iconnow.removeClass("icon-voucher-show bgIcon");
        iconnext.addClass("icon-voucher-show bgIcon");
    }
})
//  end js voucher next 
//  start js voucher icon footer 
$(".icon-circle-voucher").click(function(){
    let circlenow = $(".icon-voucher-show").attr("data-id");
    let circlenext = $(this).attr("data-id");
    
    
    $(".liveshow-detail").eq(circlenow - 1).hide();
    $(".liveshow-detail").eq(circlenext - 1).show();
    $(".liveshow-detail").eq(circlenow - 1).removeClass("now-voucher");
    $(".liveshow-detail").eq(circlenext - 1).addClass("now-voucher");
    
    $(".icon-voucher-show").removeClass("icon-voucher-show bgIcon");
    $(this).addClass("icon-voucher-show bgIcon");
    
});
//  end js voucher icon footer 
// focus sort arr 
$('.title-sort-arr-detail').click(function(){
    $(this).toggleClass("backg-red");
    $(this).toggleClass("backg-white");
});
//mouseenter gia
$('.li-price').mouseenter(function(){
    $('.sort-price-select').show(100);
});
$('.li-price').mouseleave(function(){
    $('.sort-price-select').hide(100);
});
//mouseenter gia cao thap
$('.li-sort-price').mouseenter(function(){
    $(this).css("color","red");
});

$('.li-sort-price').mouseleave(function(){
    $(this).css("color","black");
});
//click gia
$('.price-short').click(function(){
    $(".content-price-name").text("Price: Low to High");
    $(".content-price-name").css("color", "red");
    $('.sort-price-select').hide(100);
});
$('.price-high').click(function(){
    $(".content-price-name").text("Price: High to Low");
    $(".content-price-name").css("color", "red");
    $('.sort-price-select').hide(100);
});

// click chọn danh mục sản phầm 

$(".li-detail-shopping").click(function(){
    for (let i = 0; i < $(".li-detail-shopping").length; i++ ){
        $(".li-detail-shopping").eq(i).removeClass('color-li-detail');
    }
    $(this).addClass('color-li-detail');
})

// start js product shopping
filterSelection("all")

function filterSelection(c){
    var x, i;
    x = document.getElementsByClassName("product-pet");
    if(c == "all") c = "";
    for(i = 0; i < x.length; i++){
        RemoveClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1){
            AddClass(x[i], "show");
        }
    }
}

function AddClass(element, name) {
    element.className+= " "+ name;
    console.log(element.className);
}

function RemoveClass(element, name) {
    var arr1;
    arr1 = element.className.split(" ");
    console.log(arr1);
      while (arr1.indexOf(name) > -1) {
        arr1.splice(arr1.indexOf(name), 1); 
      }
    console.log(arr1);
    element.className = arr1.join(" ");
}

document.addEventListener("DOMContentLoaded", () =>{
    for(let i = 0; i < $(".item-menu").length; i++){
        $(".item-menu").removeClass("main-menu-action");
    }
    $(".item-shopping").addClass("main-menu-action");
});
// main-menu-action
