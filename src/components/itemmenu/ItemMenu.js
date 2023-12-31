import React, { Component } from 'react'
import getChildren from '../shared_functions/GetChildren'
import FolderMenu from '../foldermenu/FolderMenu.js'
import './../shared_styles/ItemMenu.css'

class ItemMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.showFolderMenu = null
    this.ref = React.createRef()
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleClick () {
    if (this.props.child.isFolder === true) {
      const children = getChildren(this.props.child, this.props.menuItems)
      const isActive = !this.state.active
      this.setState({
        active: isActive
      })
      this.showFolderMenu = <FolderMenu colorActive={this.props.colorActive} items={children} colorBg={this.props.colorBg} menuItems={this.props.menuItems}/>
    }
  }

  handleClickOutside (event) {
    if (this.ref.current && !this.ref.current.contains(event.target) && this.props.child.isFolder) {
      this.setState({
        active: false
      })
    }
  }

  componentDidMount () {
    document.addEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  render () {
    return (
            <div ref={this.ref}>
                <div className={this.props.child.isFolder && this.state.active
                  ? 'navItem folder active'
                  : this.props.child.isFolder &&
                !this.state.active
                    ? 'navItem folder inactive'
                    : 'navItem'} onClick={() => (this.handleClick())} style={{
                      backgroundColor: (this.state.active ? this.props.colorActive : '')
                    }}>
                        {this.props.child.name}
                </div>
                    {(this.state.active ? this.showFolderMenu : '')}
            </div>

    )
  }
}

export default ItemMenu
