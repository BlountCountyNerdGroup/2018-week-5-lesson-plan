var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// just some arbitrary widths and heights
canvas.width = 1000;
canvas.height = 1000;

// This lesson, we're going to make a tic-tac-toe board.

// more arbitrary numbers
var ROW_HEIGHT = 50;
var COL_WIDTH = 50;

function drawRows(num) {
    var currentRow = 0;
    while (currentRow < num) {
        ctx.moveTo(0, currentRow * ROW_HEIGHT)

        // most mathematical line
        ctx.lineTo(COL_WIDTH * 5, currentRow * ROW_HEIGHT);

        ctx.lineWidth = 2;
        ctx.stroke();

        currentRow++;
    }
}

function drawCols(num) {
    var currentCol = 0;
    while (currentCol < num) {
        ctx.moveTo(currentCol * COL_WIDTH, 0)
        ctx.lineTo(currentCol * COL_WIDTH, ROW_HEIGHT * 5);

        // changing line width not just because it looks nice
        // Canvas is weird and makes you offset x and y by .5 if you want to draw crisp odd widthed lines
        ctx.lineWidth = 2;
        ctx.stroke();

        currentCol++;
    }
}

drawRows(5);
drawCols(5)