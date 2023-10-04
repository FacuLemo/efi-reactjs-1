import { Component } from "react";
import ItemMenu from "../itemmenu/ItemMenu";
import "./FolderMenu.css";

class FolderMenu extends Component {
  
    render(){
        return (
            <>
                <div style={{
                    border: 'solid black 1px',
                    backgroundColor:this.props.colorBg,
                    display:'flex',
                    flexDirection:'column',
                    position:'absolute',
                    
                }}>
                    {this.props.items.map((item) => (
                    <ItemMenu child={item} menuItems={this.props.menuItems} colorBg={this.props.colorBg} key={item.id}/> 
                    ))}
                </div>
                
            </>
        )
    }
}

export default FolderMenu