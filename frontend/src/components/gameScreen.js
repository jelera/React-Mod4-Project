import React, { Component } from "react"
import PlayersContainer from "../containers/playersContainer"
import TriviaContainer from "../containers/triviaContainer"
import { Container } from 'semantic-ui-react'


export default class Game extends Component {
  constructor(){
    super()
    this.state = {
      gameActive: false,
      currentPlayer: 0,
      score: [],
      question: 0,
      answered: false,
      clickedAnswer: "",
      correct: null,
      names: []
    }
  }

  updateGameActiveState = () => {
    this.setState({
      gameActive: !this.state.gameActive
    })
  }

  determineScores = () => {
    const returnArr = []
    for (let i = 0; i < this.props.players; i++) {
      returnArr.push(0)
    }
    return returnArr
  }

  componentDidMount() {
    this.setState({
      score: this.determineScores()
    })
  }

  updateCurrentPlayer = () => {
    let newCurrentPlayer = this.state.currentPlayer + 1
    if (newCurrentPlayer === this.props.players) {
      newCurrentPlayer = 0
    }
    this.setState({
      currentPlayer: newCurrentPlayer,
      correctAnswer: false
    })
  }

  addPoint = (event) => {
    let newScore = this.state.score.slice()
    newScore[this.state.currentPlayer] += 1
    this.setState({
      score: newScore,
      answered: true,
      clickedAnswer: event.target.textContent,
      correct: event.target.textContent === this.decodeHTML(this.props.gameData[this.state.question].correct_answer)
    })
  }

  handleClick = (event) => {
    if (event.target.textContent === this.decodeHTML(this.props.gameData[this.state.question].correct_answer)) {
      this.addPoint(event)
    } else {
      this.setState({
        answered: true,
        clickedAnswer: event.target.textContent,
        correct: event.target.textContent === this.decodeHTML(this.props.gameData[this.state.question].correct_answer)
      })
    }
  }

  nextQuestion = () => {
    if (this.state.question + 1 === this.props.players * 10) {
      const highScore = Math.max(...this.state.score)
      const winArr = []
      const winEmojiIndex = []
      for (let i = 0; i < this.state.score.length; i++){
        if (this.state.score[i] === highScore) {
          winArr.push(this.state.names[i])
          winEmojiIndex.push(i)
        }
      }
      this.props.endGame(winArr, winEmojiIndex)
    } else {
      this.updateCurrentPlayer()
      this.setState({
        question: this.state.question + 1,
        answered: false
      })
    }
  }

  decodeHTML = (html) => {
    let txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

  addNames = (name) => {
    this.setState({
      names: [...this.state.names, name]
    })
  }

  render() {
    return(
      <Container>
        <TriviaContainer
          gameData={this.props.gameData}
          players={this.props.players}
          updateCurrentPlayer={this.updateCurrentPlayer}
          answered={this.state.answered}
          clickedAnswer={this.state.clickedAnswer}
          correct={this.state.correct}
          decodeHTML={this.decodeHTML}
          gameActive={this.state.gameActive}
          addPoint={this.addPoint}
          nextQuestion={this.nextQuestion}
          handleClick={this.handleClick}
          question={this.state.question}/>
        <PlayersContainer
          addNames={this.addNames}
          score={this.state.score}
          gameActive={this.state.gameActive}
          correctAnswer={this.state.correctAnswer}
          currentPlayer={this.state.currentPlayer}
          players={this.props.players}
          updateGameActiveState={this.updateGameActiveState}/>
      </Container>
    )
  }
}
