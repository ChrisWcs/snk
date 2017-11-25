import React, { Component } from 'react';
import Board from './Board';
import Controls from './Controls';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snake: [],
            food: {

            },
            isPlaying: false,
        };
    }

    render() {
        return(
            <div>
                <Board snake={this.state.snake} food={this.state.food}/>
            </div>
        );
    }
}

export default App;