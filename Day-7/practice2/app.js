$(document).ready(function(){
    $("button").click(function(){
        var mr = parseInt($("#cube").css('right'))
        var mt = parseInt($("#cube").css('top'));

        if($(this).attr('id') == 'up'){
            mt = (mt - 30) + "px";
            $("#cube").css("top",mt);
        }
        else if($(this).attr('id') == 'down'){            
            mt = (mt + 30) + "px";
            $("#cube").css("top",mt);      
        }
        else if($(this).attr('id') == 'right'){
            mr = (mr - 30) + "px";
            $("#cube").css("right",mr)
        }
        else if($(this).attr('id') == 'left'){
            mr = (mr + 30) + "px";
            $("#cube").css("right",mr);
        }
    })
 }); 
