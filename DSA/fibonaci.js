function fibonaci(n) {
  let n3;
  let n1=0;
  let n2=1;
  let sum = 0;
  const fib=[n1,n2]
  for (let i = 2; i < n; i++) {
    n3 = n2 + n1;
    n1 = n2;
    n2 = n3;
    sum += n3;
    fib.push(n3)
 }
  console.log(`The total sum of fibonacci series of ${n} is ${sum}`);
  return fib;
}
console.log(fibonaci(10));

function fibonacci2(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib;
}
console.log(fibonacci2(10));

