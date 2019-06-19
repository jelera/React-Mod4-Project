import React, { Component } from "react"
import { Menu } from 'semantic-ui-react'


export default class Header extends Component {


  handleItemClick = () => {alert("Stop snooping around and just play the game!")}

  render() {
    return(
        <Menu inverted>
         <Menu.Item
           name='Super Duper Fun Time Trivia App 2000'
           onClick={this.handleItemClick} />
         <Menu.Item
           className="right aligned"
           name='🏆'
           onClick={this.handleItemClick} />
       </Menu>
    )
  }
}
