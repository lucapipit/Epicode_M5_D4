import React, { useEffect, useState } from 'react';
import { StarFill } from 'react-bootstrap-icons';
import { nanoid } from 'nanoid';

function StarsAverage({ filteredComments }) {
    const [average, setAverage] = useState(null);

    function myAverage() {
        if (filteredComments.length !== 0) {

            let accumulator = 0;
            filteredComments.map((el) => {
                if (el.rate !== NaN) {
                    accumulator += el.rate;
                }
            })

            const myAverage = Math.round(accumulator / filteredComments.length);

            return setAverage(myAverage)
        }
    }


    useEffect(() => {
        myAverage()
    }, [average, filteredComments]);

    return (
        <>
            {
                [...Array(5)].map((el, index) => {

                    return <StarFill
                        key={nanoid()}
                        color={(index < average) ? "orange" : "lightGray"}
                    />
                })
            }
        </>
    )
}

export default StarsAverage