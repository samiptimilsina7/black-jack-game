let firstNumber=0;
let secondNumber=0;
let sumNumber=0;

function startgame(){
    initialMessage();
    firstNumber=Math.floor(Math.random()*13+1);
    secondNumber=Math.floor(Math.random()*13+1);
    sumNumber=firstNumber+secondNumber;
    document.querySelector(".cards").innerHTML+=firstNumber+" "+secondNumber;
    document.querySelector(".sum").innerHTML+=sumNumber;
    ifchecking(sumNumber);
}

function ifchecking(sumNumber){
    if (sumNumber<21) {
        document.querySelector(".status").innerHTML="One more card to try your luck?"
    } else if (sumNumber==21) {
        document.querySelector(".status").innerHTML="You've got blackjack!"
        reset();
    } else {
        document.querySelector(".status").innerHTML="Sorry, you've failed"
        reset();
    }
}


function reset(){
    setTimeout(() => {
        // firstNumber=0;
        // secondNumber=0;
        // thirdNumber=0;
        sumNumber=0;
        initialMessage();
    }, 3000);
}

function initialMessage(){
        document.querySelector(".status").innerHTML="Want to play a round?";
        document.querySelector(".cards").innerHTML="Cards: ";
        document.querySelector(".sum").innerHTML="Sum: ";
}

function newcard(){
    document.querySelector(".sum").innerHTML="Sum: "
    let thirdNumber=Math.floor(Math.random()*13+1);
    console.log(thirdNumber)
    console.log(sumNumber)
    sumNumber+=thirdNumber;
    document.querySelector(".cards").innerHTML+=" "+thirdNumber;
    document.querySelector(".sum").innerHTML+=sumNumber;
    ifchecking(sumNumber);
}
