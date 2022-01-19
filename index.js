let firstNumber=Math.floor(Math.random()*13+1);
let secondNumber=Math.floor(Math.random()*13+1);
let sumNumber=firstNumber+secondNumber;

function ifchecking(){
    if (sumNumber<21) {
        document.querySelector(".status").innerHTML="One more card to try your luck?"
    } else if (sumNumber==21) {
        document.querySelector(".status").innerHTML="You've got blackjack!"
    } else {
        document.querySelector(".status").innerHTML="Sorry, you've failed"
    }
}


function startgame(){
    document.querySelector(".cards").innerHTML+=firstNumber+" "+secondNumber;
    document.querySelector(".sum").innerHTML+=sumNumber;
    ifchecking();
}

function newcard(){
    let thirdNumber=Math.floor(Math.random()*13+1);
    sumNumber+=thirdNumber;
    ifchecking();
}
