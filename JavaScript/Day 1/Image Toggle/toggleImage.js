var imgTag=document.querySelector('img');
var h1tag=document.querySelector('h1');
imgTag.onclick = function(){
    if(imgTag.getAttribute('src')=='image1.jpg'){
        h1tag.textContent='The cat watching you click anything';
        imgTag.setAttribute('src','image2.jpg');
    }
    else
    {
        h1tag.textContent="Click the image to toggle";
        imgTag.setAttribute('src','image1.jpg');
    }
}