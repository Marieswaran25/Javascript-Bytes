const array=[1,2,34,2,1,3,4,1,3,34];
let map={};
let dup={}
for(let i=0;i<array.length;i++){
     map[array[i]]=(map[array[i]]||0)+1
}
for(let i=0;i<array.length;i++){
     if(map[array[i]]>1){
          dup[array[i]]=map[array[i]]
     }
}

console.log(map)
console.log(dup)
