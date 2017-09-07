import React from 'react';

import './answerComponent.scss';

const Answer = (props) => (
    <div className="answer">
        {props.selectedNumbers.map((number,i)=>
            <span key={i} onClick={() => props.unselectNumber(number)} className="answer__selected-number">{number}</span>
        )}
    </div>
);

export default Answer;