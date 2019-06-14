import React, { Component } from "react"
import { Menu } from 'semantic-ui-react'


export default class Header extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state
    return(
        <Menu inverted>
         <Menu.Item name='Trivia Game Name' active={activeItem === 'home'} onClick={this.handleItemClick} />
         <Menu.Item
           className="right aligned"
           name='🏆'
           active={activeItem === '🏆'}
           onClick={this.handleItemClick}
         />
       </Menu>
    )
  }
}
