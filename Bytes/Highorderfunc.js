const radiusArray=[1,2,3,4]
const area=(radius)=>{
    return Math.PI * radius * radius;
}
const calculate=(array,logic)=>{
    const output=[];
    for(let i=0;i<array.length;i++){
        output.push(logic(array[i]))
    }
    return output;
}
console.log(calculate(radiusArray,area))

//area in calculate is a callback function 
//calculate is a higher order function.