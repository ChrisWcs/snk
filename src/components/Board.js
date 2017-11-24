import React, { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props);
        this.updateCanvas = this.updateCanvas.bind(this);
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, 300, 300);
        ctx.fillRect(0,0, this.props.w, this.props.h);
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, this.props.w, this.props.h);
    }

    render() {
        return(
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

export default Board;