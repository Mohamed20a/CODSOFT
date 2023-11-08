// Input Name
const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
let specialChar = ["%", "/", "*", "+", "-", "=", "del"];
let output = "";

const calculate = (btnValue) => {

    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "ac"){
        output = "";
    } else if(btnValue === "del"){
        output = output.toString().slice(0, -1);
    } else {
        if(output === "" && specialChar.includes(btnValue)) return;
        output += btnValue;
    }

    input.value = output;
};


buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});