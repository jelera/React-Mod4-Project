import React, { Component } from "react"
import PlayersContainer from "../containers/playersContainer"


export default class Game extends Component {


  render() {
    return(
      <div>
        <p>This is the game container</p>
        
        <PlayersContainer />
      </div>
    )
  }
}
