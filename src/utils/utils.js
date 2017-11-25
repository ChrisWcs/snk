const advanceHead = (prevHead, direction) => {
    if(direction == "up"){
        return {
            x: prevHead.x,
            y: prevHead.y - 1,
        };
    } else if(direction == "down"){
        return {
            x: prevHead.x,
            y: prevHead.y + 1,
        };
    } else if(direction == "right"){
        return {
            x: prevHead.x + 1,
            y: prevHead.y,
        };
    } else {
        return {
            x: prevHead.x - 1,
            y: prevHead.y, 
        };
    }
};

export const updateSnake = ( snake, food, direction, height, width ) => {
    let newHead = advanceHead(snake[0], direction);

    // out of bounds check
    if( newHead.x < 0 || newHead.y < 0 || newHead.x > height || newHead.y > width){
        return [];
    }

    let newBody;

    if( newHead.x == food.x && newHead.y == food.y){
        newBody = [ newHead, ...snake];
    } else {
        newBody = [ newHead, ...snake.slice(0, snake.length - 1)];
    }

    for(let i = 1; i < newBody.length; i++){
        if(newBody[0].x == newBody[i].x && newBody[0].y == newBody[i].y){
            return [];
        }
    }

    return newBody;
};