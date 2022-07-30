function showDetail(divChange, Inp){
    $(".detailChange").hide();
    $(divChange).show();
    $(".detailChange").css("height", "0");
    $(divChange).css("height", "fit-content");
    $(Inp).focus();
}
function showPass(InPass, eyeh, eyes){
    InPass.type = "text";
    $(eyeh).hide();
    $(eyes).show();
}
function hidePass(InPass,eyeh, eyes){
    InPass.type = "password";
    $(eyeh).hide();
    $(eyes).show();
}
function getPass(){
    var str = $("#passW").val();
    console.log(str);
    console.log($("#passW").val());
}
function checkPass(){
    if($("#EpassW").val() != $("#passW").val() || $("#EpassW").val() == "" || $("#passW").val() == null  || $("#passW").val() != "12345"){
        $("#notifyPass").html("Password does not match");
        $("#EpassW").focus();
        $("#EpassW").css("border", "1px solid red");
        $("#notifyPass").css("color", "red");
        return 0;
    }
    else if ($("#EpassW").val() == $("#passW").val() && $("#EpassW").val() == "12345"){
        $("#notifyPass").html("OK!");
        $("#EpassW").css("border", "1px solid blue");
        $("#notifyPass").css("color", "blue");
        return 1;
    }

}
function savePassNew(){
    var testpass = checkPass();
    if(testpass== 0){
        alert("Password does not match or null!")
    }
    else if(testpass ==1){
        $("#detailChangePass").hide();
    }

}
function checkphone(){
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var mobile = $('#phoneNumber').val();
    if(mobile !==''){
        if (vnf_regex.test(mobile) == false) 
        {
            alert('Your phone number is not in the correct format!');
        }else{
            PhoneInfo.innerHTML = mobile;
            $("#detailChangePhone").hide();
        }
    }else{
        alert('Phone number is null!');
    }
}

function SaveInfoUser(){
    var i = day.value;
    console.log(i);
    console.log(document.getElementById("day").options[10]);
    console.log($(".dayinfo").eq(1));
    $("#day").val(10);
    return false;
}

function saveEmail(){
    newMail = $("#Mail").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(newMail == null || newMail ==""){
        alert("Correct!")
    }
    else if(!filter.test(newMail)){
        alert("Email address is not valid");
    }
    else{
        emailInfo.innerHTML = newMail;
        $("#detailChangeMail").hide()
    }
}

$(".iconAddAddress").click(function(){
    $(".overlay").show();
    $(".iconAddAddress").hide();
    $(addressInfo).focus();
});

// xóa địa chỉ 

$(".delAdd").click(function(){
    $(this).parents().eq(1).hide();
    console.log($(this).parents().eq(1));
})

function hideNewAddre(){
    $(".overlay").hide();
    $(".iconAddAddress").show();
}
$(".edit").click(function(){
    $(".overlay").show();
    $(".iconAddAddress").hide();
    var par = $(this).parents().eq(0).prev().children();
    var name = par.eq(0).children().eq(0).text();
    var addR = par.eq(1).children().eq(0).children().eq(0).text();
    var phone = par.eq(1).children().eq(1).children().eq(0).text();
    $("#username").val(name);
    $("#phone").val(phone);
    $("#addressInfo").val(addR);

})
for(let i = 0 ; i < 5; i++){
    $(".arrtitle").eq(i).click(function(){
        $(".arrtitle").removeClass("backgroungLi");
        $(".arrtitle").eq(i).addClass("backgroungLi");
        $(".boxDetailInfo").hide();
        $(".boxDetailInfo").eq(i).show();
    })
}

// js new address
function addAddre(){
    if(username.value === "" || username.value === null){
        alert("Username is null");
        username.focus();
    }
    else if(phone.value === "" || phone.value === null){
        alert("Phong number is null");
        phone.focus();
    }
    else if(addressInfo.value === "" || addressInfo.value === null){
        alert("Address is null");
        addressInfo.focus();
    }
    else{
        newname.innerHTML = username.value;
        new_phone.innerHTML = phone.value;
        new_address.innerHTML = addressInfo.value;
        console.log(username.value);
        $("#new_info_delivery").css("display", "flex");
        hideNewAddre();
    }
}



document.addEventListener("DOMContentLoaded", () => {
    $(".detailChange").hide();
    $(".detailChange").css("height", "0");
    $(".fa-eye").hide();
    $(".overlay").hide();
    $(".boxDetailInfo").hide();
    $(".boxDetailInfo").eq(0).show();
})
