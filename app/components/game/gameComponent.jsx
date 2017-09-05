import React, { Component } from 'react';
import Button from './../button/buttonComponent';
import Stars from './../stars/starsComponent';
import Answer from './../answer/answerComponent';
import Numbers from './../numbers/numbersComponent';

import './gameComponent.scss';

export default class Game extends Component {
    state = {}
    render() {
        return (
            <div className="game">
                <div className="game__title">
                    <h3>Play Nine</h3>
                </div>
                <div className="game__container">
                    <div className="game__section">
                        <Stars />
                    </div>
                    <div className="game__section">
                        <Button />
                    </div>
                    <div className="game__section">
                        <Answer />
                    </div>
                </div>
                <div className="game__numbers">
                    <Numbers />
                </div>
            </div>
        );
    }
}