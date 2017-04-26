// canvas workspace related
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    canvasWrap = document.querySelector('.main_canvas'),
    canvasHold = document.querySelector('.canvas_placeholder'),
    imgDefault = new Image();
    imgDefault.src = 'https://www.mememaker.net/static/images/templates/198942.jpg';

var x = 0,
    y = 0;

// inputs related
var imgURLField = document.getElementById('img_URL'),
    pushImg = document.getElementById('btn_imgURL');

// sizing the canvas wrapper
canvasWrap.style.width = canvas.width + 'px';
canvasWrap.style.height = canvas.height + 'px';

// sizing the placeholder canvas
canvasHold.style.width = canvas.width + 'px';
canvasHold.style.height = canvas.height + 'px';

window.onload = function(){
    return setDefaultImg(imgDefault, x, y);
}

function setDefaultImg (img, x, y, swidth, sheight) {
    x = this.x
    y = this.y
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, canvas.width, canvas.width);
    console.log(sheight, sheight);
    // console.log('x axis : ' + x, 'y axis : ' + y);
    // for debugging
}


// moving arround

function moveUp () {
    return setDefaultImg(imgDefault, x, y-=2);
}
function moveDown () {
    return setDefaultImg(imgDefault, x, y+=2);
}

function moveLeft () {
    return setDefaultImg(imgDefault, x-=2, y);
}

function moveRight () {
    return setDefaultImg(imgDefault, x+=2, y);
}

imgURLField.oninput = function () {
    var sImgURL = imgURLField.value.split('.'),
        imgURLExt = sImgURL[sImgURL.length - 1];

    if(imgURLField.value.length < 5){
        console.log('please insert a valid image');
    }else if (imgURLExt === 'png' || imgURLExt === 'jpg' || imgURLExt === 'jpeg'){
        imgDefault.src = imgURLField.value;
        setDefaultImg(imgDefault, x, y);
    }
}

// test cases:
// http://nodeframework.com/assets/img/js.png
// https://www.mememaker.net/static/images/templates/198942.jpg
