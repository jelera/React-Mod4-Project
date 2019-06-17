import React, { Component } from "react"
import PlayersContainer from "../containers/playersContainer"
import TriviaContainer from "../containers/triviaContainer"
import { Container } from 'semantic-ui-react'


export default class Game extends Component {
  constructor(){
    super()
    this.state = {
      gameActive: false
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
        <TriviaContainer gameActive={this.state.gameActive}/>
        <PlayersContainer
          gameActive={this.state.gameActive}
          players={this.props.players}
          updateGameActiveState={this.updateGameActiveState}/>
      </Container>
    )
  }
}
