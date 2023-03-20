class Parent {
  print() {
    console.log("This is parent");
  }
}
class Child extends Parent {
  print() {
    console.log("This is child");
  }
}
const child = new Child();
child.print();
