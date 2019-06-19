import React, { Component } from "react"
import { Card, Icon, Input } from 'semantic-ui-react'
const users = ['🐱', '🐶', '🦊', '🐸']

export default class PlayerCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      submitted: false,
      active: false
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

  highlightPlayer = () => {
    if (this.props.emoji === this.props.currentPlayer){
      return "green"
    } else {
      return "grey"
    }
  }

  submitName = (event) => {
    event.preventDefault()
    this.props.addNames(this.state.name)
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
      <Card color={this.highlightPlayer()}>
        <h1 style={{fontSize: "5rem", textAlign: "center"}}>{users[this.props.emoji]}</h1>
        <Card.Content>
          {this.renderName()}
        </Card.Content>
        <Card.Content extra>
          <Icon name='trophy' />
          {this.props.score}
        </Card.Content>
      </Card>
    )
  }
}
