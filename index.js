let firstNumber=0;
let secondNumber=0;
let sumNumber=0;
let cardArray=[];

function startgame(){
    cardArray=[]; //when clicking the start game button again after clicking it first, the numbers values doesnt add up like 2,4,6 numbers
    
    initialMessage();
    firstNumber=Math.floor(Math.random()*13+1);
    secondNumber=Math.floor(Math.random()*13+1);
    cardArray.push(firstNumber,secondNumber);
    console.log(cardArray)

    sumAndDisplayCards();

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
    
    cardArray=[];
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

    cardArray.push(thirdNumber);

    sumAndDisplayCards();

    // sumNumber+=thirdNumber;
    // document.querySelector(".cards").innerHTML+=" "+thirdNumber;
    // document.querySelector(".sum").innerHTML+=sumNumber;
    ifchecking(sumNumber);
}

function sumAndDisplayCards(){
    sumNumber=0;
    document.querySelector(".cards").innerHTML="Cards: ";

    cardArray.forEach((number)=>{
        sumNumber+=number;
        document.querySelector(".cards").innerHTML+=" "+number;
    });
    
    document.querySelector(".sum").innerHTML+=sumNumber;
}

