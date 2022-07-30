import {header} from './header.js';
import {footer} from './footer.js';
import {icon} from './icon.js';

headerContain.innerHTML = header;
footerContain.innerHTML = footer;
iconContain.innerHTML = icon;

document.addEventListener("DOMContentLoaded", () =>{
    for(let i = 0; i < $(".item-menu").length; i++){
        $(".item-menu").removeClass("main-menu-action");
    }
    $(".item-blog").addClass("main-menu-action");
});