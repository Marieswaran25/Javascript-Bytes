let newnum;
function isEven(num){
    for(let i=0;i<num;i++){
        newnum=num-2
    
    if(newnum==0){
        return true;
    }
    else if(newnum==1){
        return false
    }
    else{
        return isEven(newnum)
    }
    }


}
console.log(isEven(81))