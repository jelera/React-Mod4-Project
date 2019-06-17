import React, { Component } from "react"
import { Grid } from 'semantic-ui-react'
import PlayerCard from "../components/playerCard"


export default class PlayersContainer extends Component {

  renderCards = () => {
    let playerCard = []
      for (let i=0; i < this.props.players; i++) {
        playerCard.push(<Grid.Column><PlayerCard emoji={i}/></Grid.Column>)
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
