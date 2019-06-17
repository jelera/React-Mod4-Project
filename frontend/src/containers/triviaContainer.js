import React, { Component } from "react"
import { Container, Segment, Button } from 'semantic-ui-react'


export default class TriviaContainer extends Component {
  constructor(){
    super()
    this.state = {
      question: 0,
      answered: false
    }
  }

  renderTriviaContainer = () => {
    return this.props.gameActive ? this.renderQuestion() : <h1>Please Enter Player Names</h1>
  }

  decodeHTML = (html) => {
  	let txt = document.createElement('textarea')
  	txt.innerHTML = html
  	return txt.value
  }

  generateAnswers = () => {
    const question = this.props.gameData[this.state.question]
    let arrayAnswers = [...question.incorrect_answers, question.correct_answer]
    arrayAnswers = arrayAnswers.sort(answer => answer.length)
    return arrayAnswers.map(answer => <Button fluid basic size="huge" onClick={!this.state.answered ? event => this.handleClick(event) : null} >{answer}</Button>)
  }

  handleClick = (event) => {
    if (event.target.textContent === this.props.gameData[this.state.question].correct_answer) {
      event.target.style.border = "1px solid green"
    } else {
      event.target.style.border = "1px solid red"
    }
    this.setState({
      answered: true
    })
  }

  renderQuestion = () => {
    const dataObj = this.props.gameData[this.state.question]
    return <div>
             <h1>Round {Math.ceil(this.state.question + 1 / 4)}</h1>
             <Segment size="massive">{this.decodeHTML(dataObj.category).toUpperCase()}</Segment>
             <Segment size="huge">Question: {this.decodeHTML(dataObj.question)}</Segment>
             <Segment.Group>
               {this.generateAnswers()}
             </Segment.Group>
           </div>
  }




  render() {
    return(
      <Container style={{height: "60vh"}}>
        {this.renderTriviaContainer()}
      </Container>
    )
  }
}
