var image = document.getElementById('img');
var zoomContainer = document.getElementById('zoomContainer');
var imageZoom = document.getElementById('image-zoom');
var loadingBar = document.getElementById('loadingBar');
var closeButton = document.getElementById('close');

image.onload = function(){
	loadingBar.classList.remove('show');
};

image.onclick = zoom;

closeButton.onclick = closeZoom;

document.getElementById('next').onclick = next;
document.getElementById('prev').onclick = prev;



function init(images){
	loadingBar.classList.add('show');
	image.setAttribute('src', images[0]);
}

init(images);

function next(){
	images.push(images.shift());
	init(images);
}

function prev(){
	images.unshift(images.pop());
	init(images);
}

function zoom(e) {
	console.log(e.target, 'e');
	zoomContainer.classList.add('show');
	imageZoom.setAttribute('src', e.target.getAttribute('src'));
}

function closeZoom() {
	zoomContainer.classList.remove('show');
	imageZoom.setAttribute('src', '');
}