// Left Triangle

let n =7;
let string = "";
for (let i = 1; i <= n; i++) {
   for (let j = 1; j <=i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// Right Triangle

let string2 = "";
for (let i = 1; i <= n; i++) {
    for(j=n-i;j>0;j--){
        string2+=' '
    }
   for (let k = 1; k <=i; k++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);