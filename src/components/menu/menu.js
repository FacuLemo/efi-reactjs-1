import { Component } from "react";
import "./menu.css";

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

    handleClick(){
        console.log('auch') //testeo
    }

    renderItemsNames(items,style){ //se recibe la lista de objetos y los estilos 
        //Es probable que esto deba ser reestructurado! soy un gil
        let itemsNames=[]
        for(let item of items){
                itemsNames.push(item.name)
        }
        return ( //quizás cada elemento deba ser un componente a ser creado en vez de mapear los items
        //sí!, y ese cosito tenga el estado de 'activo' para mostrar la otra ventana
        //podemos trabajar fácil con los id de cada obj tmb
            <div className={style} >
            {itemsNames.map((name) => (
               <p onClick={this.handleClick} >{name}</p>
            ))}
            </div>
        )
    }

    render(){
        //menuitems:[name, isFolder, id, idPadre]
        //Mostrar PRIMERO los que idPadre=idFirstlevel
        //Hacerle Flecha si isFolder=true
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
