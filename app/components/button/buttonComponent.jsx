import React from 'react';

import './buttonComponent.scss';

const Button = (props) => (
    <div className="button">
        <button disabled={props.selectedNumbers.length === 0} className="button__equal-button">=</button>
    </div>
);

export default Button;