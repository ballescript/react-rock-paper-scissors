import React from 'react';

const Results = () => {
    return (
        <div className="results">
            <div>
                <h1>Me</h1>
                <span className="score">3</span>
            </div>
            <div className="hyphen">
                <span className="score">-</span>
            </div>
            <div>
                <h1>CPU</h1>
                <span className="score">8</span>
            </div>
        </div>
    )
};

export default Results;