$(document).ready(function () {
    var answer;
    var userNum;
    var crystal1Value;
    var crystal2Value;
    var crystal3Value;
    var crystal4Value;
    var wins = 0;
    var losses = 0;
    var minAnswer = [19]
    var maxAnswer = [120]

    function play() {
        var audio = document.getElementById("audio");
        audio.play();
    }

    function randomNumber(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function reset() {
        answer = randomNumber(120, 19);
        // console.log(answer);
        crystal1Value = randomNumber(1, 12);
        $("#crystal1").attr("data-value", crystal1Value)
        crystal2Value = randomNumber(1, 12);
        $("#crystal2").attr("data-value", crystal2Value)
        crystal3Value = randomNumber(1, 12);
        $("#crystal3").attr("data-value", crystal3Value)
        crystal4Value = randomNumber(1, 12);
        $("#crystal4").attr("data-value", crystal4Value)
        userNum = 0;
        $("#goalScore").text(answer);
        $("#alerth3").text(" ");


    }
    reset();

    $(".crystal").on("click", function () {
        var userPicked = +$(this).attr("data-value");
        console.log(userPicked);
        userNum = userNum + userPicked;
        console.log(userNum);
        $("#currentScore").text(userNum);
        if (userNum === answer) {
            // console.log("You win");
            reset();
            wins++;
            $("#wins").text(wins);
            $("#alerth3").text("YOU WIN")


        }
        else if (userNum > answer) {
            // console.log("YOU LOSE!");
            reset();
            losses++;
            // console.log(losses);
            $("#losses").text(losses);
            $("#alerth3").text("YOU LOSE")
        }
    })

})
