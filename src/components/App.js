import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            h: 5,
            w: 5,
        };

        this.changeIt = this.changeIt.bind(this);
    }

    changeIt(){
        this.setState( (prevState) => ({
            h: prevState.h + 1,
            w: prevState.w + 1,
        }));
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <Board h={this.state.h} w={this.state.w}/>
                <button onClick={this.changeIt}>change</button>
            </div>
        );
    }
}

export default App;