const lists=document.querySelectorAll(".container ul li");
const sections=document.querySelectorAll("section");
// lists.forEach((li)=>{
//     li.addEventListener("click",()=>{
//         lists.forEach((li)=>{
//             li.classList.remove("active");
//         });
//         li.classList.add("active");
//     })
// });
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach((section)=>{
        const sectionTop=section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY>=sectionTop){
            current=section.getAttribute("id");
            
        }
    });
    console.log(current);
    lists.forEach((li)=>{
        li.classList.remove("active");
            if(li.classList.contains(current)){
                li.classList.add("active");
            }
            
        })
    });