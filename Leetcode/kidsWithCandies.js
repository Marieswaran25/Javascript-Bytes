var kidsWithCandies = function(candies, extraCandies) {
    const output=[];
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=Math.max(...candies)){
            output.push(true)
        }
        else{
            output.push(false)
        }
    }
    return output;
};

console.log(kidsWithCandies([12,1,12],10))