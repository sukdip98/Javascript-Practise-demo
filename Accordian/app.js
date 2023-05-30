const labels=document.getElementsByClassName('label');
console.log(labels)
for(let i=0;i<labels.length;i++){
    labels[i].addEventListener('click',()=>{
        console.log("click")
        labels[i].classList.toggle('active')
        // if(labels[i].nextElementSibling.style.display==="block"){
        //     labels[i].nextElementSibling.style.display='none';
        // } else{
        //     labels[i].nextElementSibling.style.display='block'
        // }
    })
}