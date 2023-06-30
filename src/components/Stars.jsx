import React from 'react';
import { Star } from "react-bootstrap-icons";
import { StarFill } from "react-bootstrap-icons";
import "../css/stars.css"


function Stars({ rate }) {
    switch (rate) {
        case 1:
            return <><StarFill /><Star /><Star /><Star /><Star /></>;
        case 2:
            return <><StarFill /><StarFill /><Star /><Star /><Star /></>;
        case 3:
            return <><StarFill /><StarFill /><StarFill /><Star /><Star /></>;
        case 4:
            return <><StarFill /><StarFill /><StarFill /><StarFill /><Star /></>;
        case 5:
            return <><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></>;
    }
}




export default Stars