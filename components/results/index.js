import React from 'react';

const Results = ({wins, losses}) => {
    return (
        <div className="results">
            <div>
                <h1>Me</h1>
                <span className="score">{wins}</span>
            </div>
            <div className="hyphen">
                <span className="score">-</span>
            </div>
            <div>
                <h1>CPU</h1>
                <span className="score">{losses}</span>
            </div>
        </div>
    )
};

export default Results;