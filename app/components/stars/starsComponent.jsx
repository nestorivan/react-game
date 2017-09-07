import React from 'react';
import _ from 'lodash';

import './starsComponent.scss';

const Stars = (props) => {
    return (
        <div className="stars">
            {_.range(props.numberOfStars).map(i =>
                <i key={i} className="fa fa-star stars__star"></i>
            )}
        </div>
    );
}

export default Stars;