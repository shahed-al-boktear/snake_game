// board declaration
let board = document.getElementById('canvas');
let ctx = board.getContext('2d');
let box_size= 25;
let rows = 20;
let cols = 20;

let snakeX=5;
let snakeY=5;

let moveX = 0;
let moveY= 0;

let foodX;
let foodY;

let snake_body = [];

//score

let score = 0;

//main function starts form here

window.onload= function(){
    board.width = box_size * cols;
    board.height = box_size * rows;

    snake_food();
    document.addEventListener('keydown', snake_movement);
    setInterval(update, 100);
}


let update = ()=>{

    

    ctx.fillStyle= 'black';
    ctx.fillRect(0, 0, board.width, board.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(foodX, foodY,box_size,box_size);

    if (snakeX*box_size==foodX && snakeY*box_size===foodY){
        score +=1;
        document.getElementById('score').innerText = score;
        snake_body.push([foodX, foodY]);
        snake_food();
    }

    for (i = snake_body.length-1; i >0; i--){
        snake_body[i] = snake_body[i-1];
    }

    if(snake_body.length){
        snake_body[0] = [snakeX*box_size, snakeY*box_size];
    }


    ctx.fillStyle = 'lime';
    snakeX= snakeX+moveX;
    snakeY= snakeY+moveY;
    ctx.fillRect(snakeX*box_size,snakeY*box_size,box_size,box_size);

    for (let i = 0; i < snake_body.length; i++) {  
        ctx.fillStyle= 'lime';
        ctx.fillRect (snake_body[i][0], snake_body[i][1], box_size, box_size);      
    }

    //game over conditions

    if( snakeX*box_size == cols * box_size || snakeX* box_size < 0 || snakeY*box_size == rows * box_size || snakeY*box_size <0){
        document.location.reload(true);
    }

    for (i = 0; i < snake_body.length; i++){
        if (snakeX*box_size==snake_body[i][0] && snakeY*box_size==snake_body[i][1]){
            document.location.reload(true);
        }
    }

}

//snake food

let snake_food= ()=>{
    foodX = Math.floor(Math.random()*cols)*box_size;
    foodY = Math.floor(Math.random()*rows)*box_size;
}

//snake movement

let snake_movement=(event)=>{
    if (event.code=="ArrowUp" && moveY != 1){
        moveX =0;
        moveY =-1;
    }else if (event.code=="ArrowDown" && moveY != -1){
        moveX =0;
        moveY = 1;
    }else if (event.code=="ArrowLeft" && moveX !=1){
        moveX =-1;
        moveY =0;
    }else if (event.code=="ArrowRight" && moveX != -1){
        moveX =1;
        moveY =0;
    }
}

//GAME over function

