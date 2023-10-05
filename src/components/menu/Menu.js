import { Component } from 'react'
import './Menu.css'
import ItemMenu from '../itemmenu/ItemMenu'

class Menu extends Component {
  getFirstLevelItems() { // retorna los objetos de primer nivel en una lista
    let firstLevel = []
    const ID_FIRST_LEVEL = this.props.data.idFirstNivel
    const ITEMS = this.props.data.menuItems
    for (let item of ITEMS) {
      if (item.idPadre === ID_FIRST_LEVEL) {
        firstLevel.push(item)
      }
    }
    return firstLevel
  }

  renderFirstLevel(items, style) { // se recibe la lista de objetos y los estilos
    let { background: bg, itemBackground: folderMenuBg, itemColor: color, itemActive: colorActive } = style
    return (
      <div className='menu' style={{
        backgroundColor: bg,
        color: color,
      }}>
        {items.map((item) => (
          <ItemMenu child={item} colorActive={colorActive} colorBg={folderMenuBg} menuItems={this.props.data.menuItems} key={item.id} />
        ))}
      </div>
    )
  }

  render() {
    const FIRST_LEVEL = this.getFirstLevelItems() //obtenemos la lista de los obj. de primer nivel
    return (
      <div>
        {
          this.renderFirstLevel(FIRST_LEVEL, this.props.data.configColor) //renderizamos con un map
        }
      </div>
    )
  }
}

Menu.defaultProps = {
  data: {
    configColor: {
      background: '#f4f5fa', // Color de Fondo General de la botonera
      itemBackground: '#d0d0d0',// Color de Fondo de los subMenús
      itemColor: '#666', // Color del texto de cada item del menú
      itemActive: '#a8a8a8', // Color cuando hace click y se abre un submenú
    },
    idFirstNivel: 150,
    menuItems: [
      { name: 'Action Default', isFolder: false, id: 148, idPadre: 150 },
      { name: 'Folder Default', isFolder: true, id: 2, idPadre: 150 },
      { name: 'Subaction Default', isFolder: false, id: 3, idPadre: 2 },
      { name: 'Subfolder Default', isFolder: true, id: 4, idPadre: 2 },
      { name: 'another sub menu', isFolder: false, id: 5, idPadre: 4 },
    ]
  }
}

export default Menu
