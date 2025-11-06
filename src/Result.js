import React from "react";

function Result({ secretNumber, term }) {
    let result;

    if (term) {
        if (term > secretNumber) {
            result = "Higher";
        }
        else if (term < secretNumber) {
            result = "Lower";
        } else if (term == secretNumber) {
            result = "Correct!!!";
        } else {
            result = "Enter Valid Input";
        }
    }

    return <>
        <h3>You Guessed : {result}</h3>
    </>
}

export default Result;