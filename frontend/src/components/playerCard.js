import React, { Component } from "react"
import { Card, Icon, Image, Input } from 'semantic-ui-react'
const users = ['🐱', '🐶', '🦊', '🐸']

export default class PlayerCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      score: 0,
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

  // renderInput = () => {
  //   if (this.props.gameActive) {
  //     return <Input type="password" placeholder="Type Answer" maxLength="1"/>
  //   }
  // }

  highlightPlayer = () => {
    if (this.props.emoji === this.props.players.currentPlayer){
      return "1px solid green"
    }
  }

  // componentDidMount() {
  //   this.highlightPlayer()
  // }

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
      <Card style={{border: `${this.highlightPlayer()}`}}>
        <h1 style={{fontSize: "5rem", textAlign: "center"}}>{users[this.props.emoji]}</h1>
        <Card.Content>
          {this.renderName()}
        </Card.Content>
        <Card.Content extra>
          <Icon name='trophy' />
          {this.state.score}
        </Card.Content>
      </Card>
    )
  }
}
