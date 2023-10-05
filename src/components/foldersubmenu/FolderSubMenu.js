import { Component } from 'react'
import ItemSubMenu from '../itemsubmenu/ItemSubMenu'
import './../shared_styles/Folder.css'

class FolderSubMenu extends Component {
  render () {
    const WIDTH = this.props.offset.current.offsetWidth + 'px'
    return (
              <div className="folderMenu" style={{
                  backgroundColor: this.props.colorBg,
                  marginLeft: WIDTH,
                  marginTop: '-45px'
                }}>
                    {this.props.items.map((item) => (
                    <ItemSubMenu offset={this.props.offset} child={item} colorActive={this.props.colorActive} menuItems={this.props.menuItems} colorBg={this.props.colorBg} key={item.id}/>
                    ))}
                </div>
    )
  }
}

export default FolderSubMenu
