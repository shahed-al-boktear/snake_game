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


//main function starts form here

window.onload= function(){
    board.width = box_size * cols;
    board.height = box_size * rows;

    snake_food();
    document.addEventListener('keydown', snake_movement);
    setInterval(update, 1000/10);
}


let update = ()=>{


    ctx.fillStyle= 'black';
    ctx.fillRect(0, 0, board.width, board.height);

    ctx.fillStyle = 'green';
    ctx.fillRect(foodX, foodY,box_size,box_size);

    if (snakeX*box_size==foodX && snakeY*box_size===foodY){
        snake_food();
    }

    ctx.fillStyle = 'red';
    snakeX= snakeX+moveX;
    snakeY= snakeY+moveY;
    ctx.fillRect(snakeX*box_size,snakeY*box_size,box_size,box_size);

}




//snake food

let snake_food= ()=>{
    foodX = Math.floor(Math.random()*cols)*box_size;
    foodY = Math.floor(Math.random()*rows)*box_size;
}



//snake movement

let snake_movement=(event)=>{
    if (event.code=="ArrowUp"){
        moveX =0;
        moveY =-1;
    }else if (event.code=="ArrowDown"){
        moveX =0;
        moveY = 1;
    }else if (event.code=="ArrowLeft"){
        moveX =-1;
        moveY =0;
    }else if (event.code=="ArrowRight"){
        moveX =1;
        moveY =0;
    }
}
