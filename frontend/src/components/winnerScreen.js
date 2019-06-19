import React, { Component } from "react"
import { Button } from 'semantic-ui-react'
const winners = [
  'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/cat-face_1f431.png',
  'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/dog-face_1f436.png',
  'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/fox-face_1f98a.png',
  'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/frog-face_1f438.png']

export default class Winner extends Component {

  renderWinners = () => {
    let winnersComponents = []
    for (let i = 0; i < this.props.winners.length; i++) {
      winnersComponents.push(
        <div style={{textAlign: "center", padding: "10px", margin: "20px"}}>
          <h1>{this.props.winners[i]}</h1>
          <img alt="" src={winners[this.props.winnerEmojiIndex[i]]}></img>
        </div>
      )
    }
    return winnersComponents
  }

  render() {
    return(
      <div style={{textAlign: "center"}}>
        <Button onClick={this.props.newGame}>New Game</Button>
        <h1>Winner's Circle</h1>
        <img alt="" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/200/trophy_1f3c6.png"></img>
        <br></br>
        <br></br>
        {this.renderWinners()}
      </div>
    )
  }
}
