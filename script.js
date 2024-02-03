let img_1 = document.querySelector(".img_1");
let img_2 = document.querySelector(".img_2");

let first_player = document.querySelector(".first_player");
let player_one_box = document.querySelector(".player_one_box")
let player_two_box = document.querySelector(".player_two_box");

let player_one_input = document.querySelector(".player_one_input");
let player_two_input = document.querySelector(".player_two_input");

let player_one_error = document.querySelector(".player_one_error");
let player_two_error = document.querySelector(".player_two_error");

let player_two_btn = document.querySelector(".player_two_btn");
let player_one_btn = document.querySelector(".player_one_btn")

let restart = document.querySelector(".restart");

let chance_main = document.querySelector(".chance_main");
let chance = document.querySelector(".chance");

let player_one_store_number;
let count_chance = 5;


player_one_btn.addEventListener("click",function(){
     if(Boolean(player_one_input.value)){
          if(Boolean(player_one_input.value - 20)){
               if(player_one_input.value>= 0 && player_one_input.value <=10){
                    player_one_error.innerHTML = "";
                    first_player.innerHTML = "second player";
                    player_one_box.style.display = "none"
                    player_two_box.style.display = "block"
                    player_one_store_number = player_one_input.value

               }else{
                    player_one_error.innerHTML = "Number must be between or equal 0 to 10.";
               }
          }else{
               player_one_error.innerHTML = "please enter a number, don't use text";
          }
     } else{
          player_one_error.innerHTML = "Please enter a number and start the game.";
     }
})

player_two_btn.addEventListener("click",function(){
     if(Boolean(player_two_input.value)){
          if(Boolean(player_two_input.value - 20)){
               if(player_two_input.value >= 0 && player_two_input.value<= 10){
                    player_two_error.innerHTML = "";
                    if(count_chance !== 1){
                         count_chance-- 
                         player_two_error.innerHTML = "Wrong Number!! Please try again.";
                         if(player_one_store_number == player_two_input.value){
                              player_two_error.style.color = "green";
                              player_two_error.innerHTML = "";
                              first_player.innerHTML = "Congratulations, you are winner";
                              player_two_input.style.display = "none";
                              player_two_btn.style.display = "none";
                              chance_main.style.display = "none";
                              restart.style.display = "block";
                              img_1.style.display = "none";
                              img_2.style.display = "block";
                         }else{
                              chance.innerHTML = count_chance
                         }
                    }else{
                         player_two_error.style.color = "green";
                         player_two_error.innerHTML = "";
                         first_player.innerHTML = "!OPPS first player is winner";
                         player_two_input.style.display = "none";
                         player_two_btn.style.display = "none";
                         chance_main.style.display = "none";
                         restart.style.display = "block";
                         img_1.style.display = "none";
                         img_2.style.display = "block";

                    }
               }else{
                    player_two_error.innerHTML = "Number must be between or equal 0 to 10."
               }
          }else{
               player_two_error.innerHTML = "Please enter a number, don't use text."
          }

     }else{
          player_two_error.innerHTML = "Please input a number to start game"
     }
})

restart.addEventListener("click", function(){
     location.reload();
 })