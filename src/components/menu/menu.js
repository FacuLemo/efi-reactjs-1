import { Component } from "react";
import "./Menu.css";
import FolderMenu from "../foldermenu/FolderMenu.js";
import getChildren from "./GetChildren";

class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
    this.showFolderMenu = null;
    }

    getFirstLevelItems(){ //retorna los objetos de primer nivel en una lista
        let firstLevel=[]
        let idFirstLevel = this.props.data.idFirstNivel
        let items = this.props.data.menuItems;
        for(let item of items){
            if(item.idPadre===idFirstLevel){
                firstLevel.push(item)
            }
        }
        return firstLevel
    }

    handleClick(item){
        if (item.isFolder===true) {
            let children = getChildren(item,this.props.data.menuItems)
            let isActive = !this.state.active
            this.setState({
                active: isActive
            })
            this.showFolderMenu = <FolderMenu items={children} menuItems={this.props.data.menuItems}/> // pasar como param. los items de los cuales item.id sea padre
        }
    }

    renderItemsNames(items,style){ //se recibe la lista de objetos y los estilos 
        return (
            <div className={style} >
                {items.map((item) => (
                <p onClick={() => this.handleClick(item)} key={item.id}> 
                {item.name} </p>
                ))}
                <div>
                    {(this.state.active ? this.showFolderMenu : '')}
                </div>
            </div>
        )
    }

    render(){
        //Hacerle Flecha si isFolder=true (puede ser otro comp)
        let firstLevel = this.getFirstLevelItems()
        return(
            <div>
                <div>
                {
                    this.renderItemsNames(firstLevel,'header')
                }
                </div>
                
                
            </div>
        )
    }
}

Menu.defaultProps ={
    //si es necesario
}

export default Menu
