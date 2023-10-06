import { Component } from 'react'
import './Drawclass.css'

class Drawclass extends Component {
  render () {
    const SVG_WIDTH = this.getLongerWord() * 11 // Multiplico la cantidad de caracteres x 11 pixeles (ancho promedio de cada caracter)
    let bodyHeight = (this.props.data.attributes.length + this.props.data.methods.length) * 35 /* Sumo la cant de atributos y metodos y mult.
        x 35 estimando que ocupan 35 px de alto c/u. */
    const HEADER_HEIGHT = 40
    const LINE_HEIGHT_Y = this.props.data.attributes.length * 35 + 37 // Cálculo de linea divisoria.
    if (this.props.data.methods.length === 0) {
      bodyHeight += 35 // Si no hay métodos, se deja un gap.
    }
    return (
            <svg overflow="visible" width={SVG_WIDTH} height={bodyHeight + HEADER_HEIGHT}>
                <rect stroke={this.props.data.borderColor} x="0" y="0" width={SVG_WIDTH} height={HEADER_HEIGHT} fill={this.props.data.headColor}/>
                <rect stroke={this.props.data.borderColor} x="0" y="40" width={SVG_WIDTH} height={bodyHeight} fill="white"/>
                <text x="45%" textAnchor="middle" y="25" fontStyle="italic" fill={this.props.data.textColor}>{this.props.data.name}</text>
                {this.getAttributesAndMethods()}
                <line stroke="black" x1={0} y1={LINE_HEIGHT_Y} x2={SVG_WIDTH} y2={LINE_HEIGHT_Y}/>
            </svg>
    )
  }

  getLongerWord () {
    const ATTRIBUTES = this.props.data.attributes
    const METHODS = this.props.data.methods
    const CLASSNAME = this.props.data.name
    const CONTENT = ATTRIBUTES.concat(METHODS).concat(CLASSNAME)
    let greaterWidth = 0
    for (let i = 0; i < CONTENT.length; i++) {
      if (CONTENT[i].length > greaterWidth) {
        greaterWidth = CONTENT[i].length
      }
    }
    return greaterWidth
  }

  getAttributesAndMethods () {
    let height = 25
    let attributes = this.props.data.attributes
    let methods = this.props.data.methods
    if (attributes.length > 0) {
      attributes = attributes.map((item, index) => (
                <text key={index} x={10} y={height += 35}>{item}</text>
      ))
    }
    if (methods.length > 0) {
      methods = methods.map((item, index) => (
                <text key={index} x={10} y={height += 35}>{item}</text>
      ))
    }
    return (<svg>
            {attributes}
            {methods}
        </svg>)
  }
}

Drawclass.defaultProps = {
  data: {
    name: 'Classname',
    attributes: ['+attribute:type'],
    methods: ['+method()'],
    borderColor: '#e83838',
    headColor: 'rgb(253, 197, 197)',
    textColor: '#333333'
  }
}

export default Drawclass
