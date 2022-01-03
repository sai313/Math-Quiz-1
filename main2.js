player1user = localStorage.getItem("plr1");
player2user = localStorage.getItem("plr2");
player1Score = 0;
player2Score = 0;

document.getElementById("player1").innerHTML = player1user;
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2").innerHTML = player2user;
document.getElementById("player2Score").innerHTML = player2Score;

function send() {
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    actual_ans = no1 * no2;
    console.log(actual_ans)
}