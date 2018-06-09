$(document).ready(function() {
    $(".box").click(function(){
        var font = $(this).attr('id');
        $("#text").css("font-family",font);
    })
});