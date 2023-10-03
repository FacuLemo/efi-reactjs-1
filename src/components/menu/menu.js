import { Component } from "react";
import "./Menu.css";
//import FolderMenu from "../foldermenu/FolderMenu.js";

class Menu extends Component{

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

    handleClick(openable=false){
        if (openable===true) {
            return console.log('me abriste')
        }
        return null
    }

    renderItemsNames(items,style){ //se recibe la lista de objetos y los estilos 
        //Es probable que esto deba ser reestructurado! soy un gil
        return (
            <div className={style} >
            {items.map((item) => (
                <p onClick={() => this.handleClick(item.isFolder)} key={item.id}>{item.name}</p>
            ))}
            </div>
        )
    }

    render(){
        //menuitems:[name, isFolder, id, idPadre]
        //Mostrar PRIMERO los que idPadre=idFirstlevel

        //Hacerle Flecha si isFolder=true (puede ser otro comp)
        let firstLevel = this.getFirstLevelItems()
        return(
            <div>
                {
                    this.renderItemsNames(firstLevel,'header')
                }
            </div>
        )
    }
}

Menu.defaultProps ={
    //si es necesario
}

export default Menu
