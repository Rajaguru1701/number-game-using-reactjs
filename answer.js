import React from "react";

function Answer({serverNum, term})
{
    let result;
    if(term)
    {
        if(term > serverNum)
        {
            result='Higher Value'
        }
        else if(term < serverNum)
        {
            result='Lower Value'
        }
        else if(term == serverNum)
        {
            result='You Win! Correct Value'
        }
        else{
            result='Enter valid input'
        }
    }
    return(
        <h3>{result}</h3>
    )
}

export default Answer;
