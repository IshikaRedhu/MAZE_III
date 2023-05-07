AFRAME.registerComponent("game",{
    init:function(){
     this.player_game();
    },
   player_game:function(){

     window.addEventListener('keyDown',function(e){
         var player = document.querySelector("#model2");
         if(e.code=="ArrowRight"){
             playerX_position = playerX_position-2
             player.setAttribute("position",{x:playerX_position,y:-0.5,z:playerZ_position});
         }
         if(e.code=="ArrowLeft"){
             playerX_position = playerX_position+2
             player.setAttribute("position",{x:playerX_position,y:-0.5,z:playerZ_position});
         }
         if(e.code=="ArrowUp"){
            playerZ_position = playerZ_position+2
            player.setAttribute("position",{x:playerX_position,y:-0.5,z:playerZ_position});
         }
         if(e.code=="Space"){
            playerZ_position = playerZ_position-2
            player.setAttribute("position",{x:playerX_position,y:-0.5,z:playerZ_position});
         }
      });
    },
 });
 