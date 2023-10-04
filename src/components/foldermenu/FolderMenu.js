import { Component } from "react";
import getChildren from "../menu/GetChildren";
import ItemMenu from "../itemmenu/ItemMenu";
import "./FolderMenu.css";

class FolderMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
        this.showFolderMenu = null; //si el folder menu TIENE active:true, debe buscarse a sí mismo (con las ref)
                                    //y rendererizar el otro foldermenu un "this" a la derecha.
                                    //Si no hubiese lugar, renderizar a la izquierda con un "-this"
    }

    handleClick(item){
        if (item.isFolder===true) {
            let children = getChildren(item,this.props.menuItems)
            let isActive = !this.state.active
            this.setState({
                active: isActive
            })
            console.log(this.state.active)
            this.showFolderMenu = <FolderMenu items={children} menuItems={this.props.menuItems}/> // pasar como param. los items de los cuales item.id sea padre
        }
    }

    render(){
        return (
            <>
                <div style={{
                    border: 'solid black 3px',
                    display:'flex',
                    flexDirection:'column',
                    position:'absolute',
                    
                }}>
                    {this.props.items.map((item) => (
                    <ItemMenu child={item} menuItems={this.props.menuItems} key={item.id}/> 
                    ))}
                </div>
                
                {(this.state.active ? this.showFolderMenu : '')}
                
            </>
        )
    }
}

export default FolderMenu