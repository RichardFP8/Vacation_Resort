"use strict";

window.onload = function () {
    //using query selector to find input elements with shared name attribrute
    let trackOptions = document.querySelector("input[name='diningOptions']:checked");
    let test = document.getElementById("test");
    if(trackOptions == "payAsYouGo"){
        test.innerHTML = "hello";
    }
    else{
        test.innerHTML = "bye bye";
    }

}
//this is for when Pay as you go is clicked/ also adding the all inclusive to test
function payAsYouGo() {
    let payAsYouGoChecked = document.getElementById("payAsYouGo").checked;
    let allInclusiveChecked = document.getElementById("allInclusive").checked;
    let displayPASG = document.getElementById("payg-options");
    let displayAI = document.getElementById("payg-options");

    let test = document.getElementById("test");
    if(payAsYouGoChecked ){
        displayPASG.style.display = "block";
    // test.innerHTML = "hello";
    }
    else{
        displayPASG.style.display = "none";
        
    }

}

function allInclusive() {
    let allInclusiveChecked = document.getElementById("allInclusive").checked;
    let displayBlock = document.getElementById("ai-options");
    let test = document.getElementById("test");
    if(allInclusiveChecked){
        displayBlock.style.display = "block";
        // test.innerHTML = "bye";
    }
}
//for when allInclusive is not clicked; is for when payASyouGo is clicked
function aiChanged(){
    let payAsYouGoChecked = document.getElementById("payAsYouGo").checked;
    let displayBlock = document.getElementById("ai-options");
    let test = document.getElementById("test");
    if(payAsYouGoChecked){
        displayBlock.style.display = "none";
        test.innerHTML = "balo";
    }
}


//all is a failed attempt;
