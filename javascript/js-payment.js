import {footer} from './footer.js';
footerContain.innerHTML = footer;

class Storage {
    static saveProducts(products){
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(){
        let products = JSON.parse(localStorage.getItem("products"));
            return products;
    }
    static getID(){
        let carts = JSON.parse(localStorage.getItem("cart"));
        return carts;
    }
    static getProSel(){
        let selected = JSON.parse(localStorage.getItem("selected"));
        return selected;
    }
}
var productSel = Storage.getProSel();
console.log(productSel);

let productsItems = Storage.getProduct();
function displayProSel(){
    let result = ' ';
    let count = 0;
    productSel.forEach(Element => {
        var e = Element -1;

            result += `
            <div data-id = "${productsItems[e].price}" class="productPayment">
                <div class="titelProduct">
                    <p>
                        <img src="${productsItems[e].image}" alt="product" title = "${productsItems[e].title}">
                        ${productsItems[e].title}
                    </p>
                </div>
                <div class="InfoPayment">
                    <p>$${productsItems[e].price}</p>
                    <p>1</p>
                    <p>$${productsItems[e].price}</p>
                </div>
            </div>
            `
            count++;
        $("#productDetails").html(result);
    });
}

var valueDiscount = 30
var finalvalue = 0;
var provisional = 0;

function SumPrice(){
    for(let i = 0; i < $(".productPayment").length; i++){
        console.log($(".productPayment").eq(i).attr("data-id"));
        provisional += parseFloat($(".productPayment").eq(i).attr("data-id"));
        // console.log(provisional);
    }
    provisional = Math.round(provisional * 100) / 100;
    $("#privisional").html('$' + provisional);
    finalvalue = provisional - valueDiscount;
    finalvalue = Math.round(finalvalue * 100) / 100;
    $("#final").html("$" + finalvalue);
}



var testCheck = 0;
const radioBtn = document.querySelectorAll(".radioBtn");
radioBtn.forEach(e => {
    e.addEventListener("click", function(){
        e.Checked = "true";
    })
});
function testChecked(){
    testCheck = 0;
    radioBtn.forEach(e => {
        if(e.Checked == "true"){
            testCheck = 1;
        }
    });
}

$(".ordered").click(function(){
    testChecked();
    if(testCheck == 1){
        $(".successOrdered").show();
    }else{
        $(".selectRadioBtn").show();
    }
})

$(".unchecked").click(function(){
    // console.log($(".unchecked"));
    $(".vouchercontent").removeClass("bordercolor");
    console.log($(".vouchercontent"));
    $(this).parents().eq(2).toggleClass("bordercolor");
    console.log($(this).parents().eq(2));
    if($(".bordercolor").length != 0){
        $(".successVoucher").show();

        $(".unchecked").html("Check");
        $(this).html("Uncheck");
        $(".btnchecked").html("Uncheck");
        valueDiscount = 30;
    }else{
        $(this).html("Check");
        $(".btnchecked").html("Check");
        valueDiscount = 0;
    }
    $("#discount").html("$" + valueDiscount);
    setTimeout(function(){
        $(".successVoucher").hide();
    }, 1000);
    finalvalue = provisional - valueDiscount;
    finalvalue = Math.round(finalvalue * 100) / 100;
    $("#final").html("$" + finalvalue);
});
$(".fa-times").click(function(){
    $(".voucher").hide()
});
$("#selectVoucher").click(function(){
    $(".voucher").show();
});
$(".close").click(function(){
    $(".selectRadioBtn").hide();
});

document.addEventListener("DOMContentLoaded", () =>{
    displayProSel();
    SumPrice();

    $(".successVoucher").hide();
    $(".voucher").hide();
    $(".selectRadioBtn").hide();
    $(".successOrdered").hide();
});