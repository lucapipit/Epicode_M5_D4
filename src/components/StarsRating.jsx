import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { StarFill } from "react-bootstrap-icons";

function StarsRating({rating, setRating}) {

    const [hover, setHover] = useState(null);


    return (
        <>
            <span className='me-3'>
                {[...Array(5)].map((el, index)=>{
                    const correctRate = index + 1;
                    return <StarFill 
                    key={nanoid()}
                    size={30}
                    value={correctRate}
                    color={correctRate <= (rating || hover) ? "orange" : "lightGray"}
                    onMouseEnter={()=>{setHover(correctRate)}}
                    onMouseLeave={()=>{setHover(null)}}
                    onClick={()=>setRating(correctRate)}
                    />
                })}
            </span>
        </>
    )
}

export default StarsRating