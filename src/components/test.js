import { Component } from "react";

class Test extends Component{
    
    handleClick(){
        alert('Visita es.react.dev !!')
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>saludar</button>
            </div>
        )
    }
}

export default Test