import React, { Component } from "react"
import { Container, Segment, Button } from 'semantic-ui-react'
import TriviaButton from "../components/triviaButton"


export default class TriviaContainer extends Component {
  constructor(){
    super()
    this.state = {
      question: 0,
      answered: false,
      clickedAnswer: "",
      correct: null
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
    arrayAnswers = arrayAnswers.sort()
    return arrayAnswers.map(answer => <TriviaButton
      handleClick={this.handleClick}
      clickedAnswer={this.state.clickedAnswer}
      correct={this.state.correct}
      answered={this.state.answered}
      addPoint={this.props.addPoint}
      decodeHTML={this.decodeHTML}
      answer={answer}
      />)
  }

  handleClick = (event) => {
    this.setState({
      answered: true,
      clickedAnswer: event.target.textContent,
      correct: event.target.textContent === this.decodeHTML(this.props.gameData[this.state.question].correct_answer)
    })
  }

  answeredQuestion = () => {
    const dataObj = this.props.gameData[this.state.question];
    return !this.state.answered
    ?
      <Segment size="massive">{this.decodeHTML(dataObj.category).toUpperCase()}</Segment>
    :
      <Segment size="massive">Correct Answer: {this.decodeHTML(dataObj.correct_answer)}
        <Button floated="right" onClick={this.nextQuestion}>Next Question -></Button>
      </Segment>
  }

  nextQuestion = () => {
    this.props.updateCurrentPlayer()
    this.setState({
      question: this.state.question + 1,
      answered: false
    })
  }

  renderQuestion = () => {
    const dataObj = this.props.gameData[this.state.question]
    return <div>
             <h1>Round {Math.ceil((this.state.question + 1) / this.props.players)}</h1>
             {this.answeredQuestion()}
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
