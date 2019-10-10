function ulAppender(ulNode) {
    const ul = document.querySelector('ul');
    ul.appendChild(ulNode);
}

  
function divAppender (divNode){
const div = document.querySelector ('#lorem');
    div.appendChild(divNode);
}

function strAdder (newStr){
    const newLi= document.createElement('li');
    newLi.innerText = newStr;
    return newLi;
} 

function imgSource(image1, str1){
    const findImg = document.querySelector(image1);
    findImg.src = str1;
}

function classEqual (element1, element2){
    const elementLoc1 = document.querySelector(element1);
    const elementLoc2 = document.querySelector(element2);
    elementLoc2.className = elementLoc1.className;    

}
function tagAndId(tagName, id){
    const newElement = document.createElement(tagName);
    newElement.id = id;
    return newElement; 
}

function colorIdString(colorStr, idStr){
    const locateIdStr = document.querySelector(idStr);
    locateIdStr.style.color = colorStr;
}

ulAppender(strAdder('Hi!'));
ulAppender(strAdder('My name is...'));
ulAppender(strAdder('who?'));

divAppender(imgSource('img1', 'img2'))



classEqual('#thing-1', '#thing-2');
classEqual('#thing-1', '#thing-c');

colorIdString('lightGreen', '#heading')