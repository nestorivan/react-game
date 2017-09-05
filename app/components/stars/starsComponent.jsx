import React from 'react';
import _ from 'lodash';

import './starsComponent.scss';

const Stars = (props) => {
    const numberOfStars = _.random(1,9);

    return (
        <div className="stars">
            {_.range(numberOfStars).map(i => 
                <i key={i} className="fa fa-star stars__star"></i>
            )}
        </div>
    );
}

export default Stars;