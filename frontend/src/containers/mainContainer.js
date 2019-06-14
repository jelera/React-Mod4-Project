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

  startGame = () => {
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
