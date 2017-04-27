// canvas workspace related
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    imgDefault = new Image();
    

var x = 0; y = 0;

var canvasImageWidth = document.getElementById('img_size-width').value,
    canvasImageHeight = document.getElementById('img_size-height').value;

// inputs related
var imgURLField = document.getElementById('img_URL'),
    pushImg = document.getElementById('btn_imgURL'),
    sizeInputs = document.querySelectorAll('.img_size');

window.onload = function (){
    var canvasWrap = document.querySelector('.main_canvas'),
        canvasHold = document.querySelector('.canvas_placeholder');
    // sizing the canvas wrapper
    canvasWrap.style.width = canvas.width + 'px';
    canvasWrap.style.height = canvas.height + 'px';

    // sizing the placeholder canvas
    canvasHold.style.width = canvas.width + 'px';
    canvasHold.style.height = canvas.height + 'px';

    imgDefault.setAttribute('crossOrigin', 'anonymous');
    imgDefault.src = 'http://nodeframework.com/assets/img/js.png';
    setImg(imgDefault, x, y);
}

function setImg (img, x, y, swidth, sheight) {
    x = this.x;
    y = this.y;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, canvasImageWidth, canvasImageHeight);
    console.log(canvasImageWidth, canvasImageHeight);
    // console.log('x axis : ' + x, 'y axis : ' + y);
}

// sizeInputs.forEach(function(input){
//     input.oninput = resize(input.value);
// });

// function resize(width, height){
//     setImg(imgDefault, x, y, height, width);
//     console.log('main log ' + width, height);
// }

// validating img

pushImg.onclick = function () {
    var sImgURL = imgURLField.value.split('.'),
        imgURLExt = sImgURL[sImgURL.length - 1];

    if(imgURLField.value.length < 5){
        console.log('please insert a valid image');
    }else if (imgURLExt === 'png' || imgURLExt === 'jpg' || imgURLExt === 'jpeg'){
        imgDefault.src = imgURLField.value;
        setImg(imgDefault, x=0, y=0);
    }else{
        console.log('please insert a valid image');
    }
}

// moving arround

function moveUp () {
    setImg(imgDefault, x, y-=4);
}
function moveDown () {
    setImg(imgDefault, x, y+=4);
}

function moveLeft () {
    setImg(imgDefault, x-=4, y);
}

function moveRight () {
    setImg(imgDefault, x+=4, y);
}

function togglePreview(){
    var el = document.querySelector('.preview_wrapper');
    el.classList.toggle('is_hidden');
}

function createFinalCanvas () {
    var cnvParent = document.querySelector('.preview_content');
    finalCanvas = document.createElement('canvas');
    finalCanvas.id = 'final_canvas';
    finalCanvas.width = canvas.width;
    finalCanvas.height = canvas.height;
    cnvParent.insertBefore(finalCanvas, cnvParent.children[0]);
    var finalCanvasCtx = finalCanvas.getContext('2d');
    var newImg = new Image();
    newImg.src = canvas.toDataURL();
    console.log(newImg.src);
    finalCanvasCtx.drawImage(newImg, 0, 0);
    // canvas drawing stuff
    finalCanvasCtx.font = '30px impact';
    finalCanvasCtx.fillStyle = 'white';
    finalCanvasCtx.textAlign="center";
    finalCanvasCtx.fillText('topper ', canvas.width / 2, 50);
    // finalCanvasCtx.save();
    finalCanvasCtx.font = '30px impact';
    finalCanvasCtx.strokeWidth = 2;
    finalCanvasCtx.strokeText('topper Text lnerln lefnlefn',  canvas.width / 2, 50);
}

createFinalCanvas();
 


/*
images
http://nodeframework.com/assets/img/js.png
https://www.mememaker.net/static/images/templates/198942.jpg
*/