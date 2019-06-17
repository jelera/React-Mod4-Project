import React, { Component } from "react"
import PlayersContainer from "../containers/playersContainer"
import TriviaContainer from "../containers/triviaContainer"
import { Container } from 'semantic-ui-react'


export default class Game extends Component {


  render() {
    return(
      <Container>
        <TriviaContainer />
        <PlayersContainer players={this.props.players}/>
      </Container>
    )
  }
}
