import React, { Component } from 'react';
import Board from './Board';
import Controls from './Controls';

import { updateSnake, randomFood } from '../utils/utils';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snake: [
                {
                    x: 10,
                    y: 10,
                }
            ],
            food: {
                x: 20,
                y: 20,
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
        };
    }

    start(){
        if(!this.state.isPlaying) {
            this.setState( () => ({
                isPlaying: true
            }));

            const id = setInterval( () => {
                this.setState( (prevState) => {
                    const newSnake = updateSnake( prevState.snake, prevState.food, prevState.direction, 25, 25);

                    return {
                        snake: newSnake,
                        food: prevState.snake.length == newSnake.length ? prevState.food : randomFood(),
                    };
                });
            }, 200);

            this.setState( () => ({
                id,
                isPlaying: true
            }));

        } else {
            clearInterval(this.state.id);
        }
    }

    render() {
        return(
            <div>
                <Board snake={this.state.snake} food={this.state.food}/>
                <Controls changeDirection={this.changeDirection} start={this.start}/>
            </div>
        );
    }
}

export default App;