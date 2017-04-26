// canvas workspace related
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    canvasWrap = document.querySelector('.main_canvas'),
    canvasHold = document.querySelector('.canvas_placeholder'),
    imgDefault = new Image();

imgDefault.src = 'https://www.mememaker.net/static/images/templates/198942.jpg';

var x = 0,
    y = 0;

var canvasImageWidth = document.getElementById('img_size-width').value,
    canvasImageHeight = document.getElementById('img_size-height').value;

// inputs related
var imgURLField = document.getElementById('img_URL'),
    pushImg = document.getElementById('btn_imgURL'),
    sizeInputs = document.querySelectorAll('.img_size');

// sizing the canvas wrapper
canvasWrap.style.width = canvas.width + 'px';
canvasWrap.style.height = canvas.height + 'px';

// sizing the placeholder canvas
canvasHold.style.width = canvas.width + 'px';
canvasHold.style.height = canvas.height + 'px';

window.onload = setImg(imgDefault, x, y);


function setImg (img, x, y, swidth, sheight) {
    x = this.x
    y = this.y
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, canvasImageWidth, canvasImageHeight);
    console.log(canvasImageWidth, canvasImageHeight);

    // console.log('x axis : ' + x, 'y axis : ' + y);
}

sizeInputs.forEach(function(input){
    input.oninput = resize(input.value);
});

function resize(width, height){
    setImg(imgDefault, x, y, height, width);
    console.log('main log ' + width, height);
}

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

/*
images
http://nodeframework.com/assets/img/js.png
https://www.mememaker.net/static/images/templates/198942.jpg
*/