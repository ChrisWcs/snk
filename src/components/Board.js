import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
    border: "solid black 1px"
};

class Board extends Component {
    constructor(props) {
        super(props);
        this.updateCanvas = this.updateCanvas.bind(this);
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0,500,500);
        const {snake, food} = this.props;
        ctx.fillStyle = 'rgb(0,0,0)';
        snake.forEach( (b) => {
            ctx.fillRect(b.x * 20, b.y * 20, 20, 20);
        });
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
    }

    render() {
        return(
            <canvas ref="canvas" width={500} height={500} style={style}/>
        );
    }
}

Board.propTypes = {
    snake: PropTypes.array,
    food: PropTypes.object,
};

export default Board;