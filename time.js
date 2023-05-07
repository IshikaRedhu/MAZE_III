AFRAME.registerComponent("timer_control",{
    schema:{gameState:{type:'string',default:"play"}},
    init:function(){
       var duration = 120
       var timerEl = document.querySelector("#timer")
       this.startTimer(duration, timerEl);
    },
    startTimer:function(duration,timerEl){
       var minutes,seconds;
       setInterval(()=>{
           if(duration > 0){
               this.data.gameState ='play';
               minutes = parseInt(duration/60) 
               seconds = parseInt(duration%60)
           
           if(minutes < 10){
               minutes = "0"+minutes
           }
           if(seconds < 10){
               seconds = "0"+seconds
           }
           timerEl.setAttribute("text",{'value':minutes+":"+seconds})
           duration = duration-1
       }
       else{
           this.data.gameState = "over";
           var text = document.querySelector("#gameup")
           text.setAttribute("visible",true)
       }
       },1000);
    },
   })