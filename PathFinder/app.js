const root1=document.querySelector('#root1');
let target=document.querySelector('#nodeA');
let root2=document.querySelector('#root2');

const pathFinder=(root,taget)=>{
    const result=[];
    while(target!==root){
        const parent=target.parentElement;
        const childrenArray=Array.from(parent.children);
        const index=(childrenArray.indexOf(target))
        result.push(index);
        target=parent;
    }
    return result;
}

const getValueByPath=(root,path)=>{
    let currentNode=root;
    while(path.length){
     currentNode=root.children[path.pop()];
    }
    return currentNode.innerText;
}
const path=pathFinder(root1,target);
console.log(getValueByPath(root2,path));