import React, { Component } from "react"
import PlayersContainer from "../containers/playersContainer"
import TriviaContainer from "../containers/triviaContainer"
import { Container } from 'semantic-ui-react'


export default class Game extends Component {
  constructor(){
    super()
    this.state = {
      gameActive: false,
      currentPlayer: 0,
      question: 0
    }
  }

  updateGameActiveState = () => {
    this.setState({
      gameActive: !this.state.gameActive
    })
  }

  updateCurrentPlayer = () => {
    let newCurrentPlayer = this.state.currentPlayer + 1
    if (newCurrentPlayer === this.props.players) {
      newCurrentPlayer = 0
    }
    this.setState({
      currentPlayer: newCurrentPlayer
    })
  }

  addPoint = () => {
    console.log("point")
  }

  render() {
    return(
      <Container>
        <TriviaContainer
          gameData={this.props.gameData}
          players={this.props.players}
          updateCurrentPlayer={this.updateCurrentPlayer}
          gameActive={this.state.gameActive}
          addPoint={this.addPoint}
          question={this.state.question}/>
        <PlayersContainer
          gameActive={this.state.gameActive}
          currentPlayer={this.state.currentPlayer}
          players={this.props.players}
          updateGameActiveState={this.updateGameActiveState}/>
      </Container>
    )
  }
}
