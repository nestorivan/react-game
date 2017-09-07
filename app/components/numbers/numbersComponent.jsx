import React from 'react';
import _ from 'lodash';

import './numbersComponent.scss';

const Numbers = (props) => {
    // const arrayOfNumbers = _.range(1,10);

    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0)
            return 'numbers__number selected';

        return 'numbers__number'
    }

    return (
        <div className="numbers">
            {Numbers.list.map((number, i) =>
                <span key={i} onClick={ () => props.selectNumber(number)} className={numberClassName(number)} >{number}</span>
            )}
        </div>
    );
}

Numbers.list = _.range(1, 10);

export default Numbers;