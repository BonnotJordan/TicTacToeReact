import React, {Component} from 'react';
import './Tile.css';

export default class Tile extends Component {
    tileClick(props) {
        props.updateBoard(props.location, props.playerTurn);
    }
    render() {
        return (
            <div className={"tile "+ this.props.location} onClick={() => this.tileClick(this.props)}>
                <p>{this.props.value}</p>
            </div>
        )
    }
}