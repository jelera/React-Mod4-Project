import React, { Component } from "react"
import { Card, Icon, Image } from 'semantic-ui-react'
const users = ['🐱', '🐶', '🦊', '🐸']

export default class PlayerCard extends Component {


  render() {
    return(
      <Card>
        <h1 style={{fontSize: "5rem", textAlign: "center"}}>{users[this.props.emoji]}</h1>
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Icon name='trophy' />
          10 Points
        </Card.Content>
      </Card>
    )
  }
}
