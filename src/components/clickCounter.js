import React, { useState } from "react";


const ClickCounter = () =>{
   
    const [clickCount, setClickCount] = useState(0);

    const increaseCount = () =>{
        setClickCount(clickCount+1)
    }

    return(
        <div>
            <p>Button clicked {clickCount} times</p>
            <button onClick={increaseCount}>Click me</button>
        </div>
    );

}


export default ClickCounter;