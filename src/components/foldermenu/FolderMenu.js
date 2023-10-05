import { Component } from "react";
import ItemSubMenu from "../itemsubmenu/ItemSubMenu";
import "./FolderMenu.css";
import React from "react";

class FolderMenu extends Component {
    constructor(props){
        super(props)
        this.folderSize= React.createRef();
    }

    render(){
        return (
            <>
                <div ref={this.folderSize} style={{
                    border: 'solid black 1px',
                    backgroundColor:this.props.colorBg,
                    display:'flex',
                    flexDirection:'column-reverse',
                    position:'absolute',
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