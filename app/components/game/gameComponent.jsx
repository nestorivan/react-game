import React, {Component} from 'react';
import Button from './../button/buttonComponent';
import Stars from './../stars/starsComponent';
import Answer from './../answer/answerComponent';
import Numbers from './../numbers/numbersComponent';

import './gameComponent.scss';

export default class Game extends Component {
    state = {
        selectedNumbers: [],
        numberOfStars: _.random(1,9)
    }

    selectNumber = (clickedNumber) => {
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0)
            return;

        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
            .filter(number => number !== clickedNumber)
        }))
    }

    render() {
        const {selectedNumbers , numberOfStars} = this.state;
        return (
            <div className="game">
                <div className="game__title">
                    <h3>Play Nine</h3>
                </div>
                <div className="game__container">
                    <div className="game__section">
                        <Stars numberOfStars={numberOfStars}/>
                    </div>
                    <div className="game__section">
                        <Button selectedNumbers={selectedNumbers}/>
                    </div>
                    <div className="game__section">
                        <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
                    </div>
                </div>
                <div className="game__numbers">
                    <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber}/>
                </div>
            </div>
        );
    }
}