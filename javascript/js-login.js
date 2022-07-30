$(eyeshow).click(function(){
    $(eyehide).show();
    $(eyeshow).hide()
    password.type = "password";
});
$(eyehide).click(function(){
    $(eyeshow).show();
    $(eyehide).hide();
    password.type = "text";
});
function test(){
    if($(username).val() == null || $(username).val() == ''){
        $(username).focus();
        $(noUser).text("*Required Information");
    }
    else{
        if($(password).val() == null || $(password).val() == ''){
            $(noPassw).text("*Required Information");
            $(password).focus();
        }
        else{
            if($(username).val() == "amt" && $(password).val() == "12345"){
                location.href = "home.html";
            }
            else{
                alert("Incorrect, please try again")
            }
        }
    }
}
$(".btn_Res").click(function(){
    location.href = "register.html";
})
document.addEventListener("DOMContentLoaded", () => {
    $(username).focus();
    $(eyeshow).hide()
})