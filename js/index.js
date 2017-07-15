$(document).ready(function(){
    
    var player = 1;
    
    var rand1=Math.floor(Math.random()*9) + 1;
    var rand2=Math.floor(Math.random()*9) + 1;
    var tag = ".sq" + rand2.toString();
    var occupiedArray = [];
    
    $("#reset").hide();
    $("#player1").hide();
    $("#player2").hide();
    $("#players").hide();
    $(".square").on("click", function(event){
        var sSelected = $(this);
        var sNum;//Keep track of occupied numbers
        if(sSelected.hasClass("x")||sSelected.hasClass("o")){
           alert("This square has been selected!"); 
        }else {
            sNum = sSelected.attr("class").substring(9);
            console.log(sNum);
            occupiedArray.push(sNum);// add clement to array 
            // if (occupiedArray.length >= 9){
            //     $("game").hide();
            //     $("#reset").show();
            //     $("#players").show();
            //     // setTimeout(function(){$("#reset").click();}, 2000);
            // }else {
            
            if(player == 1){
                sSelected.addClass("x").append("<i class='fa fa-times' aria-hidden='true'></i>");
                if(checkWin("x")){
                    $("game").hide();
                    $("#reset").show();
                    $("#player1").show();
                    setTimeout(function(){$("#reset").click();}, 2000);
                }else if(checkAllOccupied()) {;
                }else {
                    player = 2;
                    console.log("player 2 turn!")
                    
                }
                
            }else {                     //player is 2
                $(randomSQ(rand1)).addClass("o").append("<i class='fa fa-circle-o' aria-hidden='true'></i>");
                
                if(checkWin("o")){
                    $("game").hide();
                    $("#reset").show();
                    $("#player2").show();
                    $("#reset").click();setTimeout(function(){$("#reset").click();}, 2000);
                
                }else if(checkAllOccupied()) {;
                }else {
                    player = 1;
                    console.log("player 1 turn!")
                    
                }
                
            }
            
        }
    });
    
    $("#reset").click(function(event){
        location.reload();
        event.preventDefault();
    });
    
    
    //Select square randomly for player 2
    function randomSQ(urand){
        var tag = ".sq" + urand.toString();
        // var lrand;
        while($(tag).hasClass("x")||$(tag).hasClass("o")){
            // console.log(tag + "occupied");
            urand = Math.floor(Math.random()*9)+1;
            tag = ".sq" + urand.toString();
        }
        return tag;
        
    };
    
    function checkAllOccupied(){
        if (occupiedArray.length >= 9){
                $("game").hide();
                $("#reset").show();
                $("#players").show();
                // setTimeout(function(){$("#reset").click();}, 2000);
                return true;
            }else {
                return false;
            }
    };
    
    function checkWin(mark){
        if($(".sq1").hasClass(mark)&&$(".sq2").hasClass(mark)&&$(".sq3").hasClass(mark)){
            return true;
        }
        else if($(".sq1").hasClass(mark)&&$(".sq4").hasClass(mark)&&$(".sq7").hasClass(mark)){
           return true; 
        }
        else if($(".sq4").hasClass(mark)&&$(".sq5").hasClass(mark)&&$(".sq6").hasClass(mark)){
           return true; 
        }
        else if($(".sq7").hasClass(mark)&&$(".sq8").hasClass(mark)&&$(".sq9").hasClass(mark)){
           return true; 
        }
        else if($(".sq2").hasClass(mark)&&$(".sq5").hasClass(mark)&&$(".sq8").hasClass(mark)){
           
           return true; 
        }
        else if($(".sq3").hasClass(mark)&&$(".sq6").hasClass(mark)&&$(".sq9").hasClass(mark)){
           return true; 
        }
        else if($(".sq1").hasClass(mark)&&$(".sq5").hasClass(mark)&&$(".sq9").hasClass(mark)){
           return true; 
        }
        else if($(".sq3").hasClass(mark)&&$(".sq5").hasClass(mark)&&$(".sq7").hasClass(mark)){
           return true; 
        }else {
            return false;
        }
            
    };
    
    
    
    
    
    
})