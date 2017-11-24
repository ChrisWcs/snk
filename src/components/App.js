import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.updateCanvas = this.updateCanvas.bind(this);
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 100, 100);
    }

    render() {
        return(
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

export default App;