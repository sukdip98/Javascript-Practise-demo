const container = document.querySelector(".container");
let count =0;
const createProgressBar=()=>{
    const div=document.createElement('div');
    div.classList.add("progress");
    container.appendChild(div);
    setTimeout(()=>{
        div.classList.add("animate");
    });
    div.addEventListener('transitionend',()=>{
        count-=1;
        if(count>=1){
            createProgressBar();
        }
    });
    div.removeEventListener("transitionend",()=>{});
}
const add =()=>{
    if(count===0){
        createProgressBar();
    }
    count+=1;
}