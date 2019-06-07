import React from 'react';

const Options = (props) => {
    return (
        <div className="options">
            <img src="../assets/images/rock.png" onClick={() => props.onClickChoose('rock')} alt="Rock" className="rock" />
            <img src="../assets/images/paper.png" onClick={() => props.onClickChoose('paper')} alt="Paper" className="paper" />
            <img src="../assets/images/scissors.png" onClick={() => props.onClickChoose('scissors')} alt="Scissors" className="scissors" />
        </div>
    )
};

export default Options;