import React, {Component} from 'react'

export default class ResetButton extends Component {
    render() {
        return(
            <button onClick={this.props.resetGame}>Reset the game</button>
        )
    }
}