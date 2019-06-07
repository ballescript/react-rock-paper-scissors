import React from 'react';

const Timeline = ({timelineResult, currentGameResult}) => {
    const imagePath = "../assets/images/";

    if (currentGameResult !== null) {
        return (
            <div className="timeline">
                <span>{timelineResult.map(x=><li><img src={`${imagePath}${x}`+".png"} alt={x}/></li>).reverse()}</span>
            </div>
        )
    }
    
    return <div></div>

};

export default Timeline;