import React, { Component } from 'react'
import ItemSubMenu from '../itemsubmenu/ItemSubMenu'
import './../shared_styles/Folder.css'

class FolderMenu extends Component {
  constructor (props) {
    super(props)
    this.folderSize = React.createRef()
  }

  render () {
    return (
            <>
                <div className="folderMenu" ref={this.folderSize} style={{
                  backgroundColor: this.props.colorBg
                }}>
                    {this.props.items.map((item) => (
                    <ItemSubMenu offset={this.folderSize} colorActive={this.props.colorActive} child={item} menuItems={this.props.menuItems} colorBg={this.props.colorBg} key={item.id}/>
                    ))}
                </div>
            </>
    )
  }
}

export default FolderMenu
