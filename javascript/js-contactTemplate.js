import {headerTemplate} from './headerTemplate.js';
import {footerTemplate} from './footerTemplate.js';

headerTemplateContain.innerHTML = headerTemplate;
footerTemplateContain.innerHTML = footerTemplate;

document.addEventListener("DOMContentLoaded", () =>{
    for(let i = 0; i < $(".item-menu").length; i++){
        $(".item-menu").removeClass("main-menu-action");
    }
    $(".item-contact").addClass("main-menu-action");
});

// $(Document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop()){
//             $('header').addClass('sticky');
//             $(".back-to-top").show();
//         }else{
//             $('header').removeClass('sticky');
//             $(".back-to-top").hide();

//         }
//     })
// })