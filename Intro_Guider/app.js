const points=["1","5","6","9"];
let index=0;
const showHighLighter=(id)=>{
    console.log(id)
    document.getElementById('lm-highlighter')?.remove();
    document.getElementById('lm-popover')?.remove();
const item=document.getElementById(id);
scrollHelper(item);
const dimension=item.getBoundingClientRect();
console.log(dimension.top);
console.log(window.scrollY);
const ele=document.createElement('dev');
ele.id="lm-highlighter";
ele.style=`
position:absolute;
left:${dimension.left}px;
top:${dimension.top+window.scrollY}px;
height:${dimension.height}px;
width:${dimension.width}px;
transition:border 2s ease;
`;
document.getElementsByClassName("wrapper")[0].appendChild(ele);
setTimeout(()=>{
    ele.style.border='2px solid black';
});
popOver(dimension);
}
const popOver=(dimension)=>{
    console.log("pop up")
    const ele=document.createElement('div');
    ele.id="lm-popover";
    ele.style=`
position:absolute;
left:${dimension.left+10}px;
top:${dimension.bottom+window.scrollY}px;
width:100px;
height:100px;
background-color:black;
`;
ele.appendChild(createButtons());
document.getElementsByClassName("wrapper")[0].appendChild(ele);
}
const createButtons=()=>{
    const prev=document.createElement('button');
    const next=document.createElement('button');
    prev.textContent='prev';
    next.textContent='next';
    next.addEventListener("click",()=>{
        if(index<points.length){
            showHighLighter(points[index++]);
        }
    });
    prev.addEventListener("click",()=>{
        console.log(index)
        if(index>0){
            showHighLighter(points[index--]);
        }
    })
    const frag=document.createDocumentFragment();
    frag.appendChild(prev);
    frag.appendChild(next);
    return frag;
}
const scrollHelper=(ele)=>{
    const eleTop=ele?.offsetTop;
    console.log(eleTop);
    window.scrollTo({top:eleTop,behavior:'smooth'});
}
showHighLighter(10);