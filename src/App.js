import Drawclass from './components/drawclass/Drawclass'
import Menu from './components/menu/Menu'

function App () {
  const CONFIG_MENU = {
    configColor: {
      background: '#f4f5fa', // Color de Fondo General de la botonera
      itemBackground: '#d0d0d0', // Color de Fondo de los subMenús
      itemColor: '#666', // Color del texto de cada item del menú
      itemActive: '#a8a8a8' // Color cuando hace click y se abre un submenú
    },
    idFirstNivel: 150,
    menuItems: [
      { name: 'Action', isFolder: false, id: 148, idPadre: 150 },
      { name: 'Folder', isFolder: true, id: 2, idPadre: 150 },
      { name: 'Subaction', isFolder: false, id: 3, idPadre: 2 },
      { name: 'Subfolder', isFolder: true, id: 4, idPadre: 2 },
      { name: 'Subfolder', isFolder: true, id: 5, idPadre: 2 },
      { name: 'Sub-subaction', isFolder: false, id: 55, idPadre: 5 },
      { name: 'Sub-subaction', isFolder: false, id: 56, idPadre: 5 },
      { name: 'Sub-subaction', isFolder: false, id: 59, idPadre: 4 }
    ]
  }

  const CONFIG_UML = {
    name: 'Person',
    attributes: ['+name:str', '+phoneNumber:str', '+emailAddress:str'],
    methods: [],
    borderColor: '#e83838',
    headColor: 'rgb(253, 197, 197)',
    textColor: '#333333'
  }
  const CONFIG_UML2 = {
    name: 'Vehicle',
    attributes: ['+brand:str', '+idNumber:str', '+model:str', '+year:int'],
    methods: ['+forward()', '+brake', '+turnLeft()', '+turnRight()'],
    borderColor: '#34afe0',
    headColor: '#84c1d9',
    textColor: '#333333'
  }
  const CONFIG_UML3 = {
    name: 'Employee',
    attributes: ['+position:str', '+department:str', '+salary:int', '+yearOfEntry:int'],
    methods: ['+work()', '+changePosition()'],
    borderColor: '#fcba03',
    headColor: '#ffe499',
    textColor: '#333333'
  }

  return (
    <div>
      <header>

      <Menu data={CONFIG_MENU}/>

      <Drawclass data={CONFIG_UML}/>
      <Drawclass data={CONFIG_UML2}/>
      <Drawclass data={CONFIG_UML3}/>
      <Drawclass/>

      </header>
    </div>
  )
}

export default App
