import React, { Component } from "react"
import { Container } from 'semantic-ui-react'


export default class TriviaContainer extends Component {

  renderTriviaContainer = () => {
    return this.props.gameActive ? <h1>Active game</h1> : <h1>Please Enter Player Names</h1>
  }

  render() {
    return(
      <Container style={{height: "50vh"}}>
        {this.renderTriviaContainer()}
      </Container>
    )
  }
}
