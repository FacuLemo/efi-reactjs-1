import Test from "./components/test";
import Menu from "./components/menu"
import Drawclass from "./components/drawclass/Drawclass"

function App() {
  const configUml = {
    name: 'Person',
    attributes: ['+name:str','+phoneNumber:str','+emailAddress:str'],
    methods:['+purchaseParkingPass()'],
    borderColor:'#e83838',
    headColor:'rgb(253, 197, 197)',
    textColor:'#333333'
}
  const configUml2 = {
    name: 'Vehicle',
    attributes: ['+brand:str','+idNumber:str','+model:str','+year:int'],
    methods:['+forward','+brake','+turnLeft','+turnRight'],
    borderColor:'#34afe0',
    headColor:'#84c1d9',
    textColor:'#333333'
  }
  const configUml3 = {
    name: 'Employee',
    attributes: ['+position:str','+department:str','+salary:int','+yearOfEntry:int'],
    methods:['+work','+changePosition'],
    borderColor:'#fcba03',
    headColor:'#ffe499',
    textColor:'#333333'
  }
  const configMenu = {
    configColor: {
    background:'#f4f5fa', // Color de Fondo General de la botonera
    itemBackground: '#d0d0d0',// Color de Fondo de los subMenús
    itemColor:'#666', // Color del texto de cada item del menú
    itemActive:'#a8a8a8', // Color cuando hace click y se abre un submenú
    },
    idFirstNivel : 150,
    menuItems : [
    {name:'Another Action', isFolder:false, id:148, idPadre:150},
    {name:'sub menu', isFolder:true, id:2, idPadre:150},
    {name:'Action', isFolder:false, id:3, idPadre:2},
    
    {name:'Another action', isFolder:false, id:4, idPadre:2},
    {name:'sub menu', isFolder:true, id:5, idPadre:2},
    {name:'Another action', isFolder:false, id:55, idPadre:5},
    {name:'something else here', isFolder:false, id:56, idPadre:5},
    ],
    } // end
  return (
    <div>
      <header>
        <a href="https://reactjs.org">
          aprendé loco
        </a>
        <hr/>
        <Test/>
        <hr/>

      {/* Menú */}
      <Menu data={configMenu} />
      <Drawclass data={configUml}/>
      <Drawclass data={configUml2}/>
      <Drawclass data={configUml3}/>
      </header>
    </div>
  );
}

export default App;
