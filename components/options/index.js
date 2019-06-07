import React from 'react';

const Options = () => {
    return (
        <div className="options">
            <img src="../assets/images/rock.png" onClick={() => onClickChoose('rock')} alt="Rock" className="rock" />
            <img src="../assets/images/paper.png" onClick={() => onClickChoose('paper')} alt="Paper" className="paper" />
            <img src="../assets/images/scissors.png" onClick={() => onClickChoose('scissors')} alt="Scissors" className="scissors" />
        </div>
    )
};

export default Options;