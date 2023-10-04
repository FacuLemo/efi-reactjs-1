import { Component } from "react";
import getChildren from "../menu/GetChildren";
import FolderMenu from "../foldermenu/FolderMenu.js";

class ItemMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
    this.showFolderMenu = null;
    }

    handleClick(){
        if (this.props.child.isFolder===true) {
            let children = getChildren(this.props.child,this.props.menuItems)
            let isActive = !this.state.active
            this.setState({
                active: isActive
            })
            this.showFolderMenu = <FolderMenu items={children} colorBg={this.props.colorBg} menuItems={this.props.menuItems}/> // pasar como param. los items de los cuales item.id sea padre
        }
    }

    render(){
        return(
            <div>
                <div onClick={()=>(this.handleClick())} style={{
                        margin:'5px',
                        backgroundColor:(this.state.active ? this.props.colorActive : ''),
                    }}>
                     
                        {this.props.child.name} 
                   
                </div>
                
                    {(this.state.active ? this.showFolderMenu : '')}
                
            </div>
            
        )
    }
}
export default ItemMenu