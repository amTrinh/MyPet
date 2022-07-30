function test(){
    if($(phonenumber).val() == null || $(phonenumber).val() == ''){
        $(phonenumber).focus();
        console.log($($(phonenumber).next()));
        $($(phonenumber)).next().text("*Required Information");
    }
    else{
        if($(password).val() == null || $(password).val() == ''){
            $(password).next().text("*Required Information");
            $(password).focus();
        }
        else{
            if($(fullname).val() == null || $(fullname).val() == ''){
                $(fullname).focus();
                $(fullname).next().text("*Required Information");
            }
            else{
                location.href = "home.html";

            }
        }
    }
}
$(".login_now").click(function(){
    location.href = "home.html";
})
document.addEventListener("DOMContentLoaded", () => {
    $(phonenumber).focus();
})