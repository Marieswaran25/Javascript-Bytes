const genUUID = () => {
    const possibleString= "1234567890abcdef";
    const newArray = new Array();
    const pickchar = ()=>{
      return possibleString.charAt(
        Math.floor(Math.random() * possibleString.length)
      );
    };
    for (var i = 0; i < 36; i++) {
      if (i == 8 || i == 13 || i == 18 || i == 23) {
        newArray.push("-");
      } else {
        newArray.push(pickchar());
      }
    }
    const UUID= newArray.join("");
    return UUID;
  };

console.log(genUUID())