var titles = ["Rustic Walls",
            "Two Love Birds",
            "Beauty and Fame",
            "Magic Hour at Sands Beach",
            "Floral Arrangements"];

$(document).ready(function() {
    $('#kenburns-slideshow').Kenburns({
        images: [
            "image/banner2.jpg",
            "image/banner3.png",
            "image/banner3.jpg",
            "image/banner1.jpg",
            "image/banner4.jpg"
        ],
        scale:0.75,
        duration:5000,
        fadeSpeed:1000,
        ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)',

        onSlideComplete: function(){
            $('#slide-title').html(titles[this.getSlideIndex()]);
        },
        onLoadingComplete: function(){
            //$('#status').html("Loading Complete");
        }
    });
});