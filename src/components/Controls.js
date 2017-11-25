import React from 'react';
import PropTypes from 'prop-types';

const style = {
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

const Controls = ({changeDirection}) => (
    <div style={style.column}>
        <div style={style.row}>
            <button onClick={changeDirection("up")}>up</button>
        </div>
        <div style={style.row}>
            <button onClick={changeDirection("left")}>left</button>
            <button onClick={changeDirection("right")}>right</button>
        </div>
        <div style={style.row}>
            <button onClick={changeDirection("down")}>down</button>
        </div>
    </div>
);

Controls.propTypes = {
    changeDirection: PropTypes.func,
};

export default Controls;