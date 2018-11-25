import React, { Component } from 'react';
import './App.css';
import Announcement from './Announcement';
import ResetButton from './ResetButton';
import Tile from './Tile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
          'X','O',null,
          null,null,null,
          null,null,null,
      ],
      playerTurn: 'x',
      winner: null
    }
  }
  updateBoard(location,playerTurn) {

  }
  resetBoard(){
      this.setState({
          gameBoard: [
              null,null,null,
              null,null,null,
              null,null,null
          ],
          playerTurn: 'x',
          winner: null
      });
  }
  render() {
    return (
        <div className="container">
          <div className="menu">
            <h1>Tic-Tac-Toe Game</h1>
            <Announcement winner={this.state.winner}/>
            <ResetButton resetGame={this.resetBoard.bind(this)}/>
          </div>
            {this.state.gameBoard.map(
                function (value, index) {
                    return (
                        <Tile
                            key={index}
                            location={index}
                            value = {value}
                            updateBoard={this.updateBoard.bind(this)}
                            playerTurn={this.state.playerTurn} />
                    )
                }.bind(this))}
        </div>
    );
  }
}

export default App;
