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


  render() {
    return(
      <Container>
        <TriviaContainer
          gameData={this.props.gameData}
          gameActive={this.state.gameActive}
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
