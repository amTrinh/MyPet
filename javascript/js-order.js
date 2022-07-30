class Storage {
    static saveProducts(products){
        localStorage.setItem("products", JSON.stringify("products"));
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
// console.log(productSel);

let cartItem = Storage.getProduct();
var provisional = 0;
function displayOrder(){
    let result = ' ';
    let count = 0;
    productSel.forEach(Element => {
        var e = Element -1;
        var test = 0;
            result += `
                        <div class="productPayment detal_products_info border" data-id ="${cartItem[e].price}" >
                            <div>
                                <p>
                                    <img src="${cartItem[e].image}" alt="${cartItem[e].title}" titel = "${cartItem[e].price}">
                                    ${cartItem[e].title}
                                </p>
                            </div>
                            <ul>
                                <li>${cartItem[e].price}</li>
                                <li>1</li>
                                <li>$30</li>
                                <li>${cartItem[e].price}</li>
                            </ul>
                        </div>
                        
            `

            count++;
        $("#productsList").html(result);
    });

}

var valueDiscount = 30;
var finalvalue = 0; 
function SumPrice(){
    for(let i = 0; i < $(".productPayment").length; i++){
        // console.log($(".productPayment").eq(i).attr("data-id"));
        provisional += parseFloat($(".productPayment").eq(i).attr("data-id"));
        console.log(provisional);
    }
    provisional = Math.round(provisional * 100) / 100;
    $("#provi").html('$' + provisional);
    finalvalue = provisional - valueDiscount;
    finalvalue = Math.round(finalvalue * 100) / 100;
    $("#priceTotal").html("$" + finalvalue);
}
document.addEventListener("DOMContentLoaded", () =>{
    displayOrder();
    SumPrice();
});