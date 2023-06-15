function count(string){
    let charArray=[]
   const charlen= string.split('').map((val)=>val=='B'?charArray.push(val):false);
   return charArray.length
}
console.log(count('baeBBeeB'))