import { Component } from 'react'
import './Menu.css'
import ItemMenu from '../itemmenu/ItemMenu'

class Menu extends Component {
  getFirstLevelItems () { // retorna los objetos de primer nivel en una lista
    const firstLevel = []
    const idFirstLevel = this.props.data.idFirstNivel
    const items = this.props.data.menuItems
    for (const item of items) {
      if (item.idPadre === idFirstLevel) {
        firstLevel.push(item)
      }
    }
    return firstLevel
  }

  renderFirstLevel (items, style) { // se recibe la lista de objetos y los estilos
    const { background: bg, itemBackground: folderMenuBg, itemColor: color, itemActive: colorActive } = style
    return (
            <div>
                <div className='menu' style={{
                  backgroundColor: bg,
                  color: color,
                }}>
                    {items.map((item) => (
                        <ItemMenu child={item} colorActive={colorActive} colorBg={folderMenuBg} menuItems={this.props.data.menuItems} key={item.id}/>
                    ))}
                </div>
            </div>
    )
  }

  render () {
    const firstLevel = this.getFirstLevelItems() //obtenemos la lista de los obj. de primer nivel
    return (
            <div>
            {
                this.renderFirstLevel(firstLevel, this.props.data.configColor) //renderizamos con un map
            }
            </div>

    )
  }
}

export default Menu
