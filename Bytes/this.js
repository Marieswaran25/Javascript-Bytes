console.log(this);

const person = Object.freeze({
  namee: "maer",
  age: 22,
  getperson: function () {
    console.log(this.namee + this.age + this.school);
  },
});
person.namee = "s";
person.getperson();

function fn() {
  console.log(this.value);
}

const bound = fn.bind({ value: 5 });
bound();
