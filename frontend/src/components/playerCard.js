import React, { Component } from "react"
import { Card, Icon, Image, Input } from 'semantic-ui-react'
const users = ['🐱', '🐶', '🦊', '🐸']

export default class PlayerCard extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      score: 0,
      submitted: false
    }
  }

  renderName = () => {
    return this.state.submitted
    ?
      <Card.Header>{this.state.name}</Card.Header>
    :
      <form onSubmit={this.submitName}>
        <Input onChange={event => this.setState({name: event.target.value})} placeholder="Type name..." />
      </form>
  }

  renderInput = () => {
    if (this.props.gameActive) {
      return <Input type="password" placeholder="Type Answer" maxLength="1"/>
    }
  }

  submitName = (event) => {
    event.preventDefault()
    this.setState({
      submitted: true
    })
    this.props.updateName()
    if (this.props.players.numPlayers - 1 === this.props.players.playerNamesEntered) {
      this.props.updateGameActiveState()
    }
  }

  render() {
    return(
      <Card>
        <h1 style={{fontSize: "5rem", textAlign: "center"}}>{users[this.props.emoji]}</h1>
        <Card.Content>
          {this.renderName()}
          {this.renderInput()}
        </Card.Content>

        <Card.Content extra>
          <Icon name='trophy' />
          {this.state.score}
        </Card.Content>
      </Card>
    )
  }
}
