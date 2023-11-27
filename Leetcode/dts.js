const km = 1;

function getTime(Atime, Btime,delay) {
  const a = Atime / 60;
  const b = Btime / 60;
  const Aspeed = km / a;
  const Bspeed = km / b;

  for (let i = 1; i <= 60; i++) {
    let Adist = Aspeed * (i / 60);
    if (i > 10) {
     let Bdist = Bspeed * ((i-delay) / 60);

    if (Adist == (Bdist)) {
      console.log(`Both A and B reached the same distance after ${i} minutes.`);
      break;
    }
}
   
  }
}

getTime(100, 60,20);
