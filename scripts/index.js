"use strict";

window.onload = function () {
    const submitBtn = document.getElementById("submitForm");
    submitBtn.onclick = getRoomRates;
}

function getRoomRates() {
    //get # of party
    //test if it's within range; return message if not; otherwise proceed to calculate 
    const numAdults = Number(document.getElementById("numAdults").value);
    const numChildren = Number(document.getElementById("numChildren").value);
    const message = document.getElementById("message");
    const party = numAdults + numChildren;

    //radiobox input; test if they're checked or not; and party size
    const queenChecked = document.getElementById("queen").checked;
    const kingChecked = document.getElementById("king").checked;
    const suiteChecked = document.getElementById("2bed").checked;

    if (numAdults > 4 || numAdults < 1) {
        message.innerHTML = "Only between 1-4 adults";
        return;
    }
    else if (numChildren > 4 || numChildren < 0) {
        message.innerHTML = "None<sub>(hopefully, that's what you're here for, no?)</sub> or up to 4 children";
        return;
    }
    else {
        message.innerHTML = "";
        //finding the current month and making sure the day doesn't impact it(June 1st is what I have in mind)

        let findMonth = new Date((document.getElementById("checkin").value));  //the format is returned as in one day behind
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

        //radiobox input; test if they're checked or not
        const queenChecked = document.getElementById("queen").checked;
        const kingChecked = document.getElementById("king").checked;
        const suiteChecked = document.getElementById("2bed").checked;


        //radiobox input for discount
        const seniorChecked = document.getElementById("senior").checked;
        const militaryChecked = document.getElementById("military").checked;
        let discountRate;
        let justDiscount;

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
        else {
            queenCost = 150;
            kingCost = 150;
            suiteCost = 210;
        }

        //values for rooms are set; find the room that was checked and multiple it per day
        //I decided to also test for party size here too, since not much has been computed
        if (queenChecked) {
            if (party > 5) {
                message.innerHTML = "The room you selected will not hold your party";
                return;
            }
            else {
                justRoomCost = getDaysBooked * queenCost;
            }
        }
        else if (kingChecked) {
            if (party > 2) {
                message.innerHTML = "The room you selected will not hold your party";
                return;
            }
            justRoomCost = getDaysBooked * kingCost;
        }
        else if (suiteChecked) {
            if (party > 6) {
                message.innerHTML = "The room you selected will not hold your party";
                return;
            }
            else {
                justRoomCost = getDaysBooked * suiteCost;
            }
        }

        //test for discount; justRoomCost is already found so, discount is next
        if (seniorChecked) {
            discountRate = 0.1;
            justDiscount = justRoomCost * discountRate;
        }
        else if (militaryChecked) {
            discountRate = 0.2;
            justDiscount = justRoomCost * discountRate;
        }
        else {
            discountRate = 0;
            justDiscount = justRoomCost;
        }

        //I decided to declare these variables here because they aren't needed anywhere else but in the end, no?
        const afterDiscount = justRoomCost - justDiscount;
        const justTax = (afterDiscount * 0.12); //the tax after discounted total has been computed
        const finalCost = (afterDiscount + justTax.toFixed(2)); //adding the afterdiscounted total with the tax to get final

        //return the computed values
        returnRoomCost.innerHTML = `Room cost: $${justRoomCost}`;
        returnDiscount.innerHTML = `Discount: ${discountRate * 100}%`;
        returnDiscountedTotal.innerHTML = `Discounted Total: $${justDiscount.toFixed(2)}`;
        returnTax.innerHTML = `Tax: $${justTax}`;
        returnFinalCost.innerHTML = `Total: $${finalCost}`;
    }
}
/*2:57PM I just realized I overcomplicated all of this. ALL OF IT...3:49PM As if I couldn't overcomplicate it even more...*/