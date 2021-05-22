player_1=localStorage.getItem("player_1");
player_2=localStorage.getItem("player_2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player_1+":";
document.getElementById("player2_name").innerHTML=player_2+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn :"+player_1;
document.getElementById("player_answer").innerHTML="Answer Turn :"+player_2;
function send1(){
number_1=document.getElementById("numer_1").value ;
number_2=document.getElementById("numer_2").value ;
answer=parseInt(number_1)*parseInt(number_2);
question_word="<h3>"+number_1+"X"+number_2+"</h3>";
input="<br>answer:<input type='number' id='answer'>";
button="<br><br><button id='check_btn' onclick='check()' class='btn btn-danger'>Check</button>";
document.getElementById("output").innerHTML=question_word+input+button;
document.getElementById("numer_1").value="";
document.getElementById("numer_2").value="";
}

question_turn="player_1";
answer_turn="player_2";

function check(){
get_answer= document.getElementById("answer").value;
if(get_answer==answer){
    if (answer_turn=="player_1"){
        update_player1_score = player1_score+1;
        document.getElementById("player1_score").innerHTML= update_player1_score;
    }
    else {
        update_player2_score = player2_score+1;
        document.getElementById("player2_score").innerHTML= update_player2_score;
    }
}
if (question_turn == "player_1"){
question_turn="player_2";
document.getElementById("player_question").innerHTML="Question Turn :"+player_2;
}
else {
question_turn="player_1";
document.getElementById("player_question").innerHTML="Question Turn :"+player_1;
}
if (answer_turn == "player_1"){
    answer_turn="player_2";
    document.getElementById("player_answer").innerHTML="Answer Turn :"+player_2;
    }
    else {
    answer_turn="player_1";
    document.getElementById("player_answer").innerHTML="Answer Turn :"+player_1;
    }
    document.getElementById("answer").value="";
    document.getElementById("output").innerHTML="";
}