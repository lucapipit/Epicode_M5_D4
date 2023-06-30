import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import StarsAverage from './StarsAverage';


function StarsSingleBook({ asin, allComments }) {

    const [filteredComments, setFilteredComments] = useState([]);

    function myFilter() {
        let myFilteredComments = allComments.filter((el) => {
            if (el.elementId == asin) {
                return true
            }
        });
        return setFilteredComments(myFilteredComments);
    }

    useEffect(() => {
        myFilter();
    }, [allComments])

    return (
        <>
            <span className='d-flex align-items-center'>{<StarsAverage filteredComments={filteredComments}/>}</span>
            <span className='mx-1'>({filteredComments.length})</span>

        </>
    )
}

export default StarsSingleBook