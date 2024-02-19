import React from "react"

function Keypad (){
    function handleKeypad(event) {
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" name="password" placeholder="Enter Password" onChange={handleKeypad}></input>
        </div>
    )
}

export default Keypad;