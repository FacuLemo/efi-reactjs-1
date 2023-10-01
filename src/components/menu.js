import { Component } from "react";

class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            //algo:props.algo
        }

    }
    render(){
        const {configColor,idFirstNivel,menuItems} = this.props.data
        console.log(configColor)
        console.log(idFirstNivel)
        console.log(menuItems)
        // if ( menuItems==[] ) return null 

        //menuitems:[name, isFolder, id, idPadre]
        //Mostrar PRIMERO los que idPadre=idFirstlevel
        //Hacerle Flecha si isFolder=true
        let itemsFirst=[]
        for(let item of menuItems){
            if(item.idPadre===idFirstNivel){
                itemsFirst.push(item.name)
            }
        }

        console.log(menuItems[0].name)
    
        return(
            <div>
                {
                   itemsFirst
                }
            </div>
        )
    }
}

Menu.defaultProps ={
    //si es necesario
}

export default Menu