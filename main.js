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
    const findImg = document.querySelector('image1');
    findImg.src = str;
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

function twoString(colorString, idString){
    const foundIdString = document.querySelector(idString);
    foundIdString.style.color = colorString;
}