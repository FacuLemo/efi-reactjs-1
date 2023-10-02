import { Component } from "react";
import "./Drawclass.css";

class Drawclass extends Component{
    render(){
        let svgWidth = this.getLongerWord()* 11; // Multiplico la cantidad de caracteres x 11 pixeles (ancho promedio de cada caracter)
        let bodyHeight = (this.props.data.attributes.length + this.props.data.methods.length)* 35; /* Sumo la cant de atributos y metodos y mult. 
        x 35 estimando que ocupan 35 px de alto c/u.*/
        let headerHeight = 40;
        let heightAttributesLimit = this.props.data.attributes.length *35 + 37;                      
        return(
            <svg overflow="visible" width={svgWidth} height={bodyHeight + headerHeight}>
                <rect stroke={this.props.data.borderColor} x="0" y="0" width={svgWidth} height={headerHeight} fill={this.props.data.headColor}/>
                <rect stroke={this.props.data.borderColor} x="0" y="40" width={svgWidth} height={bodyHeight} fill="white"/>
                <text x="45%" textAnchor="middle" y="25" fontStyle="italic" fill={this.props.data.textColor}>{this.props.data.name}</text>
                {this.getAttributesAndMethods()}
                <line stroke="black" x1={0} y1={heightAttributesLimit} x2={svgWidth} y2={heightAttributesLimit}/>
            </svg>
        )
    }

    getLongerWord(){
        let content = this.props.data.attributes.concat(this.props.data.methods);
        let greaterWidth = 0;
        for(let i = 0; i < content.length; i++){
            if(content[i].length > greaterWidth){
                greaterWidth = content[i].length
            }
        }
        console.log(greaterWidth)
        return greaterWidth;
    }

    getAttributesAndMethods(){
        let height = 25;
        return (<svg>
            {this.props.data.attributes.map((item) => (
                <text x={10} y={height +=35}>{item}</text>
            ))}
            {this.props.data.methods.map((item) => (
                <text x={10} y={height +=35}>{item}</text>
            ))}
        </svg>)
    }
}

export default Drawclass