player1_Name = localStorage.getItem("p1name");
player2_Name = localStorage.getItem("p2name");
player1Score = 0;
player2Score = 0;
Qturn = "p1";
Aturn = "p2";
document.getElementById("player1_name").innerHTML = player1_Name;
document.getElementById("player2_name").innerHTML = player2_Name;

document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;

document.getElementById("Qq_turn").innerHTML = "Question Turn:" + player1_Name;
document.getElementById("Aa_turn").innerHTML = "Answer Turn:" + player2_Name;

function multiply() {
    number1=document.getElementById("num1").value;
    number2=document.getElementById("num2").value;

    actualansw=parseInt(number1)*parseInt(number2);

    questionNumber= "<h4>" + number1 + "X" + number2 +"</h4>";

    inputBox="<br>Answer : <input type='number' id='inputCheck'>"

    checkButton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=questionNumber+inputBox+checkButton;
    document.getElementById("output").innerHTML=row;

    document.getElementById("num1").value="";
    document.getElementById("num2").value="";

}
function check(params) {
    getAnsw==document.getElementById("inputCheck").value;
    if (getAnsw=actualansw) {
        if (Aturn="p1") {
            updatePlayer1score= Player1Score +1;
            document.getElementById("player1_score").innerHTML=updatePlayer1score;
        }
        else{
            updatePlayer2score= Player2Score +1;
            document.getElementById("player2_score").innerHTML=updatePlayer2score;
        }
    }
    if (Qturn=="p1") {
        Qturn="p2";
        document.getElementById("Qq_turn").innerHTML = "Question Turn:" + player2_Name;
    }
    else{
        Aturn="p1";
        document.getElementById("Aa_turn").innerHTML = "Answer Turn:" + player1_Name;
    }
}