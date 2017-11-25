import React, { Component } from 'react';
import Board from './Board';
import Controls from './Controls';

import { updateSnake } from '../utils/utils';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snake: [],
            food: {

            },
            direction: "right",
            isPlaying: false,
            id: "",
        };

        this.changeDirection = this.changeDirection.bind(this);
        this.start = this.start.bind(this);
    }

    changeDirection(direction){
        return () => {
            this.setState( () => ({
                direction,
            }));
        }
    }

    start(){
        if(!this.state.isPlaying) {
            const id = setInterval( () => {
                this.setState( () => ({

                }));
            }, 500);
            this.setState( () => ({
                id,
            }));

        } else {
            clearInterval(this.state.id);
        }
    }

    render() {
        return(
            <div>
                <Board snake={this.state.snake} food={this.state.food}/>
                <Controls changeDirection={this.changeDirection}/>
            </div>
        );
    }
}

export default App;