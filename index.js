$(".play-container").fadeOut(0);
$(".result-container").fadeOut(0);
$(".rule-container").fadeOut(0);

 var score=0;
 var colorSelect=["blue","red","yellow"] 

 function randomColour(){
    var colorSelector= Math.floor(Math.random()*3);
    computerColour=colorSelect[colorSelector];
    switch(computerColour){
        case "blue":
            $(".computer").html('<h1>THE HOUSE PICKED</h1><button class="blue static icon"><img class="paper image" src="images/icon-paper.svg" alt="paper image"></button>');
            break;
        case "yellow":
            $(".computer").html('<h1>THE HOUSE PICKED</h1><button class="yellow static icon"><img class="scissors image" src="images/icon-scissors.svg" alt="scissors image"></button>');
            break;
        case "red":
            $(".computer").html('<h1>THE HOUSE PICKED</h1><button class="red static icon"><img class="rock image" src="images/icon-rock.svg" alt="rock image"></button>');
            break;
    }
    return computerColour;
 }

$(".buttons button").click(function(){
    var userColor= this.classList[0];
    $(".buttons").fadeOut();
    $(".play-container").fadeIn();
    switch(userColor){
        case "blue":
            $(".player").html('<h1>YOU PICKED</h1><button class="blue static icon"><img class="paper image" src="images/icon-paper.svg" alt="paper image"></button>');
            break;
        case "yellow":
            $(".player").html('<h1>YOU PICKED</h1><button class="yellow static icon"><img class="scissors image" src="images/icon-scissors.svg" alt="scissors image"></button>');
            break;
        case "red":
            $(".player").html('<h1>YOU PICKED</h1><button class="red static icon"><img class="rock image" src="images/icon-rock.svg" alt="rock image"></button>');
            break;
    }
    var colorComp=randomColour();
    compareResult(userColor,colorComp);
});



function compareResult(userButton,compButton){
     setTimeout(function(){
      $(".play-container").fadeOut();
      $(".result-container").fadeIn();
    },1000);
    if(userButton=="red" && compButton=="yellow" || userButton=="yellow" && compButton=="blue" || userButton=="blue" && compButton=="red"){
        $(".declare").text("YOU WIN");
        score++;
        $(".result-container .player button").addClass("wining");
        
    }
    else if(userButton=="yellow" && compButton=="red" || userButton=="blue" && compButton=="yellow" || userButton=="red" && compButton=="blue"){
        $(".declare").text("YOU LOSE");
        score=0;
        $(".result-container .computer button").addClass("wining");
        
    }
    else if(userButton==compButton){
        $(".declare").text("Draw !");
    }
    
    $(".again").click(function(){
        $(".result-container").fadeOut();
        $(".buttons").fadeIn();
        $(".score .number").text(score);
    });

}



var container=false;

$(".rule").click(function(){
    if(!container){
        $("section").addClass("blur");
        $(".rule-container").fadeIn();
        container=true;
        $(".cross").click(function(){
            $("section").removeClass("blur");
            $(".rule-container").fadeOut();
            container=false;
        });
    }

});
