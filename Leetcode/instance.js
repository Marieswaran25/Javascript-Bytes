var checkIfInstanceOf = function(obj, classFunction) {
    
    if((typeof(obj)==="object" && obj instanceof classFunction)){
        return true;
    }
    else if (typeof(obj)=== 'number'||typeof(obj)=== 'string'){
        return true
    }
    else {
        return false;
    }
};

console.log(checkIfInstanceOf(Date,Date))
console.log(checkIfInstanceOf(6,Number))
console.log(checkIfInstanceOf('Maries',String))