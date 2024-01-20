$(document).ready(function() {
    $("svg").click(function(){
        $("#info li").slideToggle();
        $(this).toggleClass("rotated");
    });
});

