const stars=document.querySelectorAll(".star");
stars.forEach((star,i)=>{
    star.addEventListener("click",()=>{
        let currentRating=i+1;
        document.querySelector(".rating").textContent=`${currentRating}`
        stars.forEach((s,j)=>{
            if(i+1>=j+1){
                s.innerHTML=`${"&#9733"}`
            }
            else{
                s.innerHTML='&#9734'
            }
        })
    })
})