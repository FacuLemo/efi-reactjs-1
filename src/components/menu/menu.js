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
    
    renderFirstLevel(items,style){ //se recibe la lista de objetos y los estilos 
        const {background:bg, itemBackground:folderMenuBg, itemColor:color, itemActive:colorActive} = style;
        //TODO: ver por qué corno no desempaqueta como la gente este objeto aweonao
        //console.log(bg,folderMenuBg,color,colorActive)
        return (
            <div>
                <ul style={{
                    backgroundColor: bg,
                    color: color,
                    display: "flex",
                    justifyContent: "center",
                    listStyle: "none",
                }}>
                    {items.map((item) => (
                        <ItemMenu child={item} colorActive={colorActive} colorBg={folderMenuBg} menuItems={this.props.data.menuItems} key={item.id}/> 
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
                    this.renderFirstLevel(firstLevel,this.props.data.configColor)
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
