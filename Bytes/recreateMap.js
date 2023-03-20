const inputArray=[1,2,3,4]
const twice=(num)=>{return num * 2};
const thrice=(num)=>{return num * 3};

Array.prototype.myMap=function (callbackLogic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(callbackLogic(this[i]))
    }
    return output;
}
console.log(inputArray.map(twice));
console.log(inputArray.myMap(thrice));

// if we use array.prototype we can use like array.map(callback) otherwise we can call it as function and this will pints to the array.
// myMap and map is a higher order functions.