import _ from 'lodash'
import React, { Component } from "react"
import { Button, List, Transition } from 'semantic-ui-react'

const users = ['🐱', '🐶', '🦊', '🐸']


export default class Start extends Component {
  state = { items: [] }

  handleAdd = () => this.setState(prevState => ({ items: users.slice(0, prevState.items.length + 1) }))

  handleRemove = () => this.setState(prevState => ({ items: prevState.items.slice(0, -1) }))

  showStartButton = () => {
    if (this.state.items.length) {
      return (
        <Button onClick={event => this.props.startGame(this.state.items.length)} animated='fade'>
          <Button.Content visible>Start Game</Button.Content>
          <Button.Content hidden>{this.state.items.length} Players</Button.Content>
        </Button>
      )
    }
  }

  render() {
    const { items } = this.state
    return (
      <div style={{marginTop: "50px"}}>
        <h1>Welcome to Super Duper Fun Time Trivia App 2000</h1>
        <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVIMNpRVKnwOOO-XhgcrAeK_ohSolmBxsoW4zIdU9Rd1HNofqRg"></img>
        <div style={{minHeight: "275px"}}>
          <h1>Please Select Number of Players</h1>
          <Button.Group>
            <Button disabled={items.length === 0} icon='minus' onClick={this.handleRemove} />
            <Button disabled={items.length === users.length} icon='plus' onClick={this.handleAdd} />
          </Button.Group>
          <Transition.Group as={List} duration={200} size='massive' verticalAlign='middle'>
            {items.map(item => (
              <List.Item key={item}>
                <List.Content header={_.startCase(item)} />
              </List.Item>
            ))}
          </Transition.Group>
        </div>
        {this.showStartButton()}

      </div>
    )
  }
}
