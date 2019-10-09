function ulAppender(ulNode) {
    const findUl = document.querySelector('ul');
    findUl.appendChild(ulNode);
}

  
function divAppender (divNode){
const findDiv = document.querySelector ('div');
    findDiv.appendChild(divNode);
}

function strAdder (newStr){
    const newLi= document.createElement('li');
    newLi.innerText = newStr;
} 

function imgSource(imageStr){
    const findImg = document.querySelector('src');
    findImg.innerText = imageStr ;
}

function classEqual (element1, element2){
    const findElement1 = document.querySelector(element1);
    const findElement2 = document.querySelector(element2);
    findElement1.getElementClassName    

}