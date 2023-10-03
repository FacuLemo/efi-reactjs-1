import { Component } from "react";
import getChildren from "../menu/GetChildren";

class FolderMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
    this.showFolderMenu = null;
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
            <div>
            <ul style={{
                border: 'solid black 3px',
                marginTop: '80px',
            }}>
                {this.props.items.map((item) => (
                <li key={item.id}  onClick={() => this.handleClick(item)}> 
                {item.name} </li>
                ))}
            </ul>
            
            {(this.state.active ? this.showFolderMenu : '')}
            
            </div>
        )
    }
}

export default FolderMenu