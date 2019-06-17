import React, { Component } from "react"
import GameScreen from "../components/gameScreen"
import StartScreen from "../components/startScreen"
import WinnerScreen from "../components/winnerScreen"


export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      mainContainer: ""
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
    console.log(newjson.results)
  }

  startGame = () => {
    this.createNewGameInstance()
    this.setState({
      mainContainer: "game"
    })
  }

  renderMainContainer = () => {
    switch(this.state.mainContainer) {
      case "game":
        return <GameScreen />
      case "winner":
        return <WinnerScreen />
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
