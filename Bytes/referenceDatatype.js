// for Array

let a=[1,2,3]
let b=a;
// a and b are poiting to same memory , if either one of its value changes ,it affects both.
b[2]=11;
console.log(a,b);

let c=[1,2,3]
let d=new Array(...c);
// Here it will create an new array and having own refernce
c[2]=11;
console.log(c,d);


// same case here for Object

let x={
    a:1,
    b:"mari",
    c:true
}
let y=x;
y.b='venkat'
console.log(x,y);

let s={
    a:1,
    b:"mari",
    c:true
}
let t=Object.assign({},s)
t.c=false;
console.log(s,t)