"use strict";

window.onload = function () {
    const submitBtn = document.getElementById("submitForm");
    submitBtn.onclick = getRoomRates;
}

function getRoomRates() {

    //finding the current month and making sure the day doesn't impact it(June 1st is the focus)
    const test = document.getElementById("message"); // return values from tests
    let findMonth = new Date((document.getElementById("checkin").value));  //the format is returned as is one day behind
    let fixDay = findMonth.getDate() + 1; //change the day to current
    findMonth.setDate(fixDay); //go into the ENTIRE date and set the day to current DAY; could have an impact
    findMonth = findMonth.getMonth() + 1;//getMonth returns 0-based; add 1 for current month

    //room costs
    let kingCost; 
    let queenCost;
    let suiteCost;
    let justRoomCost;
    //number of days booking 1-24; and room cost
    let getDaysBooked = Number(document.getElementById("daysStay").value);
    
    //radiobox input
    let queenChecked = document.getElementById("queen").checked;
    let kingChecked = document.getElementById("king").checked;
    let suiteChecked = document.getElementById("2bed").checked;

    //get the elements that return the values
    const returnRoomCost = document.getElementById("returnRoomCost");
    const returnDiscount = document.getElementById("returnDiscount");
    const returnDiscountedTotal = document.getElementById("returnDiscountedTotal");
    const returnTax = document.getElementById("returnTax");
    const returnFinalCost = document.getElementById("returnFinalCost");
    
    //The method I'm usin: change all values now and only include those checked later
    //Another: set for each room and have nested if statements for the month
    if (findMonth >= 6 && findMonth <= 8) {
        queenCost = 250;
        kingCost = 250;
        suiteCost = 350;
    }
    else{
        queenCost = 150;
        kingCost = 150;
        suiteCost = 210;       
    }

    //values for rooms are set; find the room that was checked and multiple it per day
    if(queenChecked){
        justRoomCost = getDaysBooked * queenCost;
    }
    else if(kingChecked){
        justRoomCost = getDaysBooked * kingCost;
    }
    else if(suiteChecked){
        justRoomCost = getDaysBooked * suiteCost;
    }

    //return the computed values
    returnRoomCost.innerHTML = `$${justRoomCost}`;    
}

// const test = document.getElementById("message");
// test.innerHTML = "hello";
