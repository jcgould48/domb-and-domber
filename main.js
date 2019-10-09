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

