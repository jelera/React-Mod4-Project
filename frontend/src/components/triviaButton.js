import React, { Component } from "react"
import { Button } from 'semantic-ui-react'


export default class TriviaButton extends Component {

  //Don't touch me, I work (somehow)
  renderColor = () => {
    if (this.props.answered) {
      if (this.props.clickedAnswer === this.props.decodeHTML(this.props.answer)){
        if (this.props.correct) {
          return "green"
        } else {
          return "red"
        }
      }
    } else {
      return "grey"
    }
  }

  handleOnClicks = (event) => {
    if (!this.props.answered) {
      this.props.handleClick(event)
    }
  }


  render() {
    return (
      <Button fluid color={this.renderColor()} basic size="huge" onClick={event => this.handleOnClicks(event)} >{this.props.decodeHTML(this.props.answer)}</Button>
    )
  }
}
