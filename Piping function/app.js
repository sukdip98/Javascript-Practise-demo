// Input:
const obj ={
  a : {
    b : (a,b,c) => a+b+c,
    c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c
}

// Fn(obj)(1,1,1);

// Output:
// {
//   a : {
//     b : 3,
//     c : 1
//   },
//   d: -1
// }

const pipingFunction=(obj)=>{
    return function(...args){
        for(let i in obj){
            if(typeof obj[i]==='object'){
                obj[i]=pipingFunction(obj[i])(...args);
            }
            else if(obj[i] && !Array.isArray(obj[i] && typeof obj[i]==='function')){
                obj[i]=obj[i](...args);
            }
        }
        return obj;
    }
}
console.log(pipingFunction(obj)(1,1,1))
