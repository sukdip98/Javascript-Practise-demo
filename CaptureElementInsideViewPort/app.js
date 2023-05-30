const blocks = document.querySelectorAll('.blocks');
const detect = ()=>{
    const result = [];
    blocks.forEach((ele)=>{
        if(isInViewPort(ele)){
            result.push(ele.textContent);
        }
    });
    console.log(result);
};
const debounce=(fn,t)=>{
    let timer;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{fn()},t);
    };
}
const debouncedDetect = debounce(detect,2000);
window.addEventListener("scroll",debouncedDetect);
const isInViewPort=(ele)=>{
    const dimension=ele.getBoundingClientRect();
    const height = window.innerHeight||document.documentElement.clientHeight;
    const width=window.innerWidth||document.documentElement.clientWidth;
    return (dimension.bottom<height && dimension.right<width && dimension.top>0 && dimension.left>0);
}