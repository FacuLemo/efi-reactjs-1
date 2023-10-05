import { Component } from "react";
import getChildren from "../menu/GetChildren";
import FolderSubMenu from "../foldersubmenu/FolderSubMenu.js";
import './../shared_styles/ItemMenu.css'
class ItemSubMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
    this.showFolderSubMenu = null; // ver si no se está ya adentro de un foldermenu
                                //si se estuviera, mostrar el foldermenu a la derecha
    }

    handleClick(){
        if (this.props.child.isFolder===true) {


            let children = getChildren(this.props.child,this.props.menuItems)
            let isActive = !this.state.active
            this.setState({
                active: isActive
            })
            this.showFolderMenu = <FolderSubMenu offset={this.props.offset} items={children} colorBg={this.props.colorBg} menuItems={this.props.menuItems}/> // pasar como param. los items de los cuales item.id sea padre
        }
    }

    render(){

        return(
            <div>
                <div className={this.props.child.isFolder && this.state.active?"navItem folder active":this.props.child.isFolder 
                && !this.state.active?'navItem folder inactive':'navItem'} onClick={()=>(this.handleClick())} style={{
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
export default ItemSubMenu