

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
}
//mảng cả sp bị xóa ra khỏi cart
var del = [];
var productSelected = [];
// xóa all 
let cartid = Storage.getID();
document.querySelector(".deleteAll").addEventListener("click", function(){
    for(let i = 0; i < cartid.length; i++){
        removeArr = cartid.splice(i, cartid.length);
        localStorage.setItem("cart", JSON.stringify(cartid));
        displayProduct();
    }
});
let cartItem = Storage.getProduct();

let valueDiscount = 0;

const cartBody = document.querySelector(".cart-body");
const btnCart = document.querySelector(".cart-items");
function displayProduct(){
    let result = ' ';
    let count = 0;
    cartid.forEach(Element => {
        e = Element -1;
        test = 0;
        for(let x = 0; x < del.length; x++){
            if(cartItem[e].id === del[x]){
                test = 1;
            }
        }
        if(test == 0){
            result += `
                        <div class="cart-container">
                            <div data-id="${cartItem[e].id}">
                                <input class="check" type="checkbox" name = "products" value="${cartItem[e].price}">
                                <a href="detail-product.html">
                                    <img class="image-product-cart" src="${cartItem[e].image}" 
                                         alt="${cartItem[e].title}" title = "${cartItem[e].title}">
                                    ${cartItem[e].title}
                                </a>
                            </div>
                            <ul>
                                <li data-id="${cartItem[e].price}"><span id="price">$${cartItem[e].price}</span></li>
                                <li class="btn-select-amount">
                                    <button class="btn-minus-product">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <input id="amount" type="text" value="1">
                                    <button class="btn-plus-product">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </li>
                                <li class="total">$${cartItem[e].price}</li>
                                <li data-id="${cartItem[e].id}">
                                    <button class="delete-product" title="Xóa sản phẩm">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
            `
            count++;
        }
    });
    if(result === ' '){
        $(".cart-body").hide();
    }
    else{
        $(".cart-body").show();
    }
    //check all product 
    cartBody.innerHTML = result;
    btnCart.innerHTML = count;
    const checkall = document.getElementById("checkall");
    const check = document.querySelectorAll(".check");
    checkall.addEventListener("click", function(){
        if(checkall.checked == true){
            check.forEach(c =>{
                c.checked = true;
            })
            productSelected = cartid;
        }else{
            check.forEach(c => {
                c.checked = false;
            })
            productSelected = [];
        }
        console.log(productSelected);
        localStorage.setItem("selected", JSON.stringify(productSelected));
    });

    //check  a product
    for(let i = 0 ; i < $(".check").length; i++){
        $(".check").eq(i).click(function(){
            productSelected = [];
            for(let j = 0 ; j < $(".check").length; j++){
                if($(".check").eq(j).prop("checked") == true){
                    pushpro = productSelected.push($(".check").eq(j).parent().attr("data-id"));
                    console.log(1);
                }
            }
            localStorage.setItem("selected", JSON.stringify(productSelected));
            console.log(productSelected);
        });
    }
    $(".btn-plus-product").click(function(){
        var divParent = $(this).parent();
        var divParentPrev = divParent.prev().attr("data-id");
        var divParentNext = divParent.next();
        var item = $(this).prev().val();
    
        item = Number(item) + 1;
        total1 = item*divParentPrev;
        total = Math.round(total1 * 100) / 100
        divParentNext.text("$" +total);
        $(this).prev().val(item);
    });
    $(".btn-minus-product").click(function(){
        //lấy cái li chứa btn tăng giảm sl sp
        var divParent = $(this).parent();
        // lấy giá trị của sp
        var divParentPrev = divParent.prev().attr("data-id");
        //lấy div li chứa thành tiền của sp
        var divParentNext = divParent.next();
        // lấy số lượng SP: giá trị của input
        var item = $(this).next().val();
        if( Number(item) > 1){
            item = Number(item) - 1;
            total1 = item*divParentPrev;
            total = Math.round(total1 * 100) / 100;

            divParentNext.text("$" + total);
            $(this).next().val(item);
        }
    });
    function setvalue(){
        $("#discount").html("$" +valueDiscount);
            valuefinal = $("#total").text().substring(1);
            valuefinal -= valueDiscount;
            if(valuefinal >= 0){
            $("#value-final").html("$" + valuefinal);
        }
    }
    document.addEventListener("click", () =>{
        let lastSum = 0;
        check.forEach(c => {
            if(c.checked == true){
                var SL = c.value;
                // lấy div cha của input checkbox
                var parentcheck = c.parentElement;
                // lấy ul chứa giá trị input số lượng sp
                var ulvalue = parentcheck.nextElementSibling;
                // lấy li ul chứ input
                var btninput = ulvalue.firstElementChild.nextElementSibling;
                // lấy giá trị input
                var valueinput = btninput.firstElementChild.nextElementSibling.value;

                lastSum += SL*valueinput;
                lastSum = Math.round(lastSum * 100) / 100;
                valuefinal = lastSum;
            }
        });
        document.getElementById("total").innerHTML = "$" + lastSum ;
            $(".delete-product").click(function(){
                delID = $(this).parent().attr("data-id");
                console.log(delID);
                var item = cartid.length;
                for(let i = 0; i < cartid.length; i++){
                    if(cartid[i] == delID){
                        item = i;
                    }
                }
                removeArr = cartid.splice(item, 1);
                localStorage.setItem("cart", JSON.stringify(cartid));
                displayProduct();
                setvalue();
                checkall.checked = false;
    
            });
        setvalue();
    });
    // js voucher
    $(".unchecked").click(function(){
        $(".vouchercontent").removeClass("bordercolor");
        $(this).parents().eq(2).toggleClass("bordercolor");

        if($(".bordercolor").length != 0){
            $(".successVoucher").show();
            valueDiscount = 30;

            $(".unchecked").html("Check");
            $(this).html("Uncheck");
        }else{
            valueDiscount = 0;

            $(this).html("Check");    
        }
        setTimeout(function(){
            $(".successVoucher").hide();
        }, 1000);
        setvalue();
    });
    $(".voucherbtn").click(function(){
        $(".btnmini").show();
    });

    // js purchases
    $("#purchases").click(function(){
        test = 0;
        check.forEach(icheck => {
            if(icheck.checked == true){
                test = 1;
            }
        });
        if(test == 0){
            $(".nullProduct").show();
            setTimeout(function(){
                $(".nullProduct").hide();
            }, 1000);
        }
        else{
            location.assign("payment.html");
        }

    });
}

$(".fa-times").click(function(){
    $(".voucher").hide()
});
$("#selectVoucher").click(function(){
    $(".voucher").show();
});

document.addEventListener("DOMContentLoaded", () =>{
    displayProduct();
    productSelected = [];
    localStorage.setItem("selected", JSON.stringify(productSelected));

    $(".voucher").hide();
    $(".btnmini").hide();
    $(".successVoucher").hide();
    $(".nullProduct").hide()
});

