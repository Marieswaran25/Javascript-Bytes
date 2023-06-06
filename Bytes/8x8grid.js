let n = 10;
let string = "";
for(k=1;k<=n;k++){
    for (let i = 1; i <= n; i++) {
        if(k%2!==0){
            if(i%2==0){
                string+=' '
              }
              else{
                string+='*'
              }
        }
        else{
            if(i%2==0){
                string+='*'
              }
              else{
                string+=' '
              }
        }
      }
      string+='\n'
}
console.log(string);
if(string.length-n===n*n){
    console.log(`Valid pattern of ${n}*${n} grid`)
}


// for(k=1;k<=n;k++){
//     for (let i = 1; i <= n; i++) {
//         k%2!==0 ? i%2==0?string+=' ':string+='*' : i%2==0?string+='*':string+=' '     
//       }
//       string+='\n'
// }