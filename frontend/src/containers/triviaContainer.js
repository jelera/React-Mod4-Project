import React, { Component } from "react"
import { Container, Segment, Button } from 'semantic-ui-react'
import TriviaButton from "../components/triviaButton"


export default class TriviaContainer extends Component {

  renderTriviaContainer = () => {
    return this.props.gameActive ? this.renderQuestion() : <h1>Please Enter Player Names</h1>
  }

  generateAnswers = () => {
    const question = this.props.gameData[this.props.question]
    let arrayAnswers = [...question.incorrect_answers, question.correct_answer]
    arrayAnswers = arrayAnswers.sort()
    return arrayAnswers.map(answer => <TriviaButton
      handleClick={this.props.handleClick}
      clickedAnswer={this.props.clickedAnswer}
      correct={this.props.correct}
      answered={this.props.answered}
      addPoint={this.props.addPoint}
      decodeHTML={this.props.decodeHTML}
      answer={answer}
      />)
  }



  answeredQuestion = () => {
    const dataObj = this.props.gameData[this.props.question];
    return !this.props.answered
    ?
      <Segment size="massive">{this.props.decodeHTML(dataObj.category).toUpperCase()}</Segment>
    :
      <Segment size="massive">Correct Answer: {this.props.decodeHTML(dataObj.correct_answer)}
        <Button floated="right" onClick={this.props.nextQuestion}>Next Question -></Button>
      </Segment>
  }



  renderQuestion = () => {
    const dataObj = this.props.gameData[this.props.question]
    return <div>
             <h1>Round {Math.ceil((this.props.question + 1) / this.props.players)}</h1>
             {this.answeredQuestion()}
             <Segment size="huge">Question: {this.props.decodeHTML(dataObj.question)}</Segment>
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
