const d = new Date();

const writerInfo = {
    fullname: writerName,
    comment: writerComment,
    dayNow: d.getDate(),
    monthNow: function(){
        return d.toLocaleString('default', { month: 'long' });
    },
    yearNow: d.getFullYear(),
    hourNow: d.getHours(),
    minuteNow: d.getMinutes(),
}

function ConvertBR(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) == 10) {
            output += "<br>";
        } else {
        output += input.charAt(i);
        }
    }
    return output;
}

function submit(){
    cmtHidden.style.display = "inline-flex";
    cmtContent.innerHTML = ConvertBR(writerInfo.comment.value);
    cmtName.innerHTML=writerInfo.fullname.innerHTML;

    var giatri="AM";
    if((writerInfo.hourNow) >=12) {
        giatri = "PM" ;
        if (writerInfo.hourNow>12) writerInfo.hourNow -= 12;
    }
    if (writerInfo.minuteNow < 10) {
        writerInfo.minuteNow = "0" + writerInfo.minuteNow;
    }
    if (writerInfo.hourNow < 10) {
        writerInfo.hourNow = "0" + writerInfo.hourNow;
    }

    cmtDetail.innerHTML = "on " + writerInfo.monthNow() +" " + writerInfo.dayNow + "<sup>th</sup>, " 
    + writerInfo.yearNow + " " + writerInfo.hourNow + ":" +writerInfo.minuteNow + " " + giatri;

    numberComt.innerHTML="2 Comments";
    $(".comment-submit").hide();
}


