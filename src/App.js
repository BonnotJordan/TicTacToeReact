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
          null,null,null,
          null,null,null,
          null,null,null,
      ],
      playerTurn: 'X',
      winner: null
    }
  }
  updateBoard(location,playerTurn) {
      if(this.state.gameBoard[location] === 'X' || this.state.gameBoard[location] === 'O' ||this.state.winner){
          // Impossible to move
          return;
      }
      let currentGameBoard = this.state.gameBoard;
      currentGameBoard.splice(location, 1, this.state.playerTurn);
      this.setState({gameBoard: currentGameBoard});
      let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
      if(topRow === "XXX" || topRow === "OOO"){
          this.setState( { winner: this.state.playerTurn});
          return;
      }
      let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
      if(middleRow === "XXX" || middleRow === "OOO"){
          this.setState( { winner: this.state.playerTurn});
          return;
      }
      let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
      if(bottomRow === "XXX" || bottomRow === "OOO"){
          this.setState( { winner: this.state.playerTurn});
          return;
      }
      let leftColumn = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
      if(leftColumn === "XXX" || leftColumn === "OOO"){
          this.setState( { winner: this.state.playerTurn});
          return;
      }
      let centerColumn = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
      if(centerColumn === "XXX" || centerColumn === "OOO"){
          this.setState( { winner: this.state.playerTurn});
          return;
      }
      let rightColumn = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
      if(rightColumn === "XXX" || rightColumn === "OOO"){
          this.setState( { winner: this.state.playerTurn});
          return;
      }
      let diag1 = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
      if(diag1 === "XXX" || diag1 === "OOO"){
          this.setState( { winner: this.state.playerTurn});
          return;
      }
      let diag2 = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
      if(diag2 === "XXX" || diag2 === "OOO"){
          this.setState( { winner: this.state.playerTurn});
          return;
      }
      let moves = this.state.gameBoard.join('').replace(/ /g, '');
      if (moves.length ===9){
          this.setState({winner: 'draw'});
      }
      this.setState({playerTurn: (this.state.playerTurn === 'X') ? 'O' : 'X'});
  }
  resetBoard(){
      this.setState({
          gameBoard: [
              null,null,null,
              null,null,null,
              null,null,null
          ],
          playerTurn: 'X',
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
