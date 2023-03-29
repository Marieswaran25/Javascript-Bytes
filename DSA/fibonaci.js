function fibonaci(n) {
  let n3;
  let n1;
  let n2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      n2 = 0;
      n1 = 0;
    }
    if (i == 1) {
      n1 = 0;
      n2 = 1;
    }
    n3 = n2 + n1;
    n1 = n2;
    n2 = n3;
    sum += n3;
    console.log(n3);
  }
  console.log(`The total sum of fibonacci series of ${n} is ${sum}`);
}
fibonaci(10);

function fibonacci2(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib;
}
console.log(fibonacci2(10));

