/*a = 1;
alert(a);*/
img = [1,2,3,4]

setInterval(function(){
    v = randomImg();
    document.querySelector("img").src = "img/img_" + v + ".jpeg"
},2000);

/*function showImg(){
    v = randomImg();
    document.querySelector("img").src = "img/img_" + v + ".jpeg"
}*/

function randomImg(){
    randomNum = Math.floor(Math.random() * 4);
    //alert(Math.round(v));
    return img[randomNum];
}