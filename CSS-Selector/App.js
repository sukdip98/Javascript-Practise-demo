const getCssSelector=(root,target)=>{
    const selector = [];
    while(target!==root){
        const parent = target.parentElement;
        const childrenArray = Array.from(parent.children);
        const index = childrenArray.indexOf(target)+1;
        selector.unshift(`${target.tagName.toLowerCase()}:nth-child(${index})`);
        target = parent;
    }
    selector.unshift(`${root.tagName.toLowerCase()}[id=${root.getAttribute("id")}]`);
    return selector.join('>');
}

const root = document.getElementById("root1");
const target = document.getElementById('nodeA');

const result = getCssSelector(root,target);
console.log(result);