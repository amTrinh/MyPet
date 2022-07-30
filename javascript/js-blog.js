$("#search-icon").click(function(){
    if(blogSearch.value.length > 0){
        searchNoResult.innerText = "'" + blogSearch.value + "' not found";

            $("#searchResult").show();
            $("#search-icon").hide();
            $("#search-icon1").show();

        $("#blogSearch").focus(function(){
            $("#search-icon").show();
            $("#search-icon1").hide();
        });
        
        $(".fa-search").click(function(){
                $("#search-icon1").show();
                $("#search-icon").hide();
        });

        $(".fa-times").click(function(){
            $("#searchResult").hide();
            $("#search-icon1").hide();
            $("#search-icon").show();
            blogSearch.value = "";
        });
    } 
}) ;

$(".icon-react").click(function(){
    $(this).toggleClass("fas");
})

$(".news-article").mouseenter(function(){
    $(this).children("img.first").hide();
    $(this).children("img.second").show();
    $(this).css({"background-color":"rgb(249,249,249)","box-shadow":"2px 2px 5px rgb(173, 173, 173)"})
})

$(".news-article").mouseleave(function(){
    $(this).children("img.first").show();
    $(this).children("img.second").hide();
    $(this).css({"background-color":"rgb(255,255,255)","box-shadow":"0px 0px 0px rgb(173, 173, 173)"})
})

