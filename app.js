const birthDate = document.querySelector("#birthdate-input");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
//const errorMessage = document.querySelector(".error-message");
const outputResult = document.querySelector("#output-result");

function CalculateDateSum(date){
    convertedDate= date.replaceAll("-","");
    var sum1=0;

    console.log(convertedDate);

    for (let digit of convertedDate){
        console.log(digit)
        sum1+=Number(digit);
        
    }
    console.log("date sum is "+ sum1)

    return sum1;

};

function CheckIfLucky(_sumOfDate,numberlucky){
    if (_sumOfDate%numberlucky===0){
        console.log("positive mod checked");
        var positiveMessage= "Hurray!!!!! " + numberlucky + " is your lucky number 🥳🥳🥳🥳🥳."
        outputResult.innerText= positiveMessage;
    }
    else{
        console.log("negative mod checked");
        var negativeMessage= "Oops!!!!! " + numberlucky + " is not your lucky number 😔😔😔😔😔😔."
        outputResult.innerText= negativeMessage;
    }

}



checkButton.addEventListener("click", () => {
    const date =birthDate.value;
    const numberlucky = luckyNumber.value;
    if (date && numberlucky>0) {
      const sumOfDate = CalculateDateSum(date);
      CheckIfLucky(sumOfDate,numberlucky);
    } else {
        outputResult.innerText="enter value of both the fields.";
    }
  });