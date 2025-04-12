
let cptScore =document.getElementById("cptScore")
let playerScore =document.getElementById("playerScore")
let cptChoice =document.getElementById("cptChoice")
let playerChoice =document.getElementById("playerChoice")
let winner = document.getElementById("winner")
let buttons = document.getElementsByTagName("button")


for(let button of buttons){
    button.addEventListener("click",function(){
            game(this)
    })
}

//GameLogic
function game(button){
   let cpt= Math.floor(Math.random() * 3 + 1)
    
   let choice = button.id
   let playerImg=""
    switch(choice){
        
        case "btn-fire":
             playerImg= "images/feuer.png"
            if(cpt == 1){
                
            update( playerImg," Unentschieden", "images/feuer.png")

            }else if(cpt ==2 ){
                cptScore.textContent =parseInt(cptScore.textContent)+1;
                update(playerImg, " Wasser schlägt Feuer .Du hast verloren !","images/water.png")
            }else{
                playerScore.textContent =parseInt(playerScore.textContent)+1
                update(playerImg,"Feuer schlägt Planze. Du hast gewonnen !","images/plant.png")
            
            }
            break;
        case "btn-water":
             playerImg="images/water.png"
            
             if(cpt == 1){
                playerScore.textContent =parseInt(playerScore.textContent)+1
             update( playerImg," Wasser schlägt Feuer.Du hast gewonnen !", "images/feuer.png")
 
             }else if(cpt ==2 ){
        
                 update(playerImg, "Unentschieden","images/water.png")
             }else{
                cptScore.textContent =parseInt(cptScore.textContent)+1;
                 update(playerImg,"Pflanze schlägt Wasser.Du hast verloren!","images/plant.png")
             
             }
             break;
            case "btn-plant":
                playerImg="images/plant.png"
        
             if(cpt == 1){
                cptScore.textContent =parseInt(cptScore.textContent)+1;
             update( playerImg," Feuer schlägt Pflanze.Du hast verloren", "images/feuer.png")
 
             }else if(cpt ==2 ){
                playerScore.textContent =parseInt(playerScore.textContent)+1  
                 update(playerImg, "Pflanze schlägt Wasser.Du hast gewonnen!","images/water.png")
             }else{
            
                 update(playerImg,"Unentschieden","images/plant.png")
             
             }
             break;

             default:
                newgame()

    }
    

}
    function update(playerImg,text,cptImg){

    
           // udpatePlayerInfo
        playerChoice.src= playerImg
    
        playerChoice.classList.remove("d-none")
        playerChoice.classList.add("d-block")
        playerChoice.src= playerImg

        //udpdateComputerInfo
        cptChoice.src= cptImg
        cptChoice.classList.remove("d-none")
        cptChoice.classList.add("d-block") 
        cptChoice.src= cptImg


        winner.textContent="";
        winner.textContent=text
        winner.classList.remove("d-none")
        winner.classList.add("d-block")
        

    }


   function newgame(){

    
     cptChoice.src = "";
     playerChoice.src = "";
    winner.textContent="";
     
     playerChoice.classList.add("d-none");
     cptChoice.classList.add("d-none");
    winner.classList.add("d-none")

     
     cptScore.textContent = "0";
     playerScore.textContent = "0";
    


   }