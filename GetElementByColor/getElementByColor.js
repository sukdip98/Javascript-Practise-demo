//js engine in browser translate 
//all form of color like english,hexcode and short hex code and rgb
// to a standard form of color that is 
//rgb.

const root=document.getElementById("root");
const getElementByColor=(root,color)=>{
const computedColor = getComputedColor(color);
const search=(node)=>{
    let result = [];
    if(getComputedColor(node.style.color)===computedColor){
        result.push(node);
    }
    for(let child of node.children){
        result=[...result,...search(child)]
    }
    return result;
}
return search(root);
}
const getComputedColor=(c)=>{
    const element=document.createElement('div');
    element.style.color=c;
    document.body.appendChild(element);
    const {color}=window.getComputedStyle(element);
    document.body.removeChild(element);
    return color;
}
console.log(getElementByColor(root,"blue"));
