console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

var img = getElementById('madi');
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};