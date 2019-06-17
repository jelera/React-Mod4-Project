import React, { Component } from "react"


export default class Start extends Component {


  render() {
    return (
      <div>
        <button onClick={this.props.startGame}>Start Game</button>
      </div>
    )
  }
}
