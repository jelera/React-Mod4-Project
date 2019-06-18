import React, { Component } from "react"
import GameScreen from "../components/gameScreen"
import StartScreen from "../components/startScreen"
import WinnerScreen from "../components/winnerScreen"


export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      mainContainer: "",
      players: 0,
      gameData: "",
      winners: [],
      winnerEmojiIndex: []
    }
  }

  createNewGameInstance = () => {
    fetch("http://localhost:3000/api/v1/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        winning_score: 0,
        total_rounds: 10,
        winner_id: 0
      })
    }).then(res => res.json()).then(res => this.parseJson(res.game_data))
  }

  parseJson = (json) => {
    let newjson = JSON.parse(json)
    this.setState({
      gameData: newjson
    })
  }

  startGame = (players) => {
    this.createNewGameInstance()
    this.setState({
      mainContainer: "game",
      players: players
    })
  }

  endGame = (winArr, winEmojiIndex) => {
    this.setState({
      mainContainer: "winner",
      winners: winArr,
      winnerEmojiIndex: winEmojiIndex
    })
  }

  renderMainContainer = () => {
    switch(this.state.mainContainer) {
      case "game":
        return <GameScreen gameData={this.state.gameData.results} players={this.state.players} endGame={this.endGame}/>
      case "winner":
        return <WinnerScreen winners={this.state.winners} winnerEmojiIndex={this.state.winnerEmojiIndex}/>
      default:
        return <StartScreen startGame={this.startGame}/>
    }
  }


  render() {
    return(
      <div>
        {this.renderMainContainer()}
      </div>
    )
  }
}
