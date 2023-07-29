//WHILE LOOP

//COUNTING UP

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i = i + 1;
// }

//COUNTING DOWN

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i = i - 1;
// }

//EASY

// let i = 0;
// while (i <= 100) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i = i + 1;
// }

// const colors = ["red", "blue", "yellow", "purple", "green"];
// let j = 0;
// while (j < colors.length) {
//   console.log(colors[j]);
//   j = j + 1;
// }

//MEDIUM

// function getSum(inputNumber) {
//   let sum = 0;

//   let i = 0;
//   while (i < 100) {
//     sum = sum + i;
//     i = i + 1;
//   }
//   return sum;
// }

// console.log(getSum(100));

//PRINT TRIANGLE

function printTriangle(height) {
  let i = 1;

  while (i < height + 1) {
    console.log("*".repeat(i));
    i = i + 1;
  }
}

printTriangle(10);

let arr = [1, 2, 3];
while (i < arr.length) {
  i = i + 1;
  arr.push(arr.length + i);
  console.log(arr.length);
}
