// amount product 
let item = 1;
$(".btn-minus-product").click(function(){
    if(item > 1){
        item = item -1 ;
        $("#amount").val(item);
    }
});
$(".btn-plus-product").click(function(){
    item = item + 1 ;
        $("#amount").val(item);
});
// js heart 
$(Document).ready(function(){
    $(".icon-heart-color").hide();
});
$(".icon-heart-line").click(function(){
    $(".icon-heart-color").show();
    $(".icon-heart-line").hide();
});
$(".icon-heart-color").click(function(){
    $(".icon-heart-line").show();
    $(".icon-heart-color").hide();
});
// js comment 
// filterSelection("all");

var x = document.getElementsByClassName("reviewsDiv");
console.log(x);
$(".filterReviews").click(function(e){
    const data = e.target.dataset.id;

    for(i = 0; i < x.length; i++){
        if(data == "all") {
            x[i].style.display = "block";
        }
        else{
            if(x[i].classList.contains(data)){
                x[i].style.display = "block";
            }else{
                x[i].style.display = "none";
            }
        }
        console.log(x[i].classList.contains(data));
    }
})


$(".li-arr-star").click(function(){
    for(let j = 0; j < $(".li-arr-star").length; j++){
        $(".li-arr-star").eq(j).removeClass("star-active");
    }
    $(this).addClass("star-active");
    
});
// js selected image 
$(Document).ready(function(){
    $(".image-litte").eq(0).css("border", "2.3px solid #ee4d2d");
});
$(".image-litte").click(function(){
    for(let i = 0; i < $(".image-litte").length ; i++){
        $(".image-litte").eq(i).css("border", "0");
    }
    let item = $(this).attr("data-id");
    console.log(item);

    $(this).css("border", "2.3px solid #ee4d2d");
    if(item == 1){
        $(".background-image-main").css("background-image", "url(../image/husky1.jpg)");
    }
    if(item == 2){
        $(".background-image-main").css("background-image", "url(../image/husky2.jpg)");
    }
    if(item == 3){
        $(".background-image-main").css("background-image", "url(../image/husky3.jpg)");
    }
    if(item == 0){
        $(".background-image-main").css("background-image", "url(../image/husky0.jpg)");
    }
});

// function filterSelection(c){
//     console.log(c);    
//     for(i = 0; i < x.length; i++){
//         if(c == "all") {

//             x[i].style.display = "block";
//         }
//         else{
//             // RemoveClass(x[i], "show");
//             if(x[i].classList.contains(c)){
//                 // AddClass(x[i], "show");
//                 x[i].style.display = "block";
    
//             }else{
//                 x[i].style.display = "none";

//             }
            
//         }
//         console.log(x[i].classList.contains(c));
//     }
//     console.log(1);
// }

// function AddClass(element, name) {
//     var i, arr1, arr2;
//     // arr1 = element.className.split(" ");
    
//     arr2 = name.split(" ");

//     for(i = 0; i < arr2.length; i++){
//         if(arr1.className.indexOf(arr2[i]) == -1){
//             element.className+= " "+ arr2[i];
//         }
//     }
// }

// function RemoveClass(element, name) {
//     var i, arr1, arr2;
//     // arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//       while (arr1.className.indexOf(arr2[i]) > -1) {
//         arr1.splice(arr1.className.indexOf(arr2[i]), 1);     
//       }
//     }
//     element.className = arr1.join(" ");
// }



// $(Document).ready(function(){
//     $(".action-reviews").eq(1).hide();
//     $(".action-reviews").eq(2).hide();
//     $(".action-reviews").eq(3).hide();
//     $(".action-reviews").eq(4).hide();
//     $(".action-reviews").eq(5).hide();
//     $(".star-show").css({"border": "1px solid red", "color" : "red"});

// });
// $(".li-arr-star").click(function(){
//     let liArrnext = $(this).attr("data-id");
//     let liArrnow = $(".star-show").attr("data-id");

//     $(".star-show").css({"border": "1px solid gray", "color" : "black"});
//     $(this).css({"border": "1px solid red", "color" : "red"});

//     $(".star-show").removeClass("star-show");
//     $(this).addClass("star-show");

//     console.log(liArrnext);
//     console.log(liArrnow);

//     $(".action-reviews").eq(liArrnow - 1).hide();
//     $(".action-reviews").eq(liArrnext - 1).show();

//     $(".action-reviews").eq(liArrnow - 1).removeClass("comment-show");
//     $(".action-reviews").eq(liArrnext - 1).addClass("comment-show");

// });

