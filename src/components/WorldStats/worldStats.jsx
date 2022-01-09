import React from 'react';
import "./worldStats.css";

const WorldStats = (props) => {
    const { total, about } =props;
    return ( <div className="worldStats-box">
        <h1 className="totalNumbers">{total}</h1>
        <p className="about">{about}</p>
    </div> );
}
 
export default WorldStats;