





const getElementByClass=(root,a)=>{
    
    const search=(node)=>{
        let result=[];
        if(node.classList.contains(a)){
            result.push(node.id);
        }
            for(let child of node.children){
                const res=search(child);
                result=[...result,...res];
            }
        return result;
    }
    return search(root);
}

const root=document.getElementById("root");
const result=getElementByClass(root,'a');
console.log(result);

