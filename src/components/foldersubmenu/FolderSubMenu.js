import { Component } from "react";
import ItemSubMenu from "../itemsubmenu/ItemSubMenu";
import "./../shared_styles/Folder.css";


class FolderSubMenu extends Component {
  
    render(){
        let width = this.props.offset.current.offsetWidth +'px'
        
        console.log('FolderSubMenu : '+width)

        return (
            <>
                <div className="folderMenu" style={{
                    backgroundColor:this.props.colorBg,
                    marginLeft: width,
                    marginTop: '-45px',
                }}>
                    {this.props.items.map((item) => (
                    <ItemSubMenu offset={this.props.offset} child={item} colorActive={this.props.colorActive} menuItems={this.props.menuItems} colorBg={this.props.colorBg} key={item.id}/> 
                    ))}
                </div>
                
            </>
        )
    }
}

export default FolderSubMenu