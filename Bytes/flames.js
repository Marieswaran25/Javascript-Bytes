const showResult=(num)=>{
    if(num==0){
        console.log('Empty names or both or same names')
    }
    else{
      const flames='FLAMES';
      const flamesArray=flames.split('')
      console.log(num)
    // console.log(flamesArray);
    // for(var i=1;i<=num;i++){
    //   for(var j=i;j<=i;j++){
    //     if(j==num && (num>=7 && num<=14 && num%2!=0) ){
    //       console.log(Math.floor(num/2))
    //       flamesArray.splice(Math.floor(num/2),1)
    //     }
    //     if(j==num && (num>=7 && num<=14 && num%2==0) ){
    //       console.log(num%2)
    //       flamesArray.splice(num/2,1)
    //     }
    //   }
      
    // }
    // console.log(flamesArray);
    while(flamesArray.length>=1){
      console.log(flamesArray)
      flamesArray.shift()
    }

    }

}

const getNames = (name1, name2) => {
  const newArray = [];
  const array1 = name1.split("");
  const array2 = name2.split("");
  array1.map((value) => {
    if (array2.includes(value)) {
      var indexByValue = array2.indexOf(value);
      array2.splice(indexByValue,1);
    } else {
      newArray.push(value);
    }
  });
  const finalarray = [...newArray, ...array2];
  console.log(finalarray);
  console.log(finalarray.length);
showResult(finalarray.length)
};
getNames("marieswaran", "venkat");
getNames("", "");
getNames("aaa", "aaaa");
getNames("maayaax", "baacab");

