var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    canvasWrap = document.querySelector('.main_canvas'),
    canvasHold = document.querySelector('.canvas_placeholder');

// sizing the canvas wrapper
canvasWrap.style.width = canvas.width + 'px';
canvasWrap.style.height = canvas.height + 'px';

// sizing the placeholder canvas
canvasHold.style.width = canvas.width + 'px';
canvasHold.style.height = canvas.height + 'px';


var imgDefault = document.getElementById('default_img');

function setDefaultImg(img, x, y){
    ctx.drawImage(img, x, y);
}


setDefaultImg(imgDefault, -10 , -10);

