// first thing, teach them about while loops:

// what if we wanted to print all the numbers from 0 to 100?
var num = 0;

while (num <= 100) {
    console.log(num)

    num++;
}

// What if we wanted to add up all the numbers from 1 to 100

// hint: create a variable called sum before the while loop like this

var sum = 0;
while (num <= 100) {
    // then we woul have to continuously add to sum
    sum += num;

    num++;
}

// so what else can we do with loops? Well, let's try to draw a simple tic-tac-toe board

// firstly, we need to set up the canvas

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// next, we need to create two variables that we'll use to determine how long our loop should run

var linesToDraw = 5;
var currentRow = 0;

// first we're going to draw the rows
while (currentRow < linesToDraw) {

    ctx.moveTo(0, currentRow * 50);
    ctx.lineTo(300, currentRow * 50);
    ctx.stroke();

    currentRow++;
}

// get them to try to draw the columns doing the same type of thing

// after this point, show them that you can actually change the color and width of the lines like this

// WE COULD SKIP THIS SECTION AND MOVE TO RECTANGLES HERE

// ^^^
while (currentRow < linesToDraw) {

    ctx.moveTo(0, currentRow * 50);
    ctx.lineTo(300, currentRow * 50);

    // these are the new lines
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;

    ctx.stroke();

    currentRow++;
}

// after that, show them how to draw rectangles
var x, y = 0;
var width, height = 500;
ctx.fillRect(x, y, width, height);
ctx.strokeStyle = 'blue';
ctx.stroke();

// challenge them to create a checkerboard pattern with the rectangles and switch the colors back and forth each loop iteration