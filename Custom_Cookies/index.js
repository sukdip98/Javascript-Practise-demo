const useCustomCookie=()=>{
    const map=new Map();
    Object.defineProperty(document,'myCookie',{
        configurable:true,
        set(v){
            const {key,value,options}=parseCookieString(v);
            let expiryTime=Infinity;
            if(options["max-age"]){
                console.log(options["max-age"]);
                expiryTime=Date.now()+options["max-age"]*1000;
            }
            map.set(key,{value,expiryTime});
        },
        get(){
            const cookies=[];
            for(let[key,{value,expiryTime}] of map){
                console.log(expiryTime);
                const time=Date.now();
                console.log(time)
                if(time>=expiryTime){
                    map.delete(key);
                } else {
                    cookies.push(`${key}=${value}`);
                }
            }
            return cookies.join(';')
        }
    });
    const parseCookieString=(str)=>{
        const [nameValue,...rest]=str.split(';');
        console.log(rest);
        const options={};
        const [key,value]=separateKeyVal(nameValue);
        for(let option of rest){
            const [key,value]=separateKeyVal(option);
            options[key]=value;
        }
        return {key,value,options};
    }
    const separateKeyVal=(str)=>{
        return str.split("=").map(x=>x.trim());
    }
}

useCustomCookie();
document.myCookie="name=sukdip;max-age=2";
document.myCookie="blog=lifeStyle"

setTimeout(()=>{
    console.log(document.myCookie);
},3000);