/*
		@todo:
		change text color;
		change font-size;
		preview generated image;
		download image
*/


var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var imgUrlInput = document.querySelector('#img-url');

// test case :
var imgTest = document.getElementById('placeholder_img');
// imgTest.height = canvas.height;
imgTest.width = canvas.width;


ctx.drawImage(imgTest, 0, 0);

var btn = document.getElementById('click');

var topText = document.getElementById('top-text');

// btn.onclick = function () {
// 	var topStr = topText.value;
// 	ctx.font = '50px Impact';
// 	ctx.fillStyle = 'white';
// 	ctx.fillText(topStr, 30, 60);
// 	ctx.font = '50px Impact';
// 	ctx.strokeStyle = 'black';
// 	ctx.lineWidth = 1;
// 	ctx.strokeText(topStr, 30, 60);
// 	if(topText.value.length < 1){
// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
// 		ctx.drawImage(imgTest, 0, 0);
		
// 	}
// }



// function createImgHandler(handler, parent){
// 		handler = document.createElement('img');
		
// 		handler.src = getImgUrl();
// 		handler.className = 'img-handler';
// 		parent.appendChild(handler);
// 		console.log(handler);
// }

// imgUrlInput.oninput = function(){
// 		var sImgURL = imgUrlInput.value.split('.'); // getting used one time
// 		var imgURLExt = sImgURL[sImgURL.length - 1]; // get last array element (extention)
		
// 		if(imgUrlInput.value.length < 5){
// 				return;
// 		}else if (imgURLExt == 'png' || imgURLExt == 'jpg' || imgURLExt == 'jpeg'){

// 				var imgHandler = document.querySelectorAll('.img-handler');

// 				if(imgHandler.length > 1){
// 					return createImgHandler(img, document.body);
// 				}else{
// 					// extracode
// 				}
// 		}
// }


// testing image : https://thumb1.shutterstock.com/display_pic_with_logo/491584/100601029/stock-photo-designed-grunge-paper-texture-background-100601029.jpg