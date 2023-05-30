const mapping={
    a:['b','c'],
    b:['d','g'],
    d:['p','q'],
    l:['x','y']
}

const findMutualFriend=(collection,a)=>{
    const row=collection[a];
    let result=[...row];
    if(row){
        for(let i=0;i<row.length;i++){
            if(collection[row[i]] && collection[row[i]].length>0){
                result=[...result,...findMutualFriend(collection,row[i])]
            }
        }
    }
    return result;
}

console.log(findMutualFriend(mapping,'a'));