let img_1 = document.querySelector(".img_1");
let img_2 = document.querySelector(".img_2");

let first_player = document.querySelector(".first_player");
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
                    
               }
          }else{
               player_one_error.innerHTML = "please enter a number, don't use text"
          }
     } else{
          player_one_error.innerHTML = "Please enter a number and start the game.";
     }
})
