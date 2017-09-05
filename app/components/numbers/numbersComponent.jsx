import React from 'react';
import _ from 'lodash';

import './numbersComponent.scss';

const Numbers = () => {
    // const arrayOfNumbers = _.range(1,10);
    return (
        <div className="numbers">
            {Numbers.list.map((number, i) =>
                <span key={i} className="numbers__number" >{number}</span>
            )}
        </div>
    );
}

Numbers.list = _.range(1, 10);

export default Numbers;