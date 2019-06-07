import React from 'react';

const Timeline = ({message, timeline}) => {
    return (
        <div>
            <div>
                {message}
            </div>
            <div>
                <span>{timeline.map(x=><div>{x}</div>).reverse()}</span>
            </div>
        </div>
    )
};

export default Timeline;