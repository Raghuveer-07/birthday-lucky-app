const birthDate = document.querySelector("#birthdate-input");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector(".error-message");
const outputResult = document.querySelector("#output-result");

console.log(birthDate.value);

function birthdateEventHandler(){
    console.log("clicked and function is processing")
    if (luckyNumber>0){
        console.log("all checks done");
        var birthDateConverted  =   Number(birthDate.value.replace("-",""));
        console.log("date converted",birthDateConverted);
        if (birthDateConverted%Number(luckyNumber)===0){
            console.log("positive");
            const positiveOutput = "hurray!!!!! " + luckyNumber.value + " is your Lucky Number 🤩🤩🤩.";
            outputResult.innerText  =   positiveOutput;
        }
        else{
            console.log("negative");
            const negativeOutput = "Oops !!!!!"+ luckyNumber.value +"is not lucky for you 😔😔😔.";
            outputResult.innerText= negativeOutput;
        }
    }
    else{
        console.log("error code");
        errorMessage.innerText="Invaid Lucky Number."
    }
}


checkButton.addEventListener("click",birthdateEventHandler);
