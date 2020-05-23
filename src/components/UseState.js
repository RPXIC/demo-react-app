import React, { useState } from 'react'

export default () => {
    const [num, setNum] = useState(0)

    return(
         <div>
            <h3>First use of state to increment num and re-render:</h3>

            <p>The num is: {num}</p>
            
            <button onClick={() => {
                setNum(num + 1)
            }}>Sum 1</button>

            <button onClick={() => {
                setNum(0)
            }}>Clear</button>
        </div>
    )
}
