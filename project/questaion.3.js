
// 3️  Area of Square, Triangle, Rectangle, Circle
let shape = prompt("Find area of:\n1. Square\n2. Triangle\n3. Rectangle\n4. Circle");
let area = 0;

if (shape == "1") {
  let side = prompt("Enter side:");
  area = side * side;
  console.log("Area of Square = " + area);
} else if (shape == "2") {
  let base = prompt("Enter base:");
  let height = prompt("Enter height:");
  area = (base * height) / 2;
  console.log("Area of Triangle = " + area);
} else if (shape == "3") {
  let length = prompt("Enter length:");
  let width = prompt("Enter width:");
  area = length * width;
  console.log("Area of Rectangle = " + area);
} else if (shape == "4") {
  let r = prompt("Enter radius:");
  area = 3.14 * r * r;
  console.log("Area of Circle = " + area);
}

