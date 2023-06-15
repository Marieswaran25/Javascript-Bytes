function first(callback){
    setTimeout(()=>{
        console.log('first')
        callback
    },1000)
}
function second(callback){
    setTimeout(()=>{
        console.log('secnd')
        callback
    },1000)}
function third(callback){
    setTimeout(()=>{
        console.log('third')
        callback
    },1000)}

first(second(third()))