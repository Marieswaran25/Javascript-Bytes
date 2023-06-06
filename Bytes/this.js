console.log(this)



const person=Object.freeze({
    namee:"maer",
    age:22,
    getperson:function(){
        console.log(this.namee+this.age+this.school)
    }
})
person.getperson();
