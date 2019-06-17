import React, { Component } from "react"
import { Grid } from 'semantic-ui-react'
import PlayerCard from "../components/playerCard"


export default class PlayersContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: {
        playerNamesEntered: 0,
        numPlayers: props.players,
        currentPlayer: props.currentPlayer
      }
    }
  }

  updateName = () => {
    this.setState({
      players: {
        playerNamesEntered: this.state.players.playerNamesEntered + 1,
        numPlayers: this.state.players.numPlayers
      }
    })
  }

  renderCards = () => {
    let playerCard = []
      for (let i=0; i < this.props.players; i++) {
        playerCard.push(
          <Grid.Column>
            <PlayerCard
              emoji={i}
              updateName={this.updateName}
              players={this.state.players}
              gameActive={this.props.gameActive}
              updateGameActiveState={this.props.updateGameActiveState}/>
          </Grid.Column>
        )
      }
    return playerCard
  }

  render() {
    return(
      <Grid centered relaxed="very" columns={4}>
        {this.renderCards()}
      </Grid>
    )
  }
}
