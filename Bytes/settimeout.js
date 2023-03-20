function SetTimeout(delay){
    let start=new Date().getTime()
    let end=start;
    while(end<start+delay){
        end=new Date().getTime()
    }
   console.log(`This message is printed after ${delay} seconds.`)
}

SetTimeout(5000);



