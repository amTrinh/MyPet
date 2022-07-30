// sticky header 
$(Document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('header').addClass('sticky');
            $(".back-to-top").show();
        }else{
            $('header').removeClass('sticky');
            $(".back-to-top").hide();

        }
    })
})
// back to top 
$("#back-to-top").click(function(){
    return $("body, html").animate({scrollTop:0},400),!1
});
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
});

const arr = [
    {
        "sys": {
            "id": "1",
            "type": "dog"
        },
        "fields":{
            "title": "shiba inu",
            "price": 499.09,
            "image": {"fields": {"file":{ "url": "image/dog0.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "2",
            "type": "dog"
        },
        "fields":{
            "title": "Husky Sibir",
            "price": 200.09,
            "image": {"fields": {"file":{ "url": "image/dog1.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "3",
            "type": "medicine"
        },
        "fields":{
            "title": "cras",
            "price": 10.09,
            "image": {"fields": {"file":{ "url": "image/medi5.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "4",
            "type": "medicine"
        },
        "fields":{
            "title": "Aenean",
            "price": 19.90,
            "image": {"fields": {"file":{ "url": "image/medi6.jfif"}}}
        }
    },
    {
        "sys": {
            "id": "5",
            "type": "dog"
        },
        "fields":{
            "title": "huisdier hond",
            "price": 1009.90,
            "image": {"fields": {"file":{ "url": "image/dog6.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "6",
            "type": "cat"
        },
        "fields":{
            "title": "Maine Coon",
            "price": 1999.99,
            "image": {"fields": {"file":{"url": "image/maine-coon.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "7",
            "type": "cat"
        },
        "fields":{
            "title": "Persian",
            "price": 1999.09,
            "image": {"fields": {"file":{"url": "image/Persian.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "8",
            "type": "food"
        },
        "fields":{
            "title": "Predogen",
            "price": 19.09,
            "image": {"fields": {"file":{"url": "image/food7.webp"}}}
        }
    },
    {
        "sys": {
            "id": "9",
            "type": "toy"
        },
        "fields":{
            "title": "Pellentesque",
            "price": 19.09,
            "image": {"fields": {"file":{"url": "image/toy1.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "10",
            "type": "toy"
        },
        "fields":{
            "title": "Elementum",
            "price": 29.09,
            "image": {"fields": {"file":{"url": "image/toy0.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "11",
            "type": "cat"
        },
        "fields":{
            "title": "Ragdoll",
            "price": 1009.09,
            "image": {"fields": {"file":{"url": "image/Ragdoll.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "12",
            "type": "cat"
        },
        "fields":{
            "title": "Savannah",
            "price": 1909.09,
            "image": {"fields": {"file":{"url": "image/Savannah.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "13",
            "type": "cat"
        },
        "fields":{
            "title": "Scottish Fold",
            "price": 2009.09,
            "image": {"fields": {"file":{"url": "image/Scottish-Fold.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "14",
            "type": "cat"
        },
        "fields":{
            "title": "Cornish Rex",
            "price": 999.99,
            "image": {"fields": {"file":{"url": "image/Cornish-Rex.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "15",
            "type": "cat"
        },
        "fields":{
            "title": "Turkish Van",
            "price": 3009.09,
            "image": {"fields": {"file":{"url": "image/Turkish-Van.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "16",
            "type": "food"
        },
        "fields":{
            "title": "SmartHeart",
            "price": 1009.09,
            "image": {"fields": {"file":{"url": "image/SmartHeart.gif"}}}
        }
    },
    {
        "sys": {
            "id": "17",
            "type": "food"
        },
        "fields":{
            "title": "Whiskas",
            "price": 29.09,
            "image": {"fields": {"file":{"url": "image/food2.png"}}}
        }
    },
    {
        "sys": {
            "id": "18",
            "type": "food"
        },
        "fields":{
            "title": "Morbi tristique",
            "price": 29.09,
            "image": {"fields": {"file":{"url": "image/food4.jfif"}}}
        }
    },
    {
        "sys": {
            "id": "19",
            "type": "food"
        },
        "fields":{
            "title": "Quisque",
            "price": 19.09,
            "image": {"fields": {"file":{"url": "image/food3.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "20",
            "type": "dog"
        },
        "fields":{
            "title": "Husky Sibir",
            "price": 2900.09,
            "image": {"fields": {"file":{"url": "image/dog2.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "21",
            "type": "dog"
        },
        "fields":{
            "title": "Bulldog",
            "price": 9999.09,
            "image": {"fields": {"file":{"url": "image/dog4.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "22",
            "type": "dog"
        },
        "fields":{
            "title": "Whiskas",
            "price": 29.09,
            "image": {"fields": {"file":{"url": "image/dog5.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "23",
            "type": "food"
        },
        "fields":{
            "title": "Me-O",
            "price": 29.09,
            "image": {"fields": {"file":{"url": "image/food5.jpg"}}}
        }
    },

    {
        "sys": {
            "id": "24",
            "type": "food"
        },
        "fields":{
            "title": "Whiskas",
            "price": 29.09,
            "image": {"fields": {"file":{"url": "image/food6.jpg"}}}
        }
    },

    {
        "sys": {
            "id": "25",
            "type": "toy"
        },
        "fields":{
            "title": "Etiam",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/toy2.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "26",
            "type": "toy"
        },
        "fields":{
            "title": "Ultrices",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/toy3.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "27",
            "type": "toy"
        },
        "fields":{
            "title": "Lectus",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/toy4.jfif"}}}
        }
    },
    {
        "sys": {
            "id": "28",
            "type": "toy"
        },
        "fields":{
            "title": "Lobortis",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/toy5.jpeg"}}}
        }
    },
    {
        "sys": {
            "id": "29",
            "type": "toy"
        },
        "fields":{
            "title": "Praesent",
            "price": 9.09,
            "image": {"fields": {"file":{"url": "image/toy6.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "30",
            "type": "medicine"
        },
        "fields":{
            "title": "Royal Canin",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/medi0.jpg"}}}
        }
    },

    {
        "sys": {
            "id": "31",
            "type": "medicine"
        },
        "fields":{
            "title": "Vestibulum",
            "price": 19.09,
            "image": {"fields": {"file":{"url": "image/medi2.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "32",
            "type": "medicine"
        },
        "fields":{
            "title": "Enim",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/medi3.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "33",
            "type": "medicine"
        },
        "fields":{
            "title": "Quisque",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/medi4.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "34",
            "type": "furniture"
        },
        "fields":{
            "title": "Proin",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/furn0.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "35",
            "type": "furniture"
        },
        "fields":{
            "title": "Fusce",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/furn1.jfif"}}}
        }
    },
    {
        "sys": {
            "id": "36",
            "type": "furniture"
        },
        "fields":{
            "title": "Sed porta",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/furn2.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "37",
            "type": "furniture"
        },
        "fields":{
            "title": "Morbi quam",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/furn3.webp"}}}
        }
    },
    {
        "sys": {
            "id": "38",
            "type": "furniture"
        },
        "fields":{
            "title": "Suspendisse",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/furn4.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "39",
            "type": "furniture"
        },
        "fields":{
            "title": "Aliquam",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/furn5.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "40",
            "type": "furniture"
        },
        "fields":{
            "title": "Pellentesque",
            "price": 59.09,
            "image": {"fields": {"file":{"url": "image/furn6.jpg"}}}
        }
    },
    {
        "sys": {
            "id": "41",
            "type": "medicine"
        },
        "fields":{
            "title": "nexgard",
            "price": 1.09,
            "image": {"fields": {"file":{"url": "image/medi1.jpg"}}}
        }
    }
]
class Products {
    async getProducts(){
        try {
            let products = arr;

            products = products.map(item =>{
                const {title,price} = item.fields;
                const {id, type} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title, price, id, type, image};
            })
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

class Storage {
    static saveProducts(products){
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find(product => product.id === id);
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
function GetProducts(){
    const products = new Products();
    // get all products
    products.getProducts().then(products => {
        // save data
        Storage.saveProducts(products);
    })
}
var carttest = 0;
if(Storage.getID() == null){
    carttest = [];
}
else{
    carttest = Storage.getID();
}
var cart = carttest;

const btns = document.querySelectorAll(".bag-btn");
const btnCart = document.querySelector(".cart-items");
var amountCart = cart.length;

btns.forEach(e => {
    e.addEventListener("click", function(){
        cart.push(e.dataset.id);
        if( cart.length <= 1){
            amountCart += 1;
            btnCart.innerHTML = amountCart;
            localStorage.setItem("cart", JSON.stringify(cart));
        } else{
            //biến kiểm tra xem trong mảng đã có phần tử này chưa.
            var test = 0;
            for(let i = 0; i < cart.length - 1; i++){
                // pop product from localstorage
                if(e.dataset.id === cart[i]){
                    cart.pop();
                    test = 1;
                }
            }
            if(test == 0){
                // set amountcart
                amountCart += 1;
                console.log(amountCart);
                btnCart.innerHTML = amountCart;
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        }
        // show notify
        $(".notify-product").show();
        // hide sau 3s
        setTimeout(function(){
            $(".notify-product").hide();
        }, 2000);
    });
})

document.addEventListener("DOMContentLoaded", () =>{
    GetProducts();
    $(".notify-product").hide();
    btnCart.innerHTML = amountCart;
});

