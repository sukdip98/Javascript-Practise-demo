const calculate=()=>{
    const obj={
        total:0,
        AddCrores:function(num){
            this.total=this.total+num*Math.pow(10,7);
            return this;
        },
        AddLacs:function (num) {
            this.total+=num*Math.pow(10,5);
            return this;
        },
        AddThousands:function(num){
            this.total+=Math.pow(10,3);
            return this;
        },
        value:function(){
            return this.total;
        }
    }
    return obj;
}
const result=calculate().AddCrores(5).AddLacs(55).AddThousands(49).AddLacs(5.6).value();
console.log(result);