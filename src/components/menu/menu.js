import { Component } from "react";
import "./Menu.css";
import ItemMenu from "../itemmenu/ItemMenu";

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
    
    renderItemsNames(items,style){ //se recibe la lista de objetos y los estilos 
        return (
            <div>
                <ul className={style}>
                    {items.map((item) => (
                        <ItemMenu child={item} menuItems={this.props.data.menuItems} key={item.id}/> 
                    ))}
                </ul>
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
