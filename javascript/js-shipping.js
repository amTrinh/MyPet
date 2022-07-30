import {footer} from './footer.js';
footerContain.innerHTML = footer;


$("#showNewAddress").click(function(){
    $("#newAddress").show();

    $(".newAddress").css({"height": "300px", "border" : "2px solid gray"});
    $("#addressInfo").select();
    // lấy div chứa info address ở địa chỉ defaul
    var info = $(".selected").children().eq(0);
    $("#username").val(info.children().eq(1).text());
    $("#phone").val(info.children().eq(3).children().eq(0).text());
})
$("#deleteAdd").click(function(){
    $(".newAddress").css({"height": "0", "border" : "0"});

});
$(".shipto").click(function(){
    $(".shippingContain").removeClass("selected");
    $(".defaul").html("");
    $(this).parents().eq(1).addClass("selected");
    $(this).parents().eq(0).prev().children().eq(0).html("Defaul");
});

$(".fix").click(function(){
    $(".newAddress").css({"height": "300px", "border" : "2px solid gray"});
    $("#username").focus();
    // div cha chưa info address
    var info = $(this).parents().eq(0).prev();
    $("#username").val(info.children().eq(1).text());
    $("#phone").val(info.children().eq(3).children().eq(0).text());
    $("#addressInfo").val(info.children().eq(2).children().eq(0).text());

})