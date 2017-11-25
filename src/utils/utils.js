const createSnakeBody = (x, y) => ({
    x,
    y,
});

export const updateSnake = ( snake, food, direction, height, width ) => {
    let newX = 0;
    let newY = 0;

    let newBody = [ createSnakeBody(), ...snake];
};